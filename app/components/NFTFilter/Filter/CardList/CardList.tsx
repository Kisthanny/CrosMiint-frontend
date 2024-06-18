import Image from "next/image";
import { FeaturedNFT } from "../Filter";
import svgs from "@/app/components/Svgs";
import Button from "@/app/components/Button/Button";
import variables from "@/app/variables/variables";
import RemainingTime from "@/app/components/NFTAuction/NFTSwiper/NFTInfo/RemainingTime/RemainingTime";
import { formatEther } from "ethers";

const CardList = ({ cardList }: { cardList: FeaturedNFT[] }) => {
  return (
    <ul className="w-full flex flex-wrap gap-4 max-w-screen-2xl">
      {cardList.map((e) => (
        <li key={e.id}>
          <div className="relative w-64 h-64 p-2 rounded-lg hover:shadow-lg transition-shadow bg-gray-100 text-gray-600 hover:cursor-pointer">
            <div
              style={{
                maskImage: "url('./mask-002.png')",
                maskSize: "100%",
                maskPosition: "center",
                maskRepeat: "no-repeat",
              }}
            >
              <Image
                src={e.image}
                alt={e.name}
                className="hover:scale-110 transition-transform"
              />
            </div>
            {/* Like Button */}
            <div className="absolute top-2 left-0 scale-75">
              <Button
                btnName={e.likes >= "999" ? "999+" : e.likes.toString()}
                color={variables.bgStart}
                icon={
                  e.userLiked ? (
                    <svgs.Like color={variables.likeActive} />
                  ) : (
                    <svgs.LikeLinear color={variables.bgStart} />
                  )
                }
                transparent={true}
              />
            </div>
            {/* Remaining Time */}
            <div className="absolute top-1 right-0 w-[60%] flex flex-col items-center">
              <RemainingTime endTime={e.endTime} type="card" />
            </div>
            {/* Info */}
            <div className="absolute bottom-0 left-0 w-[120px] h-[78px] p-2 flex flex-col items-center justify-between">
              <p className="text-xs font-medium text-center">{e.name}</p>
              <div className="relative h-[34px] w-full rounded-lg border-gray-300 border flex items-center justify-center">
                <p className="text-sm font-medium">
                  {Number(formatEther(e.currentBid)).toFixed(3)}ETH
                </p>
                <div className="absolute -top-2 text-[10px] text-white px-[6px] bg-gray-600 rounded-md">
                  Current Bid
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CardList;
