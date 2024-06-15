
export interface User {
    id: string;
    email: string;
    username: string;
    role: RoleType;
}
export interface Role {
    id: string;
    name: RoleType;
}

export interface authState{
    user: User | null;
    token: string | null;
    refreshToken: string | null;
    loading: boolean;
    isSuccess: boolean;
    statusCode: [] | null;
    message: string | null;
}
export interface UserSigninRequest{
    email: string;
    password: string;
}

export interface UserSignupResponse{
    id: string;
    email: string;
    role: RoleType[];
}

export type RoleType = "Admin" | "Super Admin" | "Merchant Director" | "Merchant Employee"