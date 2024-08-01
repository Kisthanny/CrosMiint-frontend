"use client";
import { IUserInfo } from "@/app/api/server/user";
import { Input, Snippet } from "@nextui-org/react";
import { useState } from "react";

const ProfileForm = ({ userInfo }: { userInfo: IUserInfo }) => {
  const [name, setName] = useState(userInfo.name || "");
  const [bio, setBio] = useState(userInfo.bio || "");
  const [email, setEmail] = useState(userInfo.email || "");
  const [facebook, setFacebook] = useState(userInfo.facebook || "");
  const [x, setX] = useState(userInfo.twitter || "");
  const [instagram, setInstagram] = useState(userInfo.instagram || "");
  return (
    <form action="">
      <Input
        type="text"
        label="Name"
        defaultValue={userInfo.name}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="text"
        label="Description"
        defaultValue={userInfo.bio}
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <Input
        type="email"
        label="Email"
        defaultValue={userInfo.email}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="text"
        label="Facebook"
        defaultValue={userInfo.facebook}
        value={facebook}
        onChange={(e) => setFacebook(e.target.value)}
      />
      <Input
        type="text"
        label="X"
        defaultValue={userInfo.twitter}
        value={x}
        onChange={(e) => setX(e.target.value)}
      />
      <Input
        type="text"
        label="Instagram"
        defaultValue={userInfo.instagram}
        value={instagram}
        onChange={(e) => setInstagram(e.target.value)}
      />
      <div className="bg-default/40 flex flex-col rounded-md shadow-sm">
      <span className="text-xs pointer-events-none text-foreground-500 pl-3 pt-2">Address</span>
        <Snippet classNames={{base:"bg-transparent"}}  hideSymbol>{userInfo.address}</Snippet>
      </div>
    </form>
  );
};

export default ProfileForm;
