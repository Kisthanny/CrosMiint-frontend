"use client";
import svgs from "@/app/components/Svgs";
import LinkMenu from "../LinkMenu/LinkMenu";
import Avatar from "../../Avatar/Avatar";
import { useAppSelector } from "@/app/lib/hooks";

const Profile = () => {
  const menuList = [
    { name: "My Profile", link: "my-profile", icon: <svgs.Avatar /> },
    { name: "My Items", link: "my-items", icon: <svgs.Gallery /> },
    { name: "Edit Profile", link: "edit-profile", icon: <svgs.EditProfile /> },
    { name: "Help", link: "help", icon: <svgs.Help /> },
    { name: "Disconnect", link: "disconnect", icon: <svgs.Disconnect /> },
  ];
  const user = useAppSelector((state) => state.user);
  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };
  return (
    <div className="w-64 text-gray-600">
      <div className="flex items-center gap-4 p-4 pt-6">
        <Avatar src={user.avatar} />
        <div>
          <strong>{user.name}</strong>
          <br />
          <small>{shortenAddress(user.address)}</small>
        </div>
      </div>
      <LinkMenu menuList={menuList}></LinkMenu>
    </div>
  );
};

export default Profile;
