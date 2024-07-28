import { serverAxios } from "../axiosOptions";

export interface ILogin {
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
}
export async function login(signature: string, address: string) {
    const res = await serverAxios.post("user/login", { signature, address });
    return res.data as unknown as ILogin;
}