"use client";
import { FunctionComponent, useEffect, useState } from "react";
import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import images from "@/app/assets/images";
import FollowButton from "./FollowButton";
import HoverCard from "../../HoverCard/HoverCard";
import svgs from "../../Svgs";
import variables from "@/app/variables/variables";

type Creator = {
  id: string;
  name: string;
};

const CreatorList: FunctionComponent = () => {
  const [list, setList] = useState<Creator[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setList([
        {
          id: "1",
          name: "zzzz",
        },
        {
          id: "2",
          name: "xxxx",
        },
        {
          id: "3",
          name: "yyy",
        },
      ]);
    }, 3000);
  }, []);

  return (
    <ul className="flex w-full max-w-screen-2xl flex-wrap gap-4">
      {list.map((creator) => {
        return (
          <HoverCard key={creator.id}>
            <div className="h-[180px] w-full overflow-hidden rounded-lg">
              <Image
                src={images.witchGirlAbstract}
                alt={creator.name}
                className="transition-transform hover:scale-110"
              />
            </div>
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
              isBordered
              size="lg"
              className="-m-7 mx-auto"
            />
            <div className="absolute bottom-0 flex w-full justify-between px-4 py-2">
              <div className="self-center">
                <div className="inline-flex items-center text-xs">
                  <span className="mr-0.5 font-semibold">{creator.name}</span>
                  <svgs.Verified
                    size={12}
                    color={variables.textMain}
                  />
                </div>
                <div className="text-xs">1.700 ETH</div>
              </div>

              <FollowButton
                follow={false}
                className="self-center"
              />
            </div>
          </HoverCard>
        );
      })}
    </ul>
  );
};

export default CreatorList;
