"use client";

import images from "@/app/assets/images";
import svgs from "@/app/assets/svgs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { discover } from "../Discover/Discover";
import { helpCenter } from "../HelpCenter/HelpCenter";
import Button from "../../Button/Button";

const SideBar = ({ toggleSideBar }: { toggleSideBar: () => void }) => {
  const [expandDiscover, setExpandDiscover] = useState(false);
  const [expandHelp, setExpandHelp] = useState(false);

  const toggleDiscover = () => {
    setExpandDiscover(!expandDiscover);
  };
  const toggleHelp = () => {
    setExpandHelp(!expandHelp);
  };
  return (
    <div>
      <div>
        <button onClick={toggleSideBar}>
          <svgs.Close></svgs.Close>
        </button>
        <div>
          <Image src={images.logoClean} alt="CrosMint" />
          <h1 className="font-panton font-black tracking-logo">CROSMIINT.</h1>
        </div>
        <p>
          Discover the most outstanding articles on all topics of NFT & write
          your own stories and share them
        </p>
        <ul>
          <li>
            <Link href="#">
              <svgs.FaceBook></svgs.FaceBook>
            </Link>
          </li>
          <li>
            <Link href="#">
              <svgs.Linkedin></svgs.Linkedin>
            </Link>
          </li>
          <li>
            <Link href="#">
              <svgs.X></svgs.X>
            </Link>
          </li>
          <li>
            <Link href="#">
              <svgs.Youtube></svgs.Youtube>
            </Link>
          </li>
          <li>
            <Link href="#">
              <svgs.Instagram></svgs.Instagram>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <div>
          <button onClick={toggleDiscover}>
            <span>DISCOVER</span>
            <svgs.Arrow direction={expandDiscover ? "Top" : "Bottom"} />
          </button>
          <ul>
            {expandDiscover &&
              discover.map((e, i) => (
                <li key={`discover-${i}`}>
                  <Link href={e.link}>{e.name}</Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <button onClick={toggleHelp}>
            <span>HELP CENTER</span>
            <svgs.Arrow direction={expandHelp ? "Top" : "Bottom"} />
          </button>
          <ul>
            {expandHelp &&
              helpCenter.map((e, i) => (
                <li key={`help-${i}`}>
                  <Link href={e.link}>{e.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div>
          <Button btnName="Create"></Button>
          <Button btnName="Connect Wallet"></Button>
      </div>
    </div>
  );
};

export default SideBar;
