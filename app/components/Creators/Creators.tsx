import { FunctionComponent } from "react";
import CreatorList from "./CreatorList/CreatorList";

interface CreatorsProps {}

const Creators: FunctionComponent<CreatorsProps> = () => {
  return (
    <section className="flex flex-col p-16 text-gray-600 md:items-center">
      <div className="md:text-center">
        <h3 className="text-2xl font-black">Top Creators List</h3>
      </div>
      <div className="mt-4 w-full px-2 pb-4">
        <div className="flex flex-col items-center gap-4">
          <CreatorList />
        </div>
      </div>
    </section>
  );
};

export default Creators;
