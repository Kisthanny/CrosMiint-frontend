"use client";
import { useEffect, useState } from "react";
import AirdropSwiperSkeleton from "./AirdropSwiperSkeleton/AirdropSwiperSkeleton";
import AirdropSwiper from "./AirdropSwiper/AirdropSwiper";
import {
  getTop5AirdropList,
  ITop5Airdrop,
  likeAirdrop,
  unlikeAirdrop,
} from "@/app/api/server/airdrop";
import { cloneDeep } from "lodash";

const TopAirdrop = () => {
  const [airdropList, setAirdropList] = useState<ITop5Airdrop[]>([]);

  const init = async () => {
    const res = await getTop5AirdropList();
    setAirdropList(res);
  };

  const toggleLike = async (airdropId: string) => {
    const airdropIndex = airdropList.findIndex((e) => e.id === airdropId);
    if (airdropIndex === -1) {
      return;
    }
    const airdrop = airdropList[airdropIndex];
    const tiggleAction = airdrop.isLiked ? unlikeAirdrop : likeAirdrop;
    const res = await tiggleAction(airdrop.id);
    if (res) {
      const clone = cloneDeep(airdropList);
      clone[airdropIndex].likeCount += clone[airdropIndex].isLiked ? -1 : 1;
      clone[airdropIndex].isLiked = !clone[airdropIndex].isLiked;
      setAirdropList(clone);
    }
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <section className="flex w-full justify-center overflow-x-hidden p-16">
      {airdropList.length ? (
        <AirdropSwiper
          airdropList={airdropList}
          toggleLike={toggleLike}
        />
      ) : (
        <AirdropSwiperSkeleton />
      )}
    </section>
  );
};

export default TopAirdrop;
