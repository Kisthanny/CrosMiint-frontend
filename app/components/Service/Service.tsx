import images from "@/app/assets/images";
import Step from "./Step/Step";

const Service = () => {
  const steps = [
    {
      image: images.discoverArt,
      name: "Filter & Discover",
      description:
        "Connect with wallet, discover, buy NFTs, sell your NFTs and earn money",
    },
    {
      image: images.connectWallet,
      name: "Connect wallet",
      description:
        "Connect with wallet, discover, buy NFTs, sell your NFTs and earn money",
    },
    {
      image: images.startTrading,
      name: "Start trading",
      description:
        "Connect with wallet, discover, buy NFTs, sell your NFTs and earn money",
    },
    {
      image: images.piggyBank,
      name: "Earn money",
      description:
        "Connect with wallet, discover, buy NFTs, sell your NFTs and earn money",
    },
  ];
  return (
    <section>
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center lg:flex-nowrap items-center gap-8 py-8 px-16">
        {steps.map((e, i) => (
          <Step
            image={e.image}
            name={e.name}
            description={e.description}
            step={i + 1}
            key={`step-${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Service;
