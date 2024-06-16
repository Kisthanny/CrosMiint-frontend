"use client";
import images from "@/app/assets/images";
import Collage from "./Collage/Collage";
import svgs from "@/app/components/Svgs";
import Button from "../Button/Button";
import variables from "@/app/variables/variables";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:justify-center gap-8 items-center p-16">
      <div className="text-gray-600 flex flex-col gap-8 lg:max-w-[570px]">
        <h1 className="font-black text-6xl">
          Discover, collect, and sell NFTs{" "}
          {<svgs.NFT color={variables.textMain} size={60} />}
        </h1>
        <p>
          Discover the most outstanding NFTs in all topics of life. Create your
          NFTs and sell them
        </p>
        <div>
          <Button btnName="Start your search" />
        </div>
      </div>
      <Collage image={images.hairRippleAbstract} scale={1} />
    </section>
  );
};

export default Hero;
