"use client";
import Avatar from "@/app/components/Avatar/Avatar";
import { AuctionInfo } from "../AuctionDetail";
import svgs from "@/app/components/Svgs";
import { formatEther } from "ethers";
import RemainingTime from "../RemainingTime/RemainingTime";
import Button, { RoundIconButton } from "@/app/components/Button/Button";
import { useEffect, useState } from "react";
import { convertEthToUsd } from "@/app/api/ethereum/coingecko";

const NFTInfo = ({
  info,
  nextSlide,
  prevSlide,
  currentIndex,
  total,
  forLargeDevice,
}: {
  info: AuctionInfo;
  nextSlide: () => void;
  prevSlide: () => void;
  currentIndex: number;
  total: number;
  forLargeDevice: boolean;
}) => {
  const [usdPrice, setUsdPrice] = useState("");
  const getUsdPrice = async () => {
    if (info === null) {
      setUsdPrice("");
      return;
    }
    try {
      const result = await convertEthToUsd(
        Number(formatEther(info.currentBid))
      );
      setUsdPrice(result.toFixed(2));
    } catch (error) {
      console.error(error);
      setUsdPrice("");
    }
  };

  useEffect(() => {
    getUsdPrice();
  }, [info]);

  const mdClass = forLargeDevice ? "hidden md:flex" : "md:hidden";
  return (
    <div
      className={`flex flex-col gap-8 p-4 shadow-lg rounded-lg text-gray-600 md:w-[360px] ${mdClass}`}
    >
      <h1 className="font-bold text-2xl">{info.name}</h1>
      {/* Creator & Collection */}
      <div className="flex flex-col sm:flex-row items-start gap-8">
        <div className="flex gap-4">
          <div>
            <Avatar size={50} />
          </div>
          <div>
            <p className="font-light">Creator</p>
            <p className="font-bold text-nowrap flex items-center gap-1">
              <span>{info.creator.name}</span>
              {info.creator.verified && <svgs.Verified color="#4b5563" />}
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <svgs.Fire size={50} color="#4b5563" />
          <div>
            <p className="font-light">Collection</p>
            <p className="font-bold text-nowrap flex items-center gap-1">
              <span>{info.collection.name}</span>
            </p>
          </div>
        </div>
      </div>
      {/* Current Bid */}
      <div className="relative w-full border-2 rounded-md border-gray-300 pt-8 pl-16 pb-4">
        <div className="absolute left-16 -top-3 py-3 px-5 rounded-md bg-gray-300 text-sm font-semibold">
          Current Bid
        </div>
        <p>
          {formatEther(info.currentBid)} ETH ${usdPrice || "999999.99"}
        </p>
      </div>
      {/* Timer */}
      <div className="border-b-[1px] border-gray-200 pb-4 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <svgs.Timer size={32} color="#4b5563" />
          <p>Auction ending in</p>
        </div>
        <div>
          <RemainingTime endTime={info.endTime} />
        </div>
      </div>
      {/* Buttons */}
      <div className="flex items-center justify-center gap-8 sm:gap-16 md:gap-32">
        <Button btnName="Place" />
        <Button btnName="View" />
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-between gap-8">
        <RoundIconButton
          icon={<svgs.ArrowWithHandle direction="Left" />}
          iconHover={<svgs.ArrowWithHandle direction="Left" color="white" />}
          onClick={prevSlide}
          disabled={currentIndex === 0}
        />
        <RoundIconButton
          icon={<svgs.ArrowWithHandle direction="Right" />}
          iconHover={<svgs.ArrowWithHandle direction="Right" color="white" />}
          onClick={nextSlide}
          disabled={currentIndex === total - 1}
        />
      </div>
    </div>
  );
};

export default NFTInfo;
