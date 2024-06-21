import svgs from "@/app/components/Svgs";
import variables from "@/app/variables/variables";
import { FC } from "react";
import Button from "@/app/components/Button/Button";
import { FeaturedNFT } from "../Filter";

type LikeButtonProps = {
  onClick?: () => void;
  className?: HTMLBaseElement["className"];
} & Pick<FeaturedNFT, "likes" | "userLiked">;

const LikeButton: FC<LikeButtonProps> = ({
  onClick,
  className = "",
  likes,
  userLiked,
}) => {
  return (
    <div className={`scale-75 ${className}`}>
      <Button
        btnName={likes >= "999" ? "999+" : likes.toString()}
        color={variables.bgStart}
        icon={
          userLiked ? (
            <svgs.Like color={variables.likeActive} />
          ) : (
            <svgs.LikeLinear color={variables.bgStart} />
          )
        }
        onClick={onClick}
        transparent={true}
      />
    </div>
  );
};

export default LikeButton;
