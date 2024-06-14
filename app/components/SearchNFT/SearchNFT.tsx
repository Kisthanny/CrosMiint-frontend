"use client";

import svgs from "@/app/components/Svgs";
import { useState } from "react";

const SearchNFT = () => {
  const [keyWord, setKeyWord] = useState("");
  const handleSearch = async () => {
    console.log(`searching for ${keyWord}...`);
    setKeyWord("");
  };
  return (
    <form className="flex items-center gap-4 rounded-full border border-black p-2 pl-4">
      <input
        value={keyWord}
        type="text"
        placeholder="Search NFT"
        className="bg-transparent outline-none"
        onChange={(e) => {
          setKeyWord(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <svgs.Search />
      </button>
    </form>
  );
};

export default SearchNFT;
