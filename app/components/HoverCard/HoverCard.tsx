import { FC, MouseEventHandler, ReactNode } from "react";

const HoverCard: FC<{
  children?: ReactNode;
  className?: HTMLBaseElement["className"];
  onClick?: MouseEventHandler<HTMLDivElement>;
}> = ({ children, className, onClick }) => {
  return (
    <div
      className={`relative h-64 w-64 overflow-hidden rounded-lg bg-gray-100 text-gray-600 transition-shadow hover:cursor-pointer hover:shadow-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default HoverCard;
