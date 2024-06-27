import { NextUIProvider } from "@nextui-org/react";
import Category from "./components/Category/Category";
import Hero from "./components/Hero/Hero";
import NFTAuction from "./components/NFTAuction/NFTAuction";
import NFTFilter from "./components/NFTFilter/NFTFilter";
import Service from "./components/Service/Service";
import SubscribeDrop from "./components/SubscribeDrop/SubscribeDrop";
import Creators from "./components/Creators/Creators";
import MusicCard from "./components/MusicCard/MusicCard";
import { mockNFTList } from "./components/NFTFilter/Filter/mockData";

export default function Home() {
  return (
    <main className="min-h-screen w-full min-w-[375px] bg-gray-100 bg-gradient-to-b from-grey-main">
      <NextUIProvider>
        <Hero />
        <Service />
        <NFTAuction />
        <Category />
        <SubscribeDrop />
        <NFTFilter />
        <Creators />
        <MusicCard {...mockNFTList.filter((c) => c.type === "music")[0]} />
      </NextUIProvider>
    </main>
  );
}
