"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "./noShadow.css";
import { useState } from "react";
import ImageFrame from "./ImageFrame/ImageFrame";
import AirdropInfo from "./NFTInfo/AirdropInfo";
import { ITop5Airdrop } from "@/app/api/server/airdrop";

const AirdropSwiper = ({ airdropList }: { airdropList: ITop5Airdrop[] }) => {
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    if (swiperRef) {
      swiperRef.slideNext();
    }
  };
  const prevSlide = () => {
    if (swiperRef) {
      swiperRef.slidePrev();
    }
  };

  return (
    <div className="relative w-full max-w-3xl md:max-w-[1056px] md:pl-72">
      <Swiper
        onSlideChange={(swiper) => {
          setCurrentIndex(swiper.activeIndex);
        }}
        onSwiper={setSwiperRef}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="max-w-3xl"
      >
        {airdropList.map((info, i) => (
          <SwiperSlide key={`SwiperSlide-${i}`}>
            <ImageFrame info={info} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="flex w-full justify-center md:absolute md:-left-6 md:bottom-0 md:top-0 md:flex md:w-auto md:items-center"
        style={{ zIndex: airdropList.length }}
      >
        <div className="rounded-lg md:bg-gray-200 md:shadow-lg">
          <AirdropInfo
            info={airdropList[currentIndex]}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            currentIndex={currentIndex}
            total={airdropList.length}
          />
        </div>
      </div>
    </div>
  );
};

export default AirdropSwiper;
