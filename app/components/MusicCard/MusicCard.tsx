"use client";
import { FunctionComponent, useState } from "react";
import HoverCard from "../HoverCard/HoverCard";
import { Avatar } from "@nextui-org/react";
import svgs from "../Svgs";
import variables from "@/app/variables/variables";
import { formatEther } from "ethers";
import { FeaturedNFT } from "../NFTFilter/Filter/Filter";
import Stock from "../NFTFilter/Filter/CardList/Stock";
import Label from "../Label/Label";
import OwnerGroup from "../OwnerGroup/OwnerGroup";

type MusicCardProps = {
  isPlaying?: boolean;
} & FeaturedNFT;

const MusicCard: FunctionComponent<MusicCardProps> = ({
  currentBid,
  stock,
  owners,
  name,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handleClick = () => {
    setIsPlaying((p) => !p);
  };

  return (
    <section className="flex flex-col p-16 text-gray-600 md:items-center">
      <HoverCard
        className={`flex h-[84px] w-[302px] items-center justify-between p-2 bg-gray-${isPlaying ? "100" : "300"} ${isPlaying ? "shadow-lg" : ""}`}
      >
        <Avatar
          className="mr-[6px] h-[50px] w-[50px] rounded-lg"
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
        />
        <div className="flex h-[62px] w-[105px] flex-col items-center justify-between">
          <p className="text-center text-xs font-medium">{name}</p>
          <Label
            className="w-full"
            name="price"
          >
            {Number(formatEther(currentBid)).toFixed(3)}ETH
          </Label>
        </div>
        <div className="flex h-14 flex-col items-center justify-between">
          <OwnerGroup owners={owners} />
          <Stock stock={stock} />
        </div>
        <div onClick={handleClick}>
          {isPlaying ? (
            <svgs.PlayerStop
              color={variables.textMain}
              size={20}
            />
          ) : (
            <svgs.PlayerPlay
              color={variables.textMain}
              size={20}
            />
          )}
        </div>
      </HoverCard>
    </section>
  );
};

export default MusicCard;
