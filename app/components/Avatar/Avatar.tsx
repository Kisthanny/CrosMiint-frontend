import Image from "next/image";
import svgs from "../Svgs";
const Avatar = ({ size = 40, src = "" }: { src?: string; size?: number }) => {
  if (!src) {
    return (
      <div className="overflow-hidden rounded-full">
        <svgs.Avatar size={size} />
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt="user avatar"
      width={size}
      height={size}
      className="rounded-full"
    />
  );
};

export default Avatar;
