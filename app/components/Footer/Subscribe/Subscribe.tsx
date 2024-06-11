
import svgs from "@/app/assets/svgs";

const Subscribe = () => {
  return (
    <section className="text-gray-500 flex flex-col gap-8 max-w-80">
      <h3 className="font-bold text-xl">Subscribe</h3>
      <div
        className="px-8 py-4 rounded-full flex items-center justify-between gap-2 bg-gray-700"
      >
        <input className="bg-transparent outline-none text-white placeholder-white" type="text" placeholder="Enter your email *" />
        <button><svgs.Send color="#ffffff"/></button>
      </div>
      <p>
        Discover, collect, and sell extraordinary NFTs.
        <br />
        CROSMIINT is the world's first and largest crosschain NFT marketplace
      </p>
    </section>
  );
};

export default Subscribe;
