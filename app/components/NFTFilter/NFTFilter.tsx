import Filter from "./Filter/Filter";

const NFTFilter = () => {
  return (
    <section className="p-16 text-gray-600 flex flex-col md:items-center">
      {/* Title */}
      <div className="md:text-center">
        <h3 className="font-black text-2xl">Featured NFTs</h3>
        <p className="text-xs">
          Discover the most outstanding NFTs in all topics of life
        </p>
      </div>

      {/* Filter */}
      <div className="px-2 pb-4 mt-4 w-full">
        <Filter />
      </div>
    </section>
  );
};

export default NFTFilter;
