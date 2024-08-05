import { uploadMedia } from "@/app/api/server/metadata";
import {
  IUserInfo,
  updateProfileAvatar,
  updateProfileCover,
} from "@/app/api/server/user";
import Avatar from "@/app/components/Avatar/Avatar";
import { urlToFile } from "@/app/components/ImageCropper/canvasUtils";
import { showCropper } from "@/app/lib/features/cropper/cropperSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import Image from "next/image";

const ProfileCover = ({
  userInfo,
  updateUserInfo,
  readonly = false,
}: {
  userInfo: IUserInfo;
  updateUserInfo?: (data: IUserInfo) => void;
  readonly?: boolean;
}) => {
  const userId = useAppSelector((state) => state.user.id);
  const dispatch = useAppDispatch();
  return (
    <div
      className={`relative w-full border-b-3 border-gray-600 ${userInfo.profileCover ? "pt-[33.72%]" : "h-40"} md:h-64 md:w-[768px] md:pt-0`}
    >
      <div className="h-full w-full bg-white">
        <button
          className={`h-full w-full transition-opacity ${readonly ? "cursor-default" : "hover:opacity-80"}`}
          onClick={() => {
            if (readonly) {
              return;
            }
            dispatch(
              showCropper({
                aspect: 768 / 253,
                onCropped: async (imageSrc) => {
                  const file = await urlToFile(imageSrc, userId);
                  const { ipfsHash } = await uploadMedia(file);
                  const data = await updateProfileCover(ipfsHash);
                  updateUserInfo && updateUserInfo(data);
                },
              }),
            );
          }}
        >
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
            <div className="flex h-full w-full items-center justify-center bg-gray-600 text-2xl text-gray-100">
              Click here to set your own cover
            </div>
          )}
        </button>
      </div>
      <div className="absolute -bottom-[37px] left-[63px] overflow-hidden rounded-full border-3 border-gray-600 bg-white">
        <button
          className={`transition-opacity ${readonly ? "cursor-default" : "hover:opacity-80"}`}
          onClick={() => {
            if (readonly) {
              return;
            }
            dispatch(
              showCropper({
                aspect: 1,
                onCropped: async (imageSrc) => {
                  const file = await urlToFile(imageSrc, userId);
                  const { ipfsHash } = await uploadMedia(file);
                  const data = await updateProfileAvatar(ipfsHash);
                  updateUserInfo && updateUserInfo(data);
                },
              }),
            );
          }}
        >
          <Avatar
            size={76}
            src={userInfo.avatar}
          />
        </button>
      </div>
    </div>
  );
};

export default ProfileCover;
