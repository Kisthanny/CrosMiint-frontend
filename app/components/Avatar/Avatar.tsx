import images from "@/app/assets/images";
import Image from "next/image";

const Avatar = ({ size = 40 }: { size?: number }) => {
  return (
    <Image
      src={images.devOnlyAvatar}
      alt="user avatar"
      width={size}
      height={size}
      className="rounded-full"
    />
  );
};

export default Avatar;
