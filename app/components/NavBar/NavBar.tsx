"use client";
import { useState } from "react";
import Discover from "./Discover/Discover";
import HelpCenter from "./HelpCenter/HelpCenter";
import Notification from "./Notification/Notification";
import Profile from "./Profile/Profile";
import SideBar from "./SideBar/SideBar";
import svgs from "@/app/assets/svgs";
import SearchNFT from "../SearchNFT/SearchNFT";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Avatar from "../Avatar/Avatar";
import CardPopup from "../Popup/CardPopup";
import SidePopup from "../Popup/SidePopup";

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
    <nav className="min-w-[375px] bg-grey-main flex items-center justify-between px-8 py-4 lg:px-16 xl:px-32">
      <div className="flex items-center gap-8">
        <Logo scale={0.75} />
        <div className="hidden lg:block">
          <SearchNFT />
        </div>
      </div>
      {/* END OF LEFT SECTION */}
      <div className="flex items-center gap-8">
        {/* Discover */}
        <div className="hidden lg:block relative hover:bg-gray-400 h-full p-4 rounded-md">
          <button onClick={toggleActive.bind(null, Active.Discover)}>
            Discover
          </button>
          {activeComponent === Active.Discover && (
            <CardPopup position="bottomLeft">
              <Discover />
            </CardPopup>
          )}
        </div>
        {/* Help Center */}
        <div className="hidden lg:block relative hover:bg-gray-400 h-full p-4 rounded-md">
          <button onClick={toggleActive.bind(null, Active.Help)}>
            Help Center
          </button>
          {activeComponent === Active.Help && (
            <CardPopup position="bottomLeft">
              <HelpCenter />
            </CardPopup>
          )}
        </div>
        {/* Notification */}
        <div className="relative">
          <button onClick={toggleActive.bind(null, Active.Notification)}>
            <svgs.Notification size={24}></svgs.Notification>
          </button>
          {activeComponent === Active.Notification && (
            <CardPopup
              position={window.innerWidth < 425 ? "bottom" : "bottomLeft"}
            >
              <Notification />
            </CardPopup>
          )}
        </div>
        {/* Create Button */}
        <div className="hidden lg:block">
          <Button btnName="Create"></Button>
        </div>
        {/* User Profile */}
        <div className="relative">
          <button onClick={toggleActive.bind(null, Active.Profile)}>
            <Avatar />
          </button>
          {activeComponent === Active.Profile && (
            <CardPopup position="bottomLeft">
              <Profile />
            </CardPopup>
          )}
        </div>
        {/* Side Bar */}
        <div className="block lg:hidden">
          <button onClick={toggleSideBar}>
            <svgs.SideBar size={24}></svgs.SideBar>
          </button>
          <SidePopup
            position="left"
            isOpen={openSideMenu}
            onClickOverlay={toggleSideBar}
          >
            <SideBar toggleSideBar={toggleSideBar} />
          </SidePopup>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
