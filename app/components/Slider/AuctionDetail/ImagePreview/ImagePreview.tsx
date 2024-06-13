import svgs from "@/app/assets/svgs";
import Button from "@/app/components/Button/Button";
import Image from "next/image";
import { AuctionInfo } from "../AuctionDetail";
import NFTInfo from "../NFTInfo/NFTInfo";

const ImagePreview = ({
  info,
  nextSlide,
  prevSlide,
  currentIndex,
  total,
}: {
  info: AuctionInfo;
  nextSlide: () => void;
  prevSlide: () => void;
  currentIndex: number;
  total: number;
}) => {
  return (
    <div className="relative m-4 md:pl-72">
      <div className="p-4 shadow-lg rounded-lg">
        <Image src={info.image} alt={info.name} className="rounded-2xl" />
      </div>

      <div className="absolute top-6 right-6">
        <Button
          btnName={info.likes.toString()}
          color="#cbcac8"
          icon={<svgs.Like color="#cbcac8" />}
          transparent={true}
        />
      </div>
      <div className="absolute -left-6 top-0 bottom-0 flex items-center">
        <div className="bg-gray-200 rounded-lg shadow-lg">
          <NFTInfo
            info={info}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            currentIndex={currentIndex}
            total={total}
            forLargeDevice={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
