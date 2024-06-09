"use client";

import svgs from "@/app/assets/svgs";

const SearchNFT = () => {
  return (
    <div>
      <input type="text" placeholder="Search NFT" />
      <button>
        <svgs.Search />
      </button>
    </div>
  );
};

export default SearchNFT;
