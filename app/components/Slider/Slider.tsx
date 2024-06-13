"use client";
import images from "@/app/assets/images";
import AuctionDetail, { AuctionInfo } from "./AuctionDetail/AuctionDetail";
import { useEffect, useState } from "react";
import AuctionDetailSkeleton from "./AuctionDetailSkeleton/AuctionDetailSkeleton";

const Slider = () => {
  const auctionList = [
    {
      name: "Abstract Hair Ripple#1",
      creator: {
        name: "KK Hong",
        verified: true,
      },
      collection: {
        name: "Art",
      },
      currentBid: "1700000000000000000",
      endTime: new Date(
        "Sat Jun 29 2024 12:39:12 GMT+0800 (China Standard Time)"
      ),
      likes: 769,
      image: images.hairRippleAbstract,
    },
    {
      name: "Abstract Hair Ripple#2",
      creator: {
        name: "KK Hong",
        verified: true,
      },
      collection: {
        name: "Art",
      },
      currentBid: "1700000000000000000",
      endTime: new Date(
        "Sat Jun 22 2024 12:39:12 GMT+0800 (China Standard Time)"
      ),
      likes: 769,
      image: images.hairRippleAbstract,
    },
    {
      name: "Abstract Hair Ripple#3",
      creator: {
        name: "KK Hong",
        verified: true,
      },
      collection: {
        name: "Art",
      },
      currentBid: "1700000000000000000",
      endTime: new Date(
        "Sat Jun 29 2024 12:39:12 GMT+0800 (China Standard Time)"
      ),
      likes: 769,
      image: images.hairRippleAbstract,
    },
    {
      name: "Abstract Hair Ripple#4",
      creator: {
        name: "KK Hong",
        verified: true,
      },
      collection: {
        name: "Art",
      },
      currentBid: "1700000000000000000",
      endTime: new Date(
        "Sat Jun 29 2024 12:39:12 GMT+0800 (China Standard Time)"
      ),
      likes: 769,
      image: images.hairRippleAbstract,
    },
    {
      name: "Abstract Hair Ripple#5",
      creator: {
        name: "KK Hong",
        verified: true,
      },
      collection: {
        name: "Art",
      },
      currentBid: "1700000000000000000",
      endTime: new Date(
        "Sat Jun 29 2024 12:39:12 GMT+0800 (China Standard Time)"
      ),
      likes: 769,
      image: images.hairRippleAbstract,
    },
  ];
  const [currentAuction, setCurrentAuction] = useState<null | AuctionInfo>(
    null
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex === auctionList.length - 1) {
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    if (!currentIndex) {
      return;
    }
    setCurrentIndex(currentIndex - 1);
  };

  useEffect(() => {
    if (currentIndex >= 0 && currentIndex < auctionList.length) {
      setCurrentAuction(auctionList[currentIndex]);
    }
  }, [currentIndex]);
  return (
    <section className="p-8">
      {currentAuction ? (
        <AuctionDetail
          info={currentAuction}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          currentIndex={currentIndex}
          total={auctionList.length}
        />
      ) : (
        <AuctionDetailSkeleton />
      )}
    </section>
  );
};

export default Slider;
