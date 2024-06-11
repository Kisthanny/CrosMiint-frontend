import images from "@/app/assets/images";
import Image from "next/image";

const INITIAL_FONT_SIZE = 16;
const INITIAL_IMAGE_SIZE = 50;
const Logo = ({ scale = 1 }: { scale?: number }) => {
  const fontSize = `${INITIAL_FONT_SIZE * scale}px`;
  const imageSize = INITIAL_IMAGE_SIZE * scale;
  return (
    <div className="flex items-center" style={{ gap: fontSize }}>
      <Image
        src={images.logoClean}
        alt="CrosMint Logo"
        width={imageSize}
        height={imageSize}
      />
      <h1 className="font-panton font-black tracking-logo" style={{ fontSize }}>
        CROSMIINT.
      </h1>
    </div>
  );
};

export default Logo;
