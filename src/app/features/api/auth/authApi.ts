import { authState, User, UserSignupResponse } from '../../../../types/auth';
import { HttpClient } from './../../../../lib/axios';

const httpClient = HttpClient();

export const register = async (data: User) => {
    return httpClient.post<User, UserSignupResponse>('/register', data);
};

export const login = async (data: { email: string, password: string }) => {
    return httpClient.post('/login', data);
};

export const logout = async () => {
    return httpClient.get('/logout');
};

export const refreshToken = async (): Promise<{ access_token: string | null }> => {
    const httpClient = HttpClient();
    const response = await httpClient.get<authState>('/refresh', {
        withCredentials: true,
    });
    return { access_token: response.token };
};
