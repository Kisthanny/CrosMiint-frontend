"use client";
import Image, { StaticImageData } from "next/image";

const Collage = ({ image, scale }: { image: string; scale: number }) => {
  return (
    <div
      className="relative w-full max-w-[1024px]"
      style={{
        maskImage: "url('./mask-001.png')",
        maskSize: "100%",
        maskPosition: "center",
        maskRepeat: "no-repeat",
        transform: `scale(${scale})`,
      }}
    >
      <div className="relative pb-[100%]">
        <Image
          priority
          src={image}
          alt="cover image"
          style={{
            objectFit: "cover",
          }}
          fill
        />
      </div>
    </div>
  );
};

export default Collage;
