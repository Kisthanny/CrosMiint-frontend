"use client";
import { useState } from "react";
import svgs from "../Svgs";
import images from "@/app/assets/images";
import Image from "next/image";

const SubscribeDrop = () => {
  const [userEmail, setUserEmail] = useState("");
  return (
    <section className="p-16 flex flex-col md:flex-row md:justify-center gap-8">
      <div className="text-gray-600 flex flex-col gap-4 max-w-80">
        <h3 className="font-black text-2xl">Never miss a drop</h3>
        <p className="text-xs">
          Subscribe to our super-exclusive drop list and be the first to know
          about upcoming drops
        </p>

        <div>
          <div className="flex items-center gap-4 p-2">
            <span className="text-xs text-white bg-gray-600 rounded-full px-4 py-1 font-light">
              01
            </span>
            <p className="font-semibold text-sm text-gray-600">
              Get more discount
            </p>
          </div>
          <div className="flex items-center gap-4 p-2">
            <span className="text-xs text-white bg-gray-600 rounded-full px-4 py-1 font-light">
              02
            </span>
            <p className="font-semibold text-sm text-gray-600">
              Get premium magazines
            </p>
          </div>
          <div className="flex items-center justify-between bg-gray-600 rounded-full px-4 py-2">
            <input
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
              type="text"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-white placeholder-white"
            />
            <button className="hover:scale-125 transition-transform">
              <svgs.Send color="#ffffff" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-xl">
        <Image src={images.nftAirdrop} alt="nft airdrop" />
      </div>
    </section>
  );
};

export default SubscribeDrop;
