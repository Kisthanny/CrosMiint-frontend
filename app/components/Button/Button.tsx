import useColorChangeOnPress from "@/app/hooks/useColorChangeOnPress";
import Image, { StaticImageData } from "next/image";
import { ButtonHTMLAttributes, useState } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnName: string;
  image?: string | StaticImageData;
  icon?: JSX.Element;
  color?: string;
  transparent?: boolean;
  fill?: boolean;
  centered?: boolean;
}

interface RoundButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element;
  iconHover?: JSX.Element;
}

const Button = ({
  btnName,
  image,
  icon,
  color,
  transparent = false,
  fill = false,
  centered = false,
  ...rest // This will capture all other button attributes
}: ButtonProps) => {
  const { isPressed, elementRef } = useColorChangeOnPress<HTMLButtonElement>();

  const containerClasses = isPressed
    ? "bg-black"
    : `${rest.disabled ? "" : "hover:bg-gray-800"} bg-gray-600 ${
        transparent ? " bg-opacity-20" : ""
      }`;

  const justifyClass = centered ? "justify-center" : "justify-between";
  const widthClass = fill ? "w-full" : "";
  return (
    <button
      ref={elementRef}
      style={{ color: color || "#FFFFFF" }}
      className={`flex items-center ${justifyClass} gap-4 rounded-full px-4 py-2 shadow-lg ${containerClasses} ${widthClass}`}
      {...rest} // Apply all other button attributes here
    >
      {icon && icon}
      {image && !icon && (
        <Image
          src={image}
          alt={btnName}
          width={16}
          height={16}
        />
      )}
      <p>{btnName}</p>
    </button>
  );
};

export default Button;

export const RoundIconButton = ({
  icon,
  iconHover,
  ...rest
}: RoundButtonProps) => {
  const { isPressed, elementRef } = useColorChangeOnPress<HTMLButtonElement>();
  const [isHover, setIsHover] = useState(false);
  const containerClasses = rest.disabled
    ? ""
    : isPressed
      ? "bg-black"
      : "hover:bg-gray-400";
  const disabledClass = rest.disabled ? "opacity-30" : "";

  return (
    <button
      ref={elementRef}
      className={`rounded-full p-2 ${disabledClass} ${containerClasses}`}
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
