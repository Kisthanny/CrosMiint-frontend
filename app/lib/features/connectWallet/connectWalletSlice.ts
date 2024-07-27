// redux/slices/connectWalletSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { AppThunk } from "../../store";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ConnectWalletState {
    isOpen: boolean;
}

const initialState: ConnectWalletState = {
    isOpen: false,
};

export const connectWalletSlice = createSlice({
    name: "connectWallet",
    initialState,
    reducers: {
        showConnectWallet: (state) => {
            state.isOpen = true;
        },
        hideConnectWallet: (state) => {
            state.isOpen = false;
        },
    },
});

export const { showConnectWallet, hideConnectWallet } = connectWalletSlice.actions;
