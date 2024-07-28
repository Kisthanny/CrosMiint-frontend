import images from "@/app/assets/images";
import Image from "next/image";

const INITIAL_FONT_SIZE = 16;
const INITIAL_IMAGE_SIZE = 50;
const Logo = ({
  scale = 1,
  flexDirection = "row",
}: {
  scale?: number;
  flexDirection?: "row" | "col";
}) => {
  const fontSize = `${INITIAL_FONT_SIZE * scale}px`;
  const imageSize = INITIAL_IMAGE_SIZE * scale;
  const flexStyle = `flex-${flexDirection}`;
  return (
    <div
      className={"flex items-center" + ` ${flexStyle}`}
      style={{ gap: fontSize }}
    >
      <Image
        src={images.logoClean}
        alt="CrosMint Logo"
        width={imageSize}
        height={imageSize}
      />
      <h1
        className="font-panton font-black tracking-logo"
        style={{ fontSize }}
      >
        CROSMIINT{flexDirection === "col" ? "" : "."}
      </h1>
    </div>
  );
};

export default Logo;
