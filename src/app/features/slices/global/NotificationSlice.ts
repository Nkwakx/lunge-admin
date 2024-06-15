import { AlertColor } from "@mui/material";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface NotificationState {
    open?: boolean;
    type?: AlertColor;
    message?: string;
    timeout?: number | null;
}

export const initialState: NotificationState = {
    open: false,
    type: "info",
    message: '',
    timeout: 5000
}

export const NotificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        addNotification: (_state, action: PayloadAction<NotificationState>) => ({
            ...initialState,
            ...action.payload,
            open: true
        }),
        clearNotification: (state) => ({ ...state, open: false })
    },
})
export const { addNotification: addNotifications, clearNotification } = NotificationSlice.actions;
export default NotificationSlice.reducer;