import { serverAxios } from "../axiosOptions";
import { IAirdrop } from "./airdrop";
export interface ICategory {
    name: string;
    image: string;
}

export interface IOverview {
    blockType: string;
    title?: string;
    description?: string;
    imageSrc?: string;
    position?: string;
}

export interface ICollection {
    id: string;
    address: string;
    owner: {
        id: string;
        address: string;
        avatar: string;
        name: string;
    };
    logoURI: string;
    name: string;
    symbol: string;
    protocol: string;
    deployedAt: {
        chainName: string;
        id: string;
        networkId: number;
    };
    isBase: boolean;
    category?: string;
    airdrops: (string | IAirdrop)[];
    previewImages?: string[];
    networks: { networkId: number; networkCollection: string }[];
    baseURI?: string;
    bannerImageSrc?: string;
    description?: string;
    overviews?: (string | IOverview)[];
    createdAt: string;
    updatedAt: string;
}

export async function getCategoryList() {
    const res = await serverAxios.get("collection/getCategoryList");
    return res.data.dataList as unknown as ICategory[];
}

export async function getCollectionInfo(id: string) {
    const res = await serverAxios.get(`collection/getCollectionInfo?id=${id}`);
    return res.data as unknown as ICollection;
}

export async function updateCollection(payload: ICollection) {
    const res = await serverAxios.put("collection/updateCollection", payload);
    return res.data as unknown as ICollection;
}