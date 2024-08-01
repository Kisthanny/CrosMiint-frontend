"use client";

import { getUserInfo, IUserInfo } from "@/app/api/server/user";
import Avatar from "@/app/components/Avatar/Avatar";
import { useAppSelector } from "@/app/lib/hooks";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProfileCover from "./ProfileCover/ProfileCover";
import ProfileForm from "./ProfileForm/ProfileForm";

export default function ProfileEdit() {
  const user = useAppSelector((state) => state.user);
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
  });
  if (!id) {
    return <div>404</div>;
  } else if (user.id !== id) {
    return <div>403</div>;
  }
  return (
    <section className="flex flex-col items-center bg-gray-100 bg-gradient-to-b from-grey-main">
      {userInfo && <ProfileCover userInfo={userInfo} />}

      {userInfo && <ProfileForm userInfo={userInfo} />}
    </section>
  );
}
