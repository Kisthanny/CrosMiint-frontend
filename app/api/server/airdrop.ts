import { serverAxios } from "../axiosOptions";

export interface ITop5Airdrop {
    fromCollection: {
        owner: {
            avatar: string;
            name: string;
            verified?: boolean;
            id: string;
        };
        logoURI: string;
        name: string;
        deployedAt: {
            networkId: string;
            id: string;
            chainId: '80002' | '11155111';
            nativeCurrency: {
                name: string;
                symbol: string;
                decimals: number;
            },
        }
        id: string;
        address: string;
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
}

export async function getTop5AirdropList() {
    const res = await serverAxios.get("airdrop/getTop5AirdropList");
    return res.data.dataList as unknown as ITop5Airdrop[];
}