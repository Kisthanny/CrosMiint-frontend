import Hero from "./components/Hero/Hero";
import NFTAuction from "./components/NFTAuction/NFTAuction";
import Service from "./components/Service/Service";

export default function Home() {
  return (
    <main className="min-w-[375px] w-full min-h-screen bg-gray-100 bg-gradient-to-b from-grey-main">
      <Hero />
      <Service />
      <NFTAuction />
    </main>
  );
}
