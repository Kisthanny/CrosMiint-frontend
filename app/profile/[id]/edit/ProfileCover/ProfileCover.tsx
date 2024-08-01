import { IUserInfo } from "@/app/api/server/user";
import Avatar from "@/app/components/Avatar/Avatar";
import Image from "next/image";
const ProfileCover = ({ userInfo }: { userInfo: IUserInfo }) => {
  return (
    <div className="relative w-full border-b-3 border-gray-600 pt-[33.72%] md:h-64 md:w-[768px] md:pt-0">
      {userInfo?.profileCover ? (
        <Image
          src={userInfo.profileCover}
          alt="profile cover"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      ) : (
        <div className="h-full w-full"></div>
      )}
      <div className="absolute -bottom-[37px] left-[63px] rounded-full border-3 border-gray-600">
        {userInfo?.avatar ? (
          <Avatar
            size={76}
            src={userInfo.avatar}
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ProfileCover;
