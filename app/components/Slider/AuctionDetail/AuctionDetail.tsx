import svgs from "@/app/components/Svgs";
import Image, { StaticImageData } from "next/image";
import Button, { RoundIconButton } from "../../Button/Button";
import Avatar from "../../Avatar/Avatar";
import { convertEthToUsd } from "@/app/api/ethereum/coingecko";
import { useEffect, useState } from "react";
import { formatEther } from "ethers";
import RemainingTime from "./RemainingTime/RemainingTime";
import ImagePreview from "./ImagePreview/ImagePreview";
import NFTInfo from "./NFTInfo/NFTInfo";

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
  image: StaticImageData | string;
}
const AuctionDetail = ({
  info,
  currentIndex,
  total,
  nextSlide,
  prevSlide,
}: {
  info: AuctionInfo;
  currentIndex: number;
  total: number;
  nextSlide: () => void;
  prevSlide: () => void;
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
  return (
    <div className="relative flex flex-col items-center w-full md:">
      {/* Image Preview */}
      <ImagePreview
        info={info}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        currentIndex={currentIndex}
        total={total}
      />
      {/* NFT Info */}
      <NFTInfo
        info={info}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        currentIndex={currentIndex}
        total={total}
        forLargeDevice={false}
      />
    </div>
  );
};

export default AuctionDetail;
