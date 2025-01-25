
import { RefreshToken, SigninRequest, SigninResponse, SignupRequest, SignupResponse } from '../../../../types/auth';
import { HttpClient } from './../../../../lib/axios';

const httpClient = HttpClient();

export const register = async (data: SignupRequest) => {
    return httpClient.post<SignupRequest, SignupResponse>('/auth/register', data);
};

export const login = async (data: SigninRequest) => {
    return httpClient.post<SigninRequest, SigninResponse>('/auth/login', data);
};

export const logout = async () => {
    return httpClient.post('/auth/logout', {});
};

export const refreshToken = async (data: RefreshToken) => {
    return await httpClient.post<RefreshToken, RefreshToken>('/auth/refresh', data);
};
