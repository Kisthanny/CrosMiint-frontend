"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "./noShadow.css";
import { useState } from "react";
import { AuctionInfo } from "../NFTAuction";
import ImageFrame from "./ImageFrame/ImageFrame";
import NFTInfo from "./NFTInfo/NFTInfo";

const NFTSwiper = ({ auctionList }: { auctionList: AuctionInfo[] }) => {
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
    <div className="relative md:pl-72 w-full max-w-3xl md:max-w-[1056px]">
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
        {auctionList.map((info, i) => (
          <SwiperSlide key={`SwiperSlide-${i}`}>
            <ImageFrame info={info} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="w-full md:w-auto flex justify-center md:absolute md:-left-6 md:top-0 md:bottom-0 md:flex md:items-center"
        style={{ zIndex: auctionList.length }}
      >
        <div className="md:bg-gray-200 rounded-lg md:shadow-lg">
          <NFTInfo
            info={auctionList[currentIndex]}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            currentIndex={currentIndex}
            total={auctionList.length}
          />
        </div>
      </div>
    </div>
  );
};

export default NFTSwiper;
