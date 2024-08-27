"use client";
import { useEffect, useState } from "react";
import Discover from "./Discover/Discover";
import Help from "./Help/Help";
import Social from "./Social/Social";
import Subscribe from "./Subscribe/Subscribe";
import { usePathname } from "next/navigation";
import { blackList } from "../NavBar/NavBar";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(true);
  const pathname = usePathname();
  useEffect(() => {
    const isBlackListed = blackList.some((regex) => regex.test(pathname));
    setShowFooter(!isBlackListed);
  }, [pathname]);
  return (
    showFooter && (
      <footer className="min-w-[375px] bg-gray-100 p-4 md:p-16">
        <div className="flex w-full flex-col flex-wrap items-center gap-12 text-gray-600 md:flex-row md:items-start md:justify-between">
          <Social></Social>
          <Discover></Discover>
          <Help></Help>
          <Subscribe></Subscribe>
        </div>
      </footer>
    )
  );
};

export default Footer;
