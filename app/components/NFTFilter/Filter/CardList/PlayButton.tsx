import svgs from "@/app/components/Svgs";
import variables from "@/app/variables/variables";
import { FC } from "react";

type PlayButtonProps = {
  onClick?: () => void;
  className?: HTMLBaseElement["className"];
};

const PlayButton: FC<PlayButtonProps> = ({ onClick, className = "" }) => {
  return (
    <button
      className={`flex h-12 w-12 scale-75 items-center justify-center rounded-full bg-slate-50 ${className}`}
      onClick={onClick}
    >
      <svgs.PlayerPlay
        color={variables.textMain}
        size={30}
      />
    </button>
  );
};

export default PlayButton;
