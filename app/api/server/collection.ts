import { serverAxios } from "../axiosOptions";

export interface ICategory {
    name: string;
    image: string;
}

export async function getCategoryList() {
    const res = await serverAxios.get("collection/getCategoryList");
    return res.data.dataList as unknown as ICategory[];
}