import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
    id: string;
    address: string;
    role: string;
    token: string;
    avatar: string;
    bio: string;
    email: string;
    name: string;
    facebook: string;
    instagram: string;
    twitter: string;
    createdAt: string;
    updatedAt: string;
}

const initialState: UserState = {
    id: "",
    address: "",
    role: "",
    token: "",
    avatar: "",
    bio: "",
    email: "",
    name: "",
    facebook: "",
    instagram: "",
    twitter: "",
    createdAt: "",
    updatedAt: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserInfo: (state, { payload }) => {
            const {
                address,
                id,
                role,
                token,
                avatar = "",
                bio = "",
                email = "",
                name = "",
                facebook = "",
                instagram = "",
                twitter = "",
                createdAt,
                updatedAt
            } = payload;
            state.address = address;
            state.id = id;
            state.role = role;
            state.token = token;
            state.avatar = avatar;
            state.bio = bio;
            state.email = email;
            state.name = name;
            state.facebook = facebook;
            state.instagram = instagram;
            state.twitter = twitter;
            state.createdAt = createdAt;
            state.updatedAt = updatedAt;
        },
        clearUserInfo: (state) => {
            state.address = "";
            state.id = "";
            state.role = "";
            state.token = "";
            state.avatar = "";
            state.bio = "";
            state.email = "";
            state.name = "";
            state.facebook = "";
            state.instagram = "";
            state.twitter = "";
            state.createdAt = "";
            state.updatedAt = "";
            sessionStorage.removeItem("token");
        }
    },
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;
