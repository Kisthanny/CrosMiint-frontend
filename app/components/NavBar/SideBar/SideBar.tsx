import svgs from "@/app/components/Svgs";
import Link from "next/link";
import { discover } from "../Discover/Discover";
import { helpCenter } from "../HelpCenter/HelpCenter";
import Button from "../../Button/Button";
import Logo from "../../Logo/Logo";
import Collapse from "./Collapse.tsx/Collapse";

const SideBar = ({ toggleSideBar }: { toggleSideBar: () => void }) => {
  return (
    <div className="relative w-[80vw] h-full bg-gray-100 bg-gradient-to-b from-grey-main overflow-y-auto scrollbar-hide pb-8">
      <button onClick={toggleSideBar} className="absolute top-8 right-8">
        <svgs.Close size={12} />
      </button>
      <div className="pt-12 pb-8 px-4 border-b-2 border-[#7b7f82] flex flex-col gap-4">
        <Logo scale={0.75} />
        <p className="text-gray-700">
          Discover the most outstanding articles on all topics of NFT & write
          your own stories and share them
        </p>
        <ul className="flex items-center gap-6">
          <li>
            <Link href="#">
              <svgs.FaceBook color="#55595e" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <svgs.Linkedin color="#55595e" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <svgs.X color="#55595e" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <svgs.Youtube color="#55595e" size={22} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <svgs.Instagram color="#55595e" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="pt-8 flex flex-col gap-4">
        <Collapse name="DISCOVER" list={discover} />
        <Collapse name="HELP CENTER" list={helpCenter} />
      </div>
      <div className="w-full pt-8 px-4 flex items-center justify-between max-xs:flex-col max-xs:items-start max-xs:gap-4">
        <Button btnName="Create"></Button>
        <Button btnName="Connect Wallet"></Button>
      </div>
    </div>
  );
};

export default SideBar;
