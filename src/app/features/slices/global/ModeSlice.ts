import { createSlice } from "@reduxjs/toolkit";
import { themeState } from "../../../../types/theme";

const initialState: themeState = {
    mode: 'light',
}

export const themeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
    },
});

export const { setMode } = themeSlice.actions;
export default themeSlice.reducer;