"use client";

import { getUserInfo, IUserInfo } from "@/app/api/server/user";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProfileCover from "./ProfileCover/ProfileCover";
import ProfileForm from "./ProfileForm/ProfileForm";
import ImageCropper from "@/app/components/ImageCropper/ImageCropper";
import { setUserInfo as setUserInfoDispatch } from "@/app/lib/features/user/usersSlice";

export default function ProfileEdit() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState<IUserInfo | null>(null);

  const init = async () => {
    if (!id) {
      return;
    }
    const data = await getUserInfo(id as string);
    setUserInfo(data);
  };
  useEffect(() => {
    init();
  }, []);
  if (!id) {
    return <div>404</div>;
  } else if (user.id !== id) {
    return <div>403</div>;
  }

  const updateUserInfo = (data: IUserInfo) => {
    setUserInfo(data);
    dispatch(setUserInfoDispatch(data));
  };
  return (
    <section className="flex flex-col items-center gap-12 bg-gray-100 bg-gradient-to-b from-grey-main">
      {userInfo && (
        <ProfileCover
          userInfo={userInfo}
          updateUserInfo={updateUserInfo}
        />
      )}

      {userInfo && (
        <ProfileForm
          userInfo={userInfo}
          updateUserInfo={updateUserInfo}
        />
      )}

      <ImageCropper />
    </section>
  );
}
