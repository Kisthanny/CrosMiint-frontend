"use client";

import { getUserInfo, IUserInfo } from "@/app/api/server/user";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProfileCover from "./edit/ProfileCover/ProfileCover";
import ProfileForm from "./edit/ProfileForm/ProfileForm";
import { useAppSelector } from "@/app/lib/hooks";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Profile() {
  const currentUserId = useAppSelector((state) => state.user.id);
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
  }

  return (
    <section className="flex flex-col items-center gap-12 bg-gray-100 bg-gradient-to-b from-grey-main">
      {userInfo && (
        <ProfileCover
          userInfo={userInfo}
          readonly
        />
      )}

      {userInfo && (
        <ProfileForm
          userInfo={userInfo}
          readonly
        />
      )}

      {currentUserId === id && (
        <Link href={`/profile/${id}/edit`}>
          <Button
            className="w-96"
            size="lg"
          >
            Edit Your Profile
          </Button>
        </Link>
      )}
    </section>
  );
}
