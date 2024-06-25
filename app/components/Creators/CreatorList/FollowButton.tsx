import { Button } from "@nextui-org/react";
import { FunctionComponent, useState } from "react";

interface FollowButtonProps {
  onFollow?: () => void;
  onUnFollow?: () => void;
  follow: boolean;
  className?: string;
}

const FollowButton: FunctionComponent<FollowButtonProps> = ({
  follow,
  onUnFollow,
  onFollow,
  className,
}) => {
  const [isFollowing, setIsFollowing] = useState(follow);

  if (isFollowing) {
    return (
      <Button
        onClick={() => {
          setIsFollowing(false);
          onUnFollow?.();
        }}
        className={`h-7 bg-gray-300 text-gray-600 ${className} `}
        radius="full"
        size="sm"
      >
        Following
      </Button>
    );
  }

  return (
    <Button
      className={`h-7 bg-black text-white ${className}`}
      radius="full"
      size="sm"
      onClick={() => {
        setIsFollowing(true);
        onFollow?.();
      }}
    >
      Follow
    </Button>
  );
};

export default FollowButton;
