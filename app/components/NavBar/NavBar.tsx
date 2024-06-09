"use client";
import { useState } from "react";
import Discover from "./Discover/Discover";
import HelpCenter from "./HelpCenter/HelpCenter";
import Notification from "./Notification/Notification";
import Profile from "./Profile/Profile";
import SideBar from "./SideBar/SideBar";
import images from "@/app/assets/images";
import svgs from "@/app/assets/svgs";
import Image from "next/image";
import SearchNFT from "./SearchNFT/SearchNFT";
import Button from "../Button/Button";

enum Active {
  None,
  Discover,
  Help,
  Notification,
  Profile,
}

const NavBar = () => {
  const [activeComponent, setActiveComponent] = useState(Active.None);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const toggleActive = (type: Active) => {
    if (type === activeComponent) {
      setActiveComponent(Active.None);
    } else {
      setActiveComponent(type);
    }
  };

  const toggleSideBar = () => {
    setOpenSideMenu(!openSideMenu);
  };

  return (
    <section>
      <div className="bg-[#cbcac8]">
        <div>
          <div>
            <Image
              src={images.logoClean}
              alt="CrosMint Logo"
              width={100}
              height={100}
            />
            <h1 className="font-panton font-black tracking-logo">CROSMIINT</h1>
          </div>
          <SearchNFT />
        </div>
        {/* END OF LEFT SECTION */}
        <div>
          {/* Discover */}
          <div>
            <button onClick={toggleActive.bind(null, Active.Discover)}>
              Discover
            </button>
            {activeComponent === Active.Discover && <Discover></Discover>}
          </div>
          {/* Help Center */}
          <div>
            <button onClick={toggleActive.bind(null, Active.Help)}>
              Help Center
            </button>
            {activeComponent === Active.Help && <HelpCenter></HelpCenter>}
          </div>
          {/* Notification */}
          <div>
            <button onClick={toggleActive.bind(null, Active.Notification)}>
              <svgs.Notification></svgs.Notification>
            </button>
            {activeComponent === Active.Notification && (
              <Notification></Notification>
            )}
          </div>
          {/* Create Button */}
          <div>
            <Button btnName="Create"></Button>
          </div>
          {/* User Profile */}
          <div>
            <button onClick={toggleActive.bind(null, Active.Profile)}>
              <svgs.Avatar size={40}></svgs.Avatar>
            </button>
            {activeComponent === Active.Profile && <Profile></Profile>}
          </div>
          {/* Side Bar */}
          <div>
            <button onClick={toggleSideBar}>
              <svgs.SideBar></svgs.SideBar>
            </button>
            {openSideMenu && <SideBar toggleSideBar={toggleSideBar}></SideBar>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
