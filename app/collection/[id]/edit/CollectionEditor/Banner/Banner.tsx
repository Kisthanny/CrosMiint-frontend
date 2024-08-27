"use client";
import { ICollection } from "@/app/api/server/collection";
import { uploadMedia } from "@/app/api/server/metadata";
import { urlToFile } from "@/app/components/ImageCropper/canvasUtils";
import svgs from "@/app/components/Svgs";
import { showCropper } from "@/app/lib/features/cropper/cropperSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import TextArea from "@/app/components/TextArea/TextArea";

const Banner = ({
  collectionInfo,
  setCollectionInfo,
}: {
  collectionInfo: ICollection;
  setCollectionInfo: Dispatch<SetStateAction<ICollection | null | undefined>>;
}) => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.id);
  const [isHover, setIsHover] = useState(false);
  const init = async () => {};
  useEffect(() => {
    init();
  }, []);
  return (
    <div
      className="relative flex h-[340px] w-full items-end overflow-hidden bg-black px-16 py-8"
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <div
        className={`absolute bottom-0 left-0 right-0 top-0 bg-cover bg-no-repeat ${!collectionInfo.bannerImageSrc && "scale-[3] blur-3xl"}`}
        style={{
          backgroundImage: `url(${collectionInfo.bannerImageSrc || collectionInfo.logoURI})`,
        }}
      ></div>
      <Button
        className={`${isHover ? "opacity-100" : "opacity-0"} absolute right-16 top-8 bg-black bg-opacity-50 font-semibold text-white hover:bg-opacity-100`}
        startContent={<svgs.Add color="white" />}
        onClick={() => {
          dispatch(
            showCropper({
              aspect: [8, 3],
              onCropped: async (croppedImage) => {
                const file = await urlToFile(croppedImage, userId);
                const { ipfsUrl } = await uploadMedia(file);
                setCollectionInfo({
                  ...collectionInfo,
                  bannerImageSrc: ipfsUrl,
                });
              },
            }),
          );
        }}
      >
        {collectionInfo.bannerImageSrc ? "Edit" : "Add"} banner
      </Button>
      <div className="flex flex-col gap-4 overflow-visible">
        <button
          className="shadow-glow relative h-[100px] w-[100px] overflow-hidden rounded-xl hover:shadow-none"
          onClick={() => {
            dispatch(
              showCropper({
                aspect: [1, 1],
                onCropped: async (croppedImage) => {
                  const file = await urlToFile(croppedImage, userId);
                  const { ipfsUrl } = await uploadMedia(file);
                  setCollectionInfo({
                    ...collectionInfo,
                    logoURI: ipfsUrl,
                  });
                },
              }),
            );
          }}
        >
          <Image
            src={collectionInfo.logoURI}
            alt={collectionInfo.name}
            fill
            objectPosition="top"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-xl opacity-0 backdrop-brightness-50 transition-opacity duration-250 ease-in-out hover:opacity-100">
            <svgs.Pen
              size={24}
              color="#ffffff"
            />
          </div>
        </button>
        <h1 className="relative text-2xl font-semibold text-white">
          {collectionInfo.name}
        </h1>
        <TextArea
          value={collectionInfo.description}
          onChange={(e) => {
            setCollectionInfo({
              ...collectionInfo,
              description: e.target.value,
            });
          }}
          className="text-nowrap focus:text-wrap overflow-visible"
        />
      </div>
      <div className="w-32"></div>
    </div>
  );
};

export default Banner;
