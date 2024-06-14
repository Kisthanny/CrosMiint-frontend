import Button from "@/app/components/Button/Button";
import svgs from "@/app/components/Svgs";
import Image from "next/image";
import { AuctionInfo } from "../../NFTAuction";

const ImageFrame = ({ info }: { info: AuctionInfo }) => {
  return (
    <div className="relative">
      <div className="rounded-lg">
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
    </div>
  );
};

export default ImageFrame;
