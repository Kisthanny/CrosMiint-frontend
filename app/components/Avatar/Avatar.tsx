import Image from "next/image";

const Avatar = ({ size = 40, src }: { src: string; size?: number }) => {
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
