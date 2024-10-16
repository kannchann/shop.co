import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryType } from "../../@types/product";
import { getCategoryType } from "../../services/ProductServices";

type Props = {};

const SearchCategoryList = () => {
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
  return <div>SearchCategoryList</div>;
};

export default SearchCategoryList;
