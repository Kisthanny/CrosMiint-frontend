import { FeaturedNFT } from "../Filter";
import Card from "./Card";

const CardList = ({ cardList }: { cardList: FeaturedNFT[] }) => {
  return (
    <ul className="flex w-full max-w-screen-2xl flex-wrap gap-4">
      {cardList.map((e) => (
        <Card
          key={e.id}
          {...e}
        />
      ))}
    </ul>
  );
};

export default CardList;
