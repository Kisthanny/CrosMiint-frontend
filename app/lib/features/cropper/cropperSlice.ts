import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CropperState {
    isOpen: boolean;
    aspectWidth: number;
    aspectHeight: number;
    onCropped?: (croppedImage: string) => Promise<void>;
}

interface ShowCropperPayload {
    aspect: [number, number];
    onCropped?: (croppedImage: string) => Promise<void>;
}

const initialState: CropperState = {
    isOpen: false,
    aspectWidth: 1,
    aspectHeight: 1,
};

export const cropperSlice = createSlice({
    name: "cropper",
    initialState,
    reducers: {
        showCropper: (state, action: PayloadAction<ShowCropperPayload>) => {
            const { aspect, onCropped } = action.payload;
            state.aspectWidth = aspect[0];
            state.aspectHeight = aspect[1]
            state.onCropped = onCropped;
            state.isOpen = true;
        },
        hideCropper: (state) => {
            state.isOpen = false;
            state.aspectWidth = 1;
            state.aspectHeight = 1;
            state.onCropped = undefined;
        }
    },
});

export const { showCropper, hideCropper } = cropperSlice.actions;
