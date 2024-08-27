"use client";
import Avatar from "@/app/components/Avatar/Avatar";
import svgs from "@/app/components/Svgs";
import { formatEther } from "ethers";
import RemainingTime from "./RemainingTime/RemainingTime";
import Button, { RoundIconButton } from "@/app/components/Button/Button";
import { useEffect, useState } from "react";
import { convertEthToUsd } from "@/app/api/ethereum/coingecko";
import variables from "@/app/variables/variables";
import { IAirdrop } from "@/app/api/server/airdrop";
import { useReadContract, useAccount, useWriteContract } from "wagmi";
import { abi } from "@/contract.config";
import { toast } from "react-toastify";
import { showConnectWallet } from "@/app/lib/features/connectWallet/connectWalletSlice";
import { useAppDispatch } from "@/app/lib/hooks";
import {
  hideSpinner,
  showSpinner,
} from "@/app/lib/features/spinner/spinnerSlice";
import Link from "next/link";

const AirdropInfo = ({
  info,
  nextSlide,
  prevSlide,
  currentIndex,
  total,
}: {
  info: IAirdrop;
  nextSlide: () => void;
  prevSlide: () => void;
  currentIndex: number;
  total: number;
}) => {
  const dispatch = useAppDispatch();
  const { writeContract } = useWriteContract();
  const { isConnected, address } = useAccount();
  const { data: isWhiteList } = useReadContract({
    address: info.fromCollection.address as `0x${string}`,
    abi: abi.Collection721,
    functionName: "getWhiteListAccess",
    args: [address],
    chainId: Number(info.fromCollection.deployedAt.chainId) as 80002 | 11155111,
  });

  const mintOne = () => {
    dispatch(showSpinner());
    writeContract(
      {
        abi: abi.Collection721,
        address: info.fromCollection.address as `0x${string}`,
        functionName: "safeMint",
        args: [1],
        value: BigInt(isWhiteList ? info.whiteListPrice : info.price),
      },
      {
        onSettled(data, error, variables, context) {
          console.log("onSettled", { data, error, variables, context });
          dispatch(hideSpinner());
        },
        onSuccess(data, variables, context) {
          console.log("onSuccess", { data, variables, context });
        },
        onError(error, variables, context) {
          if (error.name === "ConnectorNotConnectedError") {
            dispatch(showConnectWallet());
          }
          console.log("onError", { error, variables, context });
        },
      },
    );
  };

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
      {/* Mint Price */}
      <div className="relative w-full rounded-md border-2 border-gray-300 pb-4 pl-16 pt-8">
        <div className="absolute -top-3 left-16 rounded-md bg-gray-300 px-5 py-3 text-sm font-semibold">
          Mint Price
        </div>
        <p>
          {formatEther(isWhiteList ? info.whiteListPrice : info.price)}{" "}
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
        <Button
          btnName="Mint"
          onClick={mintOne}
        />
        <Link href={`/collection/${info.fromCollection.id}`}>
          <Button btnName="View" />
        </Link>
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
