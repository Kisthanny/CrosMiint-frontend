"use client";
import { useEffect, useState } from "react";
import svgs from "../../Svgs";
import variables from "@/app/variables/variables";
import Tags from "./Tags/Tags";
import { mockNFTList } from "./mockData";
import { StaticImageData } from "next/image";
import CardList from "./CardList/CardList";

export interface PriceRange {
  floor: number | null;
  top: number | null;
}

export type FeaturedNFT = {
  name: string;
  endTime: Date;
  currentBid: string;
  likes: string;
  id: string;
  userLiked: boolean;
  owners: {
    id: string;
    image: string;
  }[];
  stock: number;
} & (
  | {
      image: StaticImageData | string;
      type: "image";
    }
  | {
      image: StaticImageData | string;
      type: "video";
    }
  | {
      image: StaticImageData | string;
      type: "music";
    }
);

const Filter = () => {
  const categoryTabs = [
    {
      name: "NFTs",
      id: 0,
    },
    {
      name: "Arts",
      id: 1,
    },
    {
      name: "Musics",
      id: 2,
    },
    {
      name: "Sports",
      id: 3,
    },
    {
      name: "Photography",
      id: 4,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [isExpand, setIsExpand] = useState(true);

  // Tags State
  const [priceRange, setPriceRange] = useState<PriceRange>({
    floor: null,
    top: null,
  });
  const [showImages, setShowImages] = useState(false);
  const [showVideos, setShowVideos] = useState(false);
  const [showMusics, setShowMusics] = useState(false);
  const [showVerified, setShowVerified] = useState(false);

  // Card List
  const [cardList, setCardList] = useState<FeaturedNFT[]>([]);

  const toggleExpand = () => {
    setIsExpand(!isExpand);
  };

  const getCardList = async () => {
    setTimeout(() => {
      setCardList(mockNFTList);
    }, 1000);
  };

  useEffect(() => {
    getCardList();
  });

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Tabs */}
      <ul className="flex flex-wrap items-center justify-center">
        {categoryTabs.map((cate) => (
          <li key={cate.id}>
            {activeTab === cate.id ? (
              <button className="rounded-full bg-gray-600 px-4 py-1 text-white">
                {cate.name}
              </button>
            ) : (
              <button
                className="rounded-full px-4 py-1 transition-colors hover:bg-gray-300"
                onClick={setActiveTab.bind(null, cate.id)}
              >
                {cate.name}
              </button>
            )}
          </li>
        ))}
      </ul>

      {/* Collapse */}
      <button
        className="flex w-full max-w-2xl items-center justify-between rounded-full bg-gray-100 px-4 py-2 shadow-md hover:bg-gray-200"
        onClick={toggleExpand}
      >
        <svgs.Filter color={variables.textMain} />
        <span>Filter</span>
        <svgs.ArrowLine
          color={variables.textMain}
          direction={isExpand ? "Bottom" : "Top"}
        />
      </button>

      {isExpand && (
        <Tags
          priceRange={priceRange}
          showImages={showImages}
          showVideos={showVideos}
          showMusics={showMusics}
          showVerified={showVerified}
          setPriceRange={setPriceRange}
          setShowImages={setShowImages}
          setShowVideos={setShowVideos}
          setShowMusics={setShowMusics}
          setShowVerified={setShowVerified}
        />
      )}

      {/* Card List */}
      <CardList cardList={cardList} />
    </div>
  );
};

export default Filter;
