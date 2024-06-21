import { FC } from "react";
import Image from "next/image";
import { FeaturedNFT } from "../Filter";
import { formatEther } from "ethers";
import PlayButton from "./PlayButton";
import RemainingTime from "./RemainingTime";
import LikeButton from "./LikeButton";
import HoverCard from "./HoverCard";
import Mask from "./Mask";

const isImage = (c: FeaturedNFT) => c.type === "image";
const isVideo = (c: FeaturedNFT) => c.type === "video";
const isMusic = (c: FeaturedNFT) => c.type === "music";

const Card: FC<FeaturedNFT> = (e) => {
  const image = (
    <Image
      src={e.image}
      alt={e.name}
      className="transition-transform hover:scale-110"
    />
  );
  return (
    <HoverCard className={`group/nftcard ${isImage(e) ? "p-2" : "p-0"}`}>
      {isVideo(e) ? (
        <div className="h-[164px] w-full overflow-hidden rounded-lg">
          {image}
        </div>
      ) : (
        <Mask maskImage={`url('./mask-00${isImage(e) ? "2" : "3"}.png')`}>
          {image}
        </Mask>
      )}
      <LikeButton
        className="absolute left-0 top-2"
        likes={e.likes}
        userLiked={e.userLiked}
      />
      {isImage(e) ? null : isMusic(e) ? (
        <PlayButton
          className="absolute bottom-[86px] right-6 opacity-0 group-hover/nftcard:opacity-100"
          onClick={() => {
            console.log("click play");
          }}
        />
      ) : (
        <PlayButton
          className="absolute bottom-[96px] right-3 opacity-0 group-hover/nftcard:opacity-100"
          onClick={() => {
            console.log("click play video");
          }}
        />
      )}
      {isVideo(e) ? (
        <RemainingTime
          className="absolute bottom-0 right-0 p-2"
          endTime={e.endTime}
        />
      ) : (
        <RemainingTime
          className="absolute right-0 top-0.5 w-[60%]"
          endTime={e.endTime}
        />
      )}
      {/* Info */}
      <div className="absolute bottom-0 left-0 flex h-[78px] w-[120px] flex-col items-center justify-between p-2">
        <p className="text-center text-xs font-medium">{e.name}</p>
        <div className="relative flex h-[34px] w-full items-center justify-center rounded-lg border border-gray-300">
          <p className="text-sm font-medium">
            {Number(formatEther(e.currentBid)).toFixed(3)}ETH
          </p>
          <div className="absolute -top-2 rounded-md bg-gray-600 px-[6px] text-[10px] text-white">
            Current Bid
          </div>
        </div>
      </div>
    </HoverCard>
  );
};

export default Card;
