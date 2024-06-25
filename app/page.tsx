import { NextUIProvider } from "@nextui-org/react";
import Category from "./components/Category/Category";
import Hero from "./components/Hero/Hero";
import NFTAuction from "./components/NFTAuction/NFTAuction";
import NFTFilter from "./components/NFTFilter/NFTFilter";
import Service from "./components/Service/Service";
import SubscribeDrop from "./components/SubscribeDrop/SubscribeDrop";
import Creators from "./components/Creators/Creators";

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
      </NextUIProvider>
    </main>
  );
}
