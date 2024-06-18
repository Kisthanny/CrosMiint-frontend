"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { mockAuctionList } from "./mockData";
import NFTSwiperSkeleton from "./NFTSwiperSkeleton/NFTSwiperSkeleton";
import NFTSwiper from "./NFTSwiper/NFTSwiper";

export interface AuctionInfo {
  name: string;
  creator: {
    name: string;
    verified: boolean;
  };
  collection: {
    name: string;
  };
  currentBid: string;
  endTime: Date;
  likes: number;
  userLiked: boolean;
  image: StaticImageData | string;
}
const NFTAuction = () => {
  const [auctionList, setAuctionList] = useState<AuctionInfo[]>([]);

  const getAuctionList = () => {
    setTimeout(() => {
      setAuctionList(mockAuctionList);
    }, 1000);
  };

  useEffect(() => {
    getAuctionList();
  }, []);
  return (
    <section className="p-16 flex justify-center">
      {auctionList.length ? <NFTSwiper auctionList={auctionList}/> : <NFTSwiperSkeleton />}
    </section>
  );
};

export default NFTAuction;
