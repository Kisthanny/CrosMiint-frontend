import Link from "next/link";
import { ICateforyObj } from "../Category";
import Image from "next/image";

const CategoryCard = ({ category }: { category: ICateforyObj }) => {
  return (
    <Link href={category.link}>
      <div className="flex h-[200x] w-[160px] pt-2 flex-col items-center rounded-lg bg-gray-300 transition-all hover:bg-gray-100 hover:shadow-lg">
        <Image
          src={category.image}
          alt={category.name}
          width={144}
          height={144}
          style={{
            objectFit: "cover",
          }}
          className="rounded-lg hover:scale-105 ease-in-out"
        />
        <div className="flex h-[40px] w-full items-center justify-center">
          <p className="text-sm font-bold text-gray-600">{category.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
