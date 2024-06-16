import Button from "@/app/components/Button/Button";
import svgs from "@/app/components/Svgs";
import Image from "next/image";
import { AuctionInfo } from "../../NFTAuction";
import variables from "@/app/variables/variables";

const ImageFrame = ({ info }: { info: AuctionInfo }) => {
  return (
    <div className="relative">
      <Image src={info.image} alt={info.name} className="rounded-2xl" />

      <div className="absolute top-6 right-6">
        <Button
          btnName={info.likes.toString()}
          color={variables.bgStart}
          icon={<svgs.Like color={variables.bgStart} />}
          transparent={true}
        />
      </div>
    </div>
  );
};

export default ImageFrame;
