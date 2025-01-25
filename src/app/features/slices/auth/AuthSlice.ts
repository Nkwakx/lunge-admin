import { createAsyncThunk, createSlice, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
import { authState, RefreshToken, SigninRequest, SignupRequest } from "../../../../types/auth";
import { logout, refreshToken, register, login } from './../../api/auth/authApi';

const initialState: authState = {
    user: null,
    accessToken: null,
    refreshToken: null,
    loading: false,
    isSuccess: false,
    statusCode: null,
    message: null,
    tokenType: null,
    expiresIn: false
};

const signout = createAsyncThunk('logout', async () => await logout());
const signin = createAsyncThunk('login', async (payload: SigninRequest) => await login(payload));
const signup = createAsyncThunk('register', async (payload: SignupRequest) => await register(payload));
const refresh = createAsyncThunk('refresh', async (payload: RefreshToken) => await refreshToken(payload));

const isThunkPending = isPending(signin, signup, signout, refresh);
const isThunkFulfilled = isFulfilled(signin, signup, signout, refresh);
const isThunkRejected = isRejected(signin, signup, signout, refresh);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredential: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken
            state.tokenType = action.payload.tokenType;
            state.expiresIn = action.payload.expiresIn;
        },
        setToken: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken
        },
        resetAuth: (state) => {
            state.accessToken = null;
            state.refreshToken = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signin.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.tokenType = action.payload.tokenType;
            state.expiresIn = action.payload.expiresIn;
        });
        builder.addCase(signup.fulfilled, (state) => {
            state.isSuccess = true;
        });

        builder.addCase(refresh.fulfilled, (state) => {
            state.isSuccess = true;
        });

        builder.addCase(signout.fulfilled, (state) => {
            state.isSuccess = true;
        });

        

        builder.addMatcher(isThunkPending, (state) => {
            state.isSuccess = false;
            state.loading = true;
        });

        builder.addMatcher(isThunkFulfilled, (state) => {
            state.isSuccess = true;
            state.loading = false;
        });

        builder.addMatcher(isThunkRejected, (state, action) => {
            state.isSuccess = false;
            state.loading = false;
            state.message = action.error?.message || null;
        });
    }
});

export const authEventActions = { ...authSlice.actions, signout, signin, refresh, signup };
export default authSlice.reducer;