import images from "@/app/assets/images";
import { FeaturedNFT } from "./Filter";

export const mockNFTList: FeaturedNFT[] = [
  {
    image: images.witchGirlAbstract,
    name: "Abstract #10002",
    endTime: new Date(
      "Sat Jun 29 2024 12:39:12 GMT+0800 (China Standard Time)",
    ),
    currentBid: "1700000000000000000",
    likes: "769",
    id: "10002",
    userLiked: false,
    type: "image",
  },
  {
    image: images.witchGirlAbstract,
    name: "Abstract #10003",
    endTime: new Date(
      "Sat Jun 29 2024 12:39:12 GMT+0800 (China Standard Time)",
    ),
    currentBid: "1700000000000000000",
    likes: "999",
    id: "10003",
    userLiked: true,
    type: "music",
  },
  {
    image: images.witchGirlAbstract,
    name: "Abstract #10004",
    endTime: new Date(
      "Sat Jun 29 2024 12:39:12 GMT+0800 (China Standard Time)",
    ),
    currentBid: "1700000000000000000",
    likes: "555",
    id: "10004",
    userLiked: true,
    type: "video",
  },
  {
    image: images.witchGirlAbstract,
    name: "Abstract #10005",
    endTime: new Date(
      "Sat Jun 18 2024 14:39:12 GMT+0800 (China Standard Time)",
    ),
    currentBid: "1700000000000000000",
    likes: "123",
    id: "10005",
    userLiked: true,
    type: "image",
  },
  {
    image: images.witchGirlAbstract,
    name: "Abstract #10006",
    endTime: new Date(
      "Sat Jun 29 2024 12:39:12 GMT+0800 (China Standard Time)",
    ),
    currentBid: "1700000000000000000",
    likes: "99999",
    id: "10006",
    userLiked: false,
    type: "image",
  },
];
