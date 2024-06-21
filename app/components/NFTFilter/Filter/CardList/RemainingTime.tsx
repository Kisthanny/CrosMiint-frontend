import { FC } from "react";
import { default as RemainingTimeRaW } from "@/app/components/NFTAuction/NFTSwiper/NFTInfo/RemainingTime/RemainingTime";
import { FeaturedNFT } from "../Filter";

type RemainTimeProps = {
  onClick?: () => void;
  className?: HTMLBaseElement["className"];
} & Pick<FeaturedNFT, "endTime">;

const RemainTime: FC<RemainTimeProps> = ({ endTime, className = "" }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <RemainingTimeRaW
        endTime={endTime}
        type="card"
      />
    </div>
  );
};

export default RemainTime;
