"use client";
import images from "@/app/assets/images";
import Collage from "./Collage/Collage";
import svgs from "@/app/components/Svgs";
import Button from "../Button/Button";
import variables from "@/app/variables/variables";
import { getHomePage, IHomePage } from "@/app/api/server/homePage";
import { useEffect, useState } from "react";

const Hero = () => {
  const [homePageInfo, setHomePageInfo] = useState<IHomePage | null>(null);

  const getHomePageInfo = async () => {
    const res = await getHomePage();
    setHomePageInfo(res);
    console.log(res);
  };

  useEffect(() => {
    getHomePageInfo();
  }, []);

  return (
    <section className="flex flex-col items-center gap-8 p-16 lg:flex-row lg:justify-center">
      <div className="flex flex-col gap-8 text-gray-600 lg:max-w-[570px]">
        <h1 className="text-6xl font-black">
          Discover, collect, and sell NFTs{" "}
          {
            <svgs.NFT
              color={variables.textMain}
              size={60}
            />
          }
        </h1>
        <p>
          Discover the most outstanding NFTs in all topics of life. Create your
          NFTs and sell them
        </p>
        <div>
          <Button btnName="Start your search" />
        </div>
      </div>
      {homePageInfo?.heroImage && (
        <Collage
          image={homePageInfo.heroImage}
          scale={1}
        />
      )}
    </section>
  );
};

export default Hero;
