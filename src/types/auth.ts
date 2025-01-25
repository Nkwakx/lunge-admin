
export interface authState{
    loading: boolean;
    isSuccess: boolean;
    expiresIn: boolean;
    statusCode: [] | null;
    message: string | null;
    tokenType: string | null;
    accessToken: string | null;
    user: SignupResponse | null;
    refreshToken: string | null;
}

export interface SigninRequest{
    email: string;
    submit: boolean;
    password: string;
}

export interface SigninResponse{
    tokenType: string;
    expiresIn: boolean;
    accessToken: string;
    refreshToken: string;
}

export interface SignupRequest {
    id: string;
    email: string;
    role: RoleType;
    username: string;
}

export interface SignupResponse{
    name: string;
    email: string;
    errors: string;
    surname: string;
    username: string;
}

export interface RefreshToken{
    accessToken: string | null;
    refreshToken: string | null;
}

export interface Role {
    id: string;
    name: RoleType;
}

export type RoleType = "Admin" | "Super Admin" | "Merchant Director" | "Merchant Employee"