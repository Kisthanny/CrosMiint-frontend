import { NextUIProvider } from "@nextui-org/react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Category from "./components/Category/Category";
import Hero from "./components/Hero/Hero";
import TopAirdrop from "./components/TopAirdrops/TopAirdrop";
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
        <TopAirdrop />
        <Category />
        <SubscribeDrop />
        <NFTFilter />
        <Creators />
        <MusicCard {...mockNFTList.filter((c) => c.type === "music")[0]} />
        <ToastContainer />
      </NextUIProvider>
    </main>
  );
}
