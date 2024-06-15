import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { setupListeners } from "@reduxjs/toolkit/query";
import authSlice  from "./features/slices/auth/AuthSlice";
import themeSlice from "./features/slices/global/ModeSlice";
import NotificationSlice  from "./features/slices/global/NotificationSlice";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['theme', 'menuToggle', 'auth'],
    version: 1,
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
    auth: authSlice,
    theme: themeSlice,
    notification: NotificationSlice
}))

export const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }).concat(),
    devTools: import.meta.env.NODE_ENV === 'development',
    reducer: persistedReducer,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;