"use client";
import {
  IUserInfo,
  updateUserInfo as updateUserInfoAsync,
} from "@/app/api/server/user";
import Button from "@/app/components/Button/Button";
import {
  hideSpinner,
  showSpinner,
} from "@/app/lib/features/spinner/spinnerSlice";
import { useAppDispatch } from "@/app/lib/hooks";
import { Input, Snippet, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { toast } from "react-toastify";

const ProfileForm = ({
  userInfo,
  updateUserInfo,
  readonly = false,
}: {
  userInfo: IUserInfo;
  updateUserInfo?: (data: IUserInfo) => void;
  readonly?: boolean;
}) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState(userInfo.name || "");
  const [bio, setBio] = useState(userInfo.bio || "");
  const [email, setEmail] = useState(userInfo.email || "");
  const [facebook, setFacebook] = useState(userInfo.facebook || "");
  const [x, setX] = useState(userInfo.twitter || "");
  const [instagram, setInstagram] = useState(userInfo.instagram || "");

  const handleSubmit = async () => {
    dispatch(showSpinner());
    const data = await updateUserInfoAsync({
      name,
      bio,
      email,
      facebook,
      twitter: x,
      instagram,
    });
    updateUserInfo && updateUserInfo(data);
    dispatch(hideSpinner());
    toast.success("user info updated");
  };
  return (
    <form
      action={handleSubmit}
      className="flex flex-col items-center gap-4"
    >
      <div className="flex flex-col rounded-md bg-default/40 shadow-sm">
        <span className="pointer-events-none pl-3 pt-2 text-xs text-foreground-500">
          Address
        </span>
        <Snippet
          classNames={{ base: "bg-transparent" }}
          hideSymbol
        >
          {userInfo.address}
        </Snippet>
      </div>
      <Input
        type="text"
        label="Name"
        defaultValue={userInfo.name}
        value={name}
        onChange={(e) => setName(e.target.value)}
        isReadOnly={readonly}
      />
      <Textarea
        type="textarea"
        label="Description"
        defaultValue={userInfo.bio}
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        isReadOnly={readonly}
      />
      <Input
        type="email"
        label="Email"
        defaultValue={userInfo.email}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        isReadOnly={readonly}
      />
      <Input
        type="text"
        label="Facebook"
        defaultValue={userInfo.facebook}
        value={facebook}
        onChange={(e) => setFacebook(e.target.value)}
        isReadOnly={readonly}
      />
      <Input
        type="text"
        label="X"
        defaultValue={userInfo.twitter}
        value={x}
        onChange={(e) => setX(e.target.value)}
        isReadOnly={readonly}
      />
      <Input
        type="text"
        label="Instagram"
        defaultValue={userInfo.instagram}
        value={instagram}
        onChange={(e) => setInstagram(e.target.value)}
        isReadOnly={readonly}
      />
      {!readonly && (
        <Button
          btnName="Update"
          fill
          centered
          type="submit"
        />
      )}
    </form>
  );
};

export default ProfileForm;
