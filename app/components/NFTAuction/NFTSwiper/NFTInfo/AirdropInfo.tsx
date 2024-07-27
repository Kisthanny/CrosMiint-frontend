"use client";
import Avatar from "@/app/components/Avatar/Avatar";
import svgs from "@/app/components/Svgs";
import { formatEther } from "ethers";
import RemainingTime from "./RemainingTime/RemainingTime";
import Button, { RoundIconButton } from "@/app/components/Button/Button";
import { useEffect, useState } from "react";
import { convertEthToUsd } from "@/app/api/ethereum/coingecko";
import variables from "@/app/variables/variables";
import { ITop5Airdrop } from "@/app/api/server/airdrop";

const AirdropInfo = ({
  info,
  nextSlide,
  prevSlide,
  currentIndex,
  total,
}: {
  info: ITop5Airdrop;
  nextSlide: () => void;
  prevSlide: () => void;
  currentIndex: number;
  total: number;
}) => {
  return (
    <div
      className={`mt-8 flex flex-col gap-8 rounded-lg p-4 text-gray-600 shadow-lg md:mt-0 md:min-w-[360px]`}
    >
      <h1 className="text-2xl font-bold">{`${info.fromCollection.name} #${info.dropIndex}`}</h1>
      {/* Creator & Collection */}
      <div className="flex flex-col gap-8 sm:flex-row">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <Avatar
              size={50}
              src={info.fromCollection.owner.avatar}
            />
          </div>
          <div>
            <p className="font-light">Creator</p>
            <p className="flex items-center gap-1 text-nowrap font-bold">
              <span>{info.fromCollection.owner.name}</span>
              {info.fromCollection.owner.verified && (
                <svgs.Verified color={variables.textMain} />
              )}
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <svgs.Fire
            size={50}
            color={variables.textMain}
          />
          <div>
            <p className="font-light">Collection</p>
            <p className="flex items-center gap-1 text-nowrap font-bold">
              <span>{info.fromCollection.name}</span>
            </p>
          </div>
        </div>
      </div>
      {/* Current Bid */}
      <div className="relative w-full rounded-md border-2 border-gray-300 pb-4 pl-16 pt-8">
        <div className="absolute -top-3 left-16 rounded-md bg-gray-300 px-5 py-3 text-sm font-semibold">
          Current Bid
        </div>
        <p>
          {formatEther(info.price)}{" "}
          {info.fromCollection.deployedAt.nativeCurrency.symbol}
        </p>
      </div>
      {/* Timer */}
      <div className="flex flex-col gap-4 border-b-[1px] border-gray-200 pb-4">
        <div className="flex items-center gap-4">
          <svgs.Timer
            size={32}
            color={variables.textMain}
          />
          <p>Airdrop ending in</p>
        </div>
        <div>
          <RemainingTime endTime={new Date(info.endTime)} />
        </div>
      </div>
      {/* Buttons */}
      <div className="flex items-center justify-center gap-8 sm:gap-16 md:gap-32">
        <Button btnName="Mint" />
        <Button btnName="View" />
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-between gap-8">
        <RoundIconButton
          icon={<svgs.ArrowWithHandle direction="Left" />}
          iconHover={
            <svgs.ArrowWithHandle
              direction="Left"
              color="white"
            />
          }
          onClick={prevSlide}
          disabled={currentIndex === 0}
        />
        <RoundIconButton
          icon={<svgs.ArrowWithHandle direction="Right" />}
          iconHover={
            <svgs.ArrowWithHandle
              direction="Right"
              color="white"
            />
          }
          onClick={nextSlide}
          disabled={currentIndex === total - 1}
        />
      </div>
    </div>
  );
};

export default AirdropInfo;
