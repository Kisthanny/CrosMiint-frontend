import Link from "next/link";
import { CategoryInterface } from "../Category";
import Image from "next/image";

const CategoryCard = ({ category }: { category: CategoryInterface }) => {
  return (
    <Link href={category.link}>
      <div className="w-[160px] h-[109px] flex flex-col items-center bg-gray-300 rounded-lg hover:shadow-lg hover:bg-gray-100 transition-all">
        <Image
          src={category.image}
          alt={category.name}
          className="h-[70px] object-cover rounded-lg"
        />
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-gray-600 font-bold text-sm">{category.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
