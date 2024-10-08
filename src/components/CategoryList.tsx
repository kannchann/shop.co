import { useEffect, useState } from "react";
import { getCategoryType } from "../services/ProductServices";
import { CategoryType } from "../@types/product";
import Heading from "./ui/Heading";
import { categoryImages } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const CategoryList = () => {
  const navigate = useNavigate();
  const [categoryDetail, setCategoryDetail] = useState<CategoryType[]>([]);

  const getCategory = async () => {
    try {
      const res = await getCategoryType();
      setCategoryDetail(res.data.data.categories);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getCategory(); //get category is getting type of categories only
  }, []);

  return (
    <div className="rounded-lg bg-primary-200 px-14 pt-10 lg:pt-[70px]">
      <Heading headingText="Browse by Category" position="center" />
      <div className="grid gap-4 py-14 md:grid-cols-5 md:grid-rows-2">
        {categoryDetail.map((category, index) => (
          <button
            key={index}
            className={`flex h-[190px] justify-between rounded-lg bg-white md:col-span-2 md:h-[289px] ${index == 1 || index == 2 ? "md:col-span-3" : ""}`}
            onClick={() => {
              navigate(`/products/category/${category.name}/${category._id}`);
            }}
          >
            <p className="px-3 py-3 font-satoshiBold md:px-7 md:py-5 md:text-xl lg:px-9 lg:text-3xl">
              {category.name}
            </p>
            <div className="h-full w-full rounded-r-lg">
              <img
                src={categoryImages[index]}
                className="h-full w-full rounded-r-lg object-cover"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
