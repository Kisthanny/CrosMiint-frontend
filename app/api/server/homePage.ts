import { serverAxios } from "../axiosOptions";

export interface IHomePage {
    heroImage: string;
}

export async function getHomePage() {
    const res = await serverAxios.get("homePage/getHomePage");
    return res.data as unknown as IHomePage;
}