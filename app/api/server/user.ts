import { serverAxios } from "../axiosOptions";

export interface IUserInfo {
    id: string;
    address: string;
    role: string;
    token: string;
    avatar?: string;
    bio?: string;
    email?: string;
    name?: string;
    facebook?: string;
    instagram?: string;
    twitter?: string;
    profileCover?: string;
}

export type IUpdateUserInfo = Omit<IUserInfo, 'id' | 'avatar' | 'profileCover' | 'address' | 'role' | 'token'>;

export async function login(signature: string, address: string) {
    const res = await serverAxios.post("user/login", { signature, address });
    return res.data as unknown as IUserInfo;
}

export async function getUserInfo(id: string) {
    const res = await serverAxios.get(`user/getUserInfo?id=${id}`);
    return res.data as unknown as IUserInfo;
}

export async function updateProfileCover(ipfsHash: string) {
    const res = await serverAxios.put("user/updateProfileCover", { ipfsHash });
    return res.data as unknown as IUserInfo;
}

export async function updateProfileAvatar(ipfsHash: string) {
    const res = await serverAxios.put("user/updateProfileAvatar", { ipfsHash });
    return res.data as unknown as IUserInfo;
}

export async function updateUserInfo(body: IUpdateUserInfo) {
    const res = await serverAxios.put("user/updateUser", body);
    return res.data as unknown as IUserInfo;
}