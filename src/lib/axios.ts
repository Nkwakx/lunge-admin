import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { useEffect } from "react";
import { refreshToken } from "../app/features/api/auth/authApi";
import { RootState } from "../app/store";

interface IHttpClient {
    get<TResponse>(path: string, config?: AxiosRequestConfig): Promise<TResponse>;
    post<TRequest, TResponse>(path: string, data: TRequest, config?: AxiosRequestConfig): Promise<TResponse>;
}

const isProduction = import.meta.env.PROD;
const siteApi = isProduction
    ? import.meta.env.VITE_BASE_URL_PRODUCTION
    : import.meta.env.VITE_BASE_URL_SITE_API;

const createAxiosClient = (apiVersion?: number, isMetrics?: boolean): AxiosInstance => {

    return axios.create({
        baseURL: siteApi,
        headers: {
            'X-Version': isMetrics ? undefined : apiVersion ?? 1.0,
            'Content-Type': 'application/json;charset=UTF-8/',
        },
    });
};

export const createAxiosAuthClient = (getState: () => RootState, apiVersion?: number, isMetrics?: boolean): AxiosInstance => {
    const token = getState().auth.token;

    const instance = axios.create({
        baseURL: siteApi,
        responseEncoding: 'utf8',
        responseType: 'json',
        headers: {
            Authorization: `Bearer ${token}`,
            'X-Version': isMetrics ? undefined : apiVersion ?? 1.0,
            'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
    });

    return instance;
}

export const HttpClient = (apiVersion?: number, isMetrics?: boolean): IHttpClient => {
    const client = createAxiosClient(apiVersion, isMetrics);

    const get = async <TResponse>(path: string, config?: AxiosRequestConfig): Promise<TResponse> => {
        return new Promise<TResponse>((resolve, reject) => {
            client.get<TResponse>(path, config)
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    };

    const post = async <TRequest, TResponse>(path: string, data: TRequest, config?: AxiosRequestConfig): Promise<TResponse> => {
        return new Promise<TResponse>((resolve, reject) => {
            client.post<TResponse>(path, data, config)
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    };

    return {
        get,
        post,
    };
};

export const HttpAuthClient = (getState: () => RootState, apiVersion?: number, isMetrics?: boolean): IHttpClient => {
    const client = createAxiosAuthClient(getState, apiVersion, isMetrics);
    const token = getState().auth.token ?? localStorage.getItem('token');

    useEffect(() => {
        const requestIntercept = client.interceptors.request.use(
            (config) => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
                return config;
            }, (error => Promise.reject(error))
        );
        const responseIntercept = client.interceptors.response.use(
            (response) => response,
                    async (error: AxiosError) => {
                        const prevRequest = error?.config;
                        if (error.response?.status === 403 && !prevRequest?.signal) {
                            if (prevRequest) {
                                prevRequest.transitional = { silentJSONParsing: true };
                                const newAccessToken = await refreshToken(); 
                                prevRequest.headers['Authorization'] = `Bearer ${newAccessToken.access_token}`;
                                return client(prevRequest);
                            }
                        }
                        return Promise.reject(error);
                    }
                );
                return () => {
                    client.interceptors.request.eject(requestIntercept);
                    client.interceptors.response.eject(responseIntercept)
                }
            }, [token, client])

    const get = async <TResponse>(path: string, config?: AxiosRequestConfig): Promise<TResponse> => {
        return new Promise<TResponse>((resolve, reject) => {
            client.get<TResponse>(path, config)
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    };

    const post = async <TRequest, TResponse>(path: string, data: TRequest, config?: AxiosRequestConfig): Promise<TResponse> => {
        return new Promise<TResponse>((resolve, reject) => {
            client.post<TResponse>(path, data, config)
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    };

    return {
        get,
        post,
    };
};