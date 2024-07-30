import { createSlice } from "@reduxjs/toolkit";

export interface SpinnerState {
    isOpen: boolean;
}

const initialState: SpinnerState = {
    isOpen: false,
};

export const spinnerSlice = createSlice({
    name: "spinner",
    initialState,
    reducers: {
        showSpinner: (state) => {
            state.isOpen = true;
        },
        hideSpinner: (state) => {
            state.isOpen = false;
        },
    },
});

export const { showSpinner, hideSpinner } = spinnerSlice.actions;
