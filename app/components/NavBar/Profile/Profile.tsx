import svgs from "@/app/assets/svgs";
import Link from "next/link";

const Profile = () => {
  return (
    <div>
      <div>
        <Link href="my-profile">
          <svgs.Avatar />
          <p>My Profile</p>
        </Link>
        <Link href="my-items">
          <svgs.Gallery />
          <p>My Items</p>
        </Link>
        <Link href="edit-profile">
          <svgs.EditProfile />
          <p>edit Profile</p>
        </Link>
      </div>
      <div>
        <Link href="help">
          <svgs.Help />
          <p>Help</p>
        </Link>
        <Link href="disconnect">
          <svgs.Disconnect />
          <p>Disconnect</p>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
