import svgs from "@/app/assets/svgs";
import LinkMenu from "../LinkMenu/LinkMenu";
import Avatar from "../../Avatar/Avatar";

const Profile = () => {
  const menuList = [
    { name: "My Profile", link: "my-profile", icon: <svgs.Avatar /> },
    { name: "My Items", link: "my-items", icon: <svgs.Gallery /> },
    { name: "Edit Profile", link: "edit-profile", icon: <svgs.EditProfile /> },
    { name: "Help", link: "help", icon: <svgs.Help /> },
    { name: "Disconnect", link: "disconnect", icon: <svgs.Disconnect /> },
  ];
  const user = {
    name: "KK Hong",
    walletAddress: "0x08Abea246A133b1D690445EC8315A5A15d6A17AC",
  };
  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };
  return (
    <div className="w-64">
      <div className="p-4 pt-6 flex items-center gap-4">
        <Avatar />
        <div>
          <strong>{user.name}</strong>
          <br />
          <small>{shortenAddress(user.walletAddress)}</small>
        </div>
      </div>
      <LinkMenu menuList={menuList}></LinkMenu>
    </div>
  );
};

export default Profile;
