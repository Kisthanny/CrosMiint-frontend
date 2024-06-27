import { Avatar, AvatarGroup } from "@nextui-org/react";
import { FunctionComponent } from "react";
import { FeaturedNFT } from "../NFTFilter/Filter/Filter";

type OwnerGroupProps = {
  owners: FeaturedNFT["owners"];
  className?: string;
};

const OwnerGroup: FunctionComponent<OwnerGroupProps> = ({
  owners,
  className = "",
}) => {
  return (
    <AvatarGroup
      isBordered
      max={3}
      className={`scale-75 ${className}`}
      size="sm"
    >
      {owners.map((owner) => {
        return (
          <Avatar
            key={owner.id}
            src={owner.image}
          />
        );
      })}
    </AvatarGroup>
  );
};

export default OwnerGroup;
