import Filter from "./Filter/Filter";

const NFTFilter = () => {
  return (
    <section className="flex flex-col p-16 text-gray-600 md:items-center">
      {/* Title */}
      <div className="md:text-center">
        <h3 className="text-2xl font-black">Featured NFTs</h3>
        <p className="text-xs">
          Discover the most outstanding NFTs in all topics of life
        </p>
      </div>

      {/* Filter */}
      <div className="mt-4 w-full px-2 pb-4">
        <Filter />
      </div>
    </section>
  );
};

export default NFTFilter;
