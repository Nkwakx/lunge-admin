import { useMemo } from "react";
import { useAppDispatch } from "../store";
import { authEventActions } from "../features/slices/auth/AuthSlice";
import { SigninRequest, RefreshToken, SignupRequest } from "../../types/auth";

interface AuthEventActions {
    signout: () => void;
    resetAuth: () => void;
    signin: (payload: SigninRequest) => void;
    refresh: (payload: RefreshToken) => void;
    signup: (payload: SignupRequest) => void;
    setToken: (payload: RefreshToken) => void;
    setCredential: (payload: SigninRequest) => void;
}

export function useAuthActions(): AuthEventActions {
    const dispatch = useAppDispatch();

    return useMemo(() => ({
        signout: () => dispatch(authEventActions.signout()),
        resetAuth: () => dispatch(authEventActions.resetAuth()),
        signin: (payload: SigninRequest) => dispatch(authEventActions.signin(payload)),
        refresh: (payload: RefreshToken) => dispatch(authEventActions.refresh(payload)),
        signup: (payload: SignupRequest) => dispatch(authEventActions.signup(payload)),
        setToken: (payload: RefreshToken) => dispatch(authEventActions.setToken(payload)),
        setCredential: (payload: SigninRequest) => dispatch(authEventActions.setCredential(payload)),
    }), [dispatch])
}