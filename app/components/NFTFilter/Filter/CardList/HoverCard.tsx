import { FC, ReactNode } from "react";

const HoverCard: FC<{
  children?: ReactNode;
  className?: HTMLBaseElement["className"];
}> = ({ children, className }) => {
  return (
    <div
      className={`relative h-64 w-64 overflow-hidden rounded-lg bg-gray-100 text-gray-600 transition-shadow hover:cursor-pointer hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default HoverCard;
