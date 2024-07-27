"use client";
import { useEffect, useState } from "react";
import AirdropSwiperSkeleton from "./AirdropSwiperSkeleton/AirdropSwiperSkeleton";
import AirdropSwiper from "./AirdropSwiper/AirdropSwiper";
import { getTop5AirdropList, ITop5Airdrop } from "@/app/api/server/airdrop";

const TopAirdrop = () => {
  const [airdropList, setAirdropList] = useState<ITop5Airdrop[]>([]);

  const init = async () => {
    const res = await getTop5AirdropList();
    setAirdropList(res);
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <section className="flex w-full justify-center overflow-x-hidden p-16">
      {airdropList.length ? (
        <AirdropSwiper airdropList={airdropList} />
      ) : (
        <AirdropSwiperSkeleton />
      )}
    </section>
  );
};

export default TopAirdrop;
