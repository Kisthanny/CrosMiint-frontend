import { serverAxios } from "../axiosOptions";

export interface IHomePage {
    heroImage: string;
    top5AirdropList: {
        fromCollection: {
            owner: {
                avatar: string;
                name: string;
                id: string;
            };
            logoURI: string;
            name: string;
            id: string;
        };
        dropIndex: string;
        supply: string;
        minted: string;
        startTime: string;
        endTime: string;
        price: string;
        hasWhiteListPhase: boolean;
        whiteListEndTime: Date;
        whiteListPrice: string;
        mintLimitPerWallet: string;
        id: string;
        likeCount: number;
        isLiked: boolean;
    }[]
}

export async function getHomePage() {
    const res = await serverAxios.get("homePage/getHomePage");
    return res.data as unknown as IHomePage;
}