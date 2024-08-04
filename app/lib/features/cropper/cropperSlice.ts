import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CropperState {
    isOpen: boolean;
    aspect: number;
    onCropped?: (cropperdImage: string) => Promise<void>;
}

interface ShowCropperPayload {
    aspect: number;
    onCropped?: (cropperdImage: string) => Promise<void>;
}

const initialState: CropperState = {
    isOpen: false,
    aspect: 1,
};

export const cropperSlice = createSlice({
    name: "cropper",
    initialState,
    reducers: {
        showCropper: (state, action: PayloadAction<ShowCropperPayload>) => {
            const { aspect, onCropped } = action.payload;
            state.aspect = aspect;
            state.onCropped = onCropped;
            state.isOpen = true;
        },
        hideCropper: (state) => {
            state.isOpen = false;
            state.aspect = 1;
            state.onCropped = undefined;
        }
    },
});

export const { showCropper, hideCropper } = cropperSlice.actions;
