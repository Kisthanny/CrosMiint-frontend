"use client";

import { useEffect, useState } from "react";
import { categoryList as mockCategoryList } from "./mockDate";
import { StaticImageData } from "next/image";
import CategoryCard from "./CategoryCard/CategoryCard";

export interface CategoryInterface {
  name: string;
  link: string;
  image: StaticImageData;
}

const Category = () => {
  const [categoryList, setCategoryList] = useState<CategoryInterface[]>([]);

  const getCategoryList = async () => {
    setTimeout(() => {
      setCategoryList(mockCategoryList);
    }, 1000);
  };

  useEffect(() => {
    getCategoryList();
  }, []);
  return (
    <section className="p-16 flex flex-col gap-8">
      <div className="text-gray-600 flex flex-col gap-4">
        <h3 className="font-black text-2xl">Browse by category</h3>
        <p className="text-xs">
          Explore the NFTs in the most featured categories
        </p>
      </div>
      <ul className="flex items-center px-2 py-4 gap-4 flex-wrap">
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
