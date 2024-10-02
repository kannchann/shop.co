import { useEffect, useState } from "react";
import { getCategoryList } from "../services/ProductServices";
import { CategoryType } from "../@types/product";
import Heading from "./ui/Heading";
import { categoryImages } from "../utils/constants";

type Props = {};

const CategoryList = (props: Props) => {
  const [categoryDetail, setCategoryDetail] = useState<CategoryType[]>([]);
  const getCategory = async () => {
    const res = await getCategoryList();
    setCategoryDetail(res.data.data.categories);
  };

  useEffect(() => {
    getCategory();
    console.log(categoryDetail);
  }, []);
  return (
    <div className="rounded-lg bg-primary-200 px-14 pt-10 lg:pt-[70px]">
      <Heading headingText="Browse by Category" position="center" />
      <div className="grid gap-4 py-14 md:grid-cols-5 md:grid-rows-2">
        {categoryDetail.map((category, index) => (
          <div
            key={index}
            className={`flex h-[190px] justify-between rounded-lg bg-white md:col-span-2 md:h-[289px] ${index == 1 || index == 2 ? "md:col-span-3" : ""}`}
          >
            <p className="px-5 py-3 font-satoshiBold md:px-7 md:py-5 md:text-xl lg:px-9 lg:text-3xl">
              {category.name}
            </p>
            <div className="h-full w-full rounded-r-lg">
              <img
                src={categoryImages[index]}
                className="h-full w-full rounded-r-lg object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
