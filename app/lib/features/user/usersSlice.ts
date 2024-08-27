import { IUserInfo } from "@/app/api/server/user";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IUserInfo = {
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
    profileCover: "",
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
                profileCover = "",
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
            state.profileCover = profileCover;
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
            state.profileCover = "";
            state.createdAt = "";
            state.updatedAt = "";
            sessionStorage.removeItem("token");
        }
    },
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;
