"use client";
import Button from "@/app/components/Button/Button";
import svgs from "@/app/components/Svgs";
import Image from "next/image";
import variables from "@/app/variables/variables";
import { IAirdrop, likeAirdrop } from "@/app/api/server/airdrop";
import { useEffect, useRef, useState } from "react";

const ImageFrame = ({
  info,
  toggleLike,
}: {
  info: IAirdrop;
  toggleLike: (airdropId: string) => Promise<void>;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        setHeight(divRef.current.clientWidth);
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      ref={divRef}
      className="relative overflow-hidden rounded-2xl bg-black"
      style={{ height: `${height}px` }}
    >
      <Image
        priority
        src={info.fromCollection.logoURI}
        alt={info.fromCollection.name}
        fill
        style={{
          objectFit: "cover",
          objectPosition: "top",
        }}
        sizes={`${height}px`}
      />

      <div className="absolute right-6 top-6">
        <Button
          btnName={String(info.likeCount)}
          color={variables.bgStart}
          icon={
            info.isLiked ? (
              <svgs.Like color={variables.likeActive} />
            ) : (
              <svgs.LikeLinear color={variables.bgStart} />
            )
          }
          transparent={true}
          onClick={toggleLike.bind(null, info.id)}
        />
      </div>
    </div>
  );
};

export default ImageFrame;
