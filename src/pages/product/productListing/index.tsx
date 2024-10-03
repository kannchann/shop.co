import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsOfCategory } from "../../../services/ProductServices";
import { Product } from "../../../@types/product";

const ProductsListing = () => {
  const [ProductList, setProductList] = useState<Product[]>([]);
  const { categoryId, categoryName } = useParams();

  const ProductListCategory = async () => {
    if (categoryId) {
      const res = await getProductsOfCategory(categoryId);
      setProductList(res);
      console.log(res);
    }
  };

  useEffect(() => {
    ProductListCategory();
  }, []);

  return <div>{categoryName}</div>;
};

export default ProductsListing;
