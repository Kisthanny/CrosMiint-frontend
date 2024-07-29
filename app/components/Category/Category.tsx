"use client";

import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard/CategoryCard";
import { getCategoryList, ICategory } from "@/app/api/server/collection";

export interface ICateforyObj extends ICategory {
  link: string;
}

const Category = () => {
  const [categoryList, setCategoryList] = useState<ICateforyObj[]>([]);

  const init = async () => {
    const dataList = await getCategoryList();
    setCategoryList(
      dataList.map((e) => ({
        ...e,
        link: e.name.toLowerCase(),
      })),
    );
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <section className="flex flex-col gap-8 p-16 md:items-center">
      <div className="flex flex-col gap-4 text-gray-600 md:items-center">
        <h3 className="text-2xl font-black">Browse by category</h3>
        <p className="text-xs">
          Explore the NFTs in the most featured categories
        </p>
      </div>
      <ul className="flex flex-wrap items-center gap-4 px-2 py-4">
        {categoryList.map((category) => (
          <li key={`category-${category.name}`}>
            <CategoryCard category={category} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Category;
