import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getAllProducts,
  getProductsOfCategory,
} from "../../../services/ProductServices";
import { Product } from "../../../@types/product";
import SideBar from "../../../components/SideBar";
import ProductItem from "../../../components/product/ProductItem";

const ProductsListing = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [filteredProductList, setFilteredProductList] = useState<Product[]>([]);
  const { categoryId, categoryName } = useParams();


  const ProductListCategory = async () => {
    if (categoryId) {
      const res = await getProductsOfCategory(categoryId);
      const products = res.products;
      setProductList(products);
      setFilteredProductList(products); // Initialize filtered list with all products
    } else {
      const res = await getAllProducts();
      setProductList(res);
      setFilteredProductList(res);
    }
  };

  useEffect(() => {
    ProductListCategory();
  }, [categoryId]);

  const applyFilters = (filters: any) => {
    const filtered = productList.filter((product) => {
      return (
        !filters.priceRange ||
        (product.price >= filters.priceRange[0] &&
          product.price <= filters.priceRange[1])
      );
    });
    setFilteredProductList(filtered);
  };

  return (
    <>
      <div className="container">
        <div className="grid w-full grid-cols-4 gap-5">
          <SideBar data={productList} filterData={applyFilters} />
          <div className="col-span-4 md:col-span-3">
            <h2 className="pb-4 font-satoshiBold text-2xl">
              {categoryName ?? "All Products"}
            </h2>
            <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
              {filteredProductList.map((product) => (
                <ProductItem
                  key={product._id}
                  id={product._id}
                  name={product.name}
                  price={product.price}
                  mainImage={product.mainImage}
                  description={product.description}
                  stock={product.stock}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsListing;
