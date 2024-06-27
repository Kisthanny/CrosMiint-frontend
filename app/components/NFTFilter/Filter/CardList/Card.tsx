import { FC } from "react";
import Image from "next/image";
import { FeaturedNFT } from "../Filter";
import { formatEther } from "ethers";
import PlayButton from "./PlayButton";
import RemainingTime from "./RemainingTime";
import LikeButton from "./LikeButton";
import HoverCard from "@/app/components/HoverCard/HoverCard";
import Mask from "./Mask";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import Stock from "./Stock";
import Label from "@/app/components/Label/Label";
import OwnerGroup from "@/app/components/OwnerGroup/OwnerGroup";

export const isImage = (c: FeaturedNFT) => c.type === "image";
export const isVideo = (c: FeaturedNFT) => c.type === "video";
export const isMusic = (c: FeaturedNFT) => c.type === "music";

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
      {isMusic(e) ? (
        <PlayButton
          className="absolute bottom-[86px] right-6 opacity-0 group-hover/nftcard:opacity-100"
          onClick={() => {
            console.log("click play");
          }}
        />
      ) : null}
      {isVideo(e) ? (
        <PlayButton
          className="absolute bottom-[96px] right-3 opacity-0 group-hover/nftcard:opacity-100"
          onClick={() => {
            console.log("click play video");
          }}
        />
      ) : null}
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
      <div
        className={`absolute bottom-0 left-0 flex ${isVideo(e) ? "h-[88px]" : "h-[78px]"} w-[120px] flex-col items-center justify-between p-2`}
      >
        <p className="text-center text-xs font-medium">{e.name}</p>
        <Label
          className="w-full"
          name="Current Bid"
        >
          {Number(formatEther(e.currentBid)).toFixed(3)}ETH
        </Label>
      </div>
      {isMusic(e) && (
        <>
          <OwnerGroup
            className="absolute bottom-8 right-6"
            owners={e.owners}
          />
          <Stock
            stock={e.stock}
            className="absolute bottom-4 right-9"
          />
        </>
      )}
      {isVideo(e) && (
        <Stock
          stock={e.stock}
          className="absolute bottom-16 right-2"
        />
      )}
    </HoverCard>
  );
};

export default Card;
