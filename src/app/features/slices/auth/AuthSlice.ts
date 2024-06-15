import { createAsyncThunk, createSlice, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
import { authState } from "../../../../types/auth";
import { login } from "../../api/auth/authApi";
import { User } from './../../../../types/auth';
import { logout, refreshToken, register } from './../../api/auth/authApi';

const initialState: authState = {
    user: null,
    token: null,
    refreshToken: null,
    loading: false,
    isSuccess: false,
    statusCode: null,
    message: null
};

const signin = createAsyncThunk('login', async (payload: { email: string, password: string }) => await login(payload));
const registerUser = createAsyncThunk('register', async (payload: User) => await register(payload));
const logoutUser = createAsyncThunk('logout', async () => await logout());
const refresh = createAsyncThunk('refreshToken', async () => await refreshToken());

const isThunkPending = isPending(signin, registerUser, logoutUser, refresh);
const isThunkFulfilled = isFulfilled(signin, registerUser, logoutUser, refresh);
const isThunkRejected = isRejected(signin, registerUser, logoutUser, refresh);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(refresh.fulfilled, (state) => {
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

export const authReducer = authSlice.actions;
export default authSlice.reducer;