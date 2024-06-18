import useColorChangeOnPress from "@/app/hooks/useColorChangeOnPress";
import Image, { StaticImageData } from "next/image";
import { MouseEventHandler, useState } from "react";

const Button = ({
  btnName,
  image,
  icon,
  color,
  transparent = false,
  onClick,
}: {
  btnName: string;
  image?: string | StaticImageData;
  icon?: JSX.Element;
  color?: string;
  transparent?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  const { isPressed, elementRef } = useColorChangeOnPress<HTMLButtonElement>();

  const containerClasses = isPressed
    ? "bg-black"
    : "hover:bg-gray-800 bg-gray-600" + (transparent ? " bg-opacity-20" : "");
  return (
    <button
      onClick={onClick}
      ref={elementRef}
      style={{ color: color || "#FFFFFF" }}
      className={`py-2 px-4 flex items-center justify-between gap-4 rounded-full shadow-lg ${containerClasses}`}
    >
      {icon && icon}
      {image && !icon && (
        <Image src={image} alt={btnName} width={16} height={16} />
      )}
      <p>{btnName}</p>
    </button>
  );
};

export default Button;

export const RoundIconButton = ({
  icon,
  iconHover,
  onClick,
  disabled = false,
}: {
  icon: JSX.Element;
  iconHover?: JSX.Element;
  onClick: () => void;
  disabled?: boolean;
}) => {
  const { isPressed, elementRef } = useColorChangeOnPress<HTMLButtonElement>();
  const [isHover, setIsHover] = useState(false);
  const containerClasses = disabled
    ? ""
    : isPressed
    ? "bg-black"
    : "hover:bg-gray-400";
  const disabledClass = disabled ? "opacity-30" : "";

  return (
    <button
      disabled={disabled}
      ref={elementRef}
      className={`p-2 rounded-full ${disabledClass} ${containerClasses}`}
      onClick={onClick}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      {isHover && iconHover ? iconHover : icon}
    </button>
  );
};
