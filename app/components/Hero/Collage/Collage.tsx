import Image, { StaticImageData } from "next/image";

const Collage = ({
  image,
  scale,
}: {
  image: StaticImageData;
  scale: number;
}) => {
  return (
    <div
      className="w-full max-w-[1024px] relative"
      style={{
        maskImage: "url('./mask-001.png')",
        maskSize: "100%",
        maskPosition: "center",
        maskRepeat: "no-repeat",
        transform: `scale(${scale})`,
      }}
    >
      <div className="pb-[100%] relative">
        <Image src={image} alt="" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Collage;
