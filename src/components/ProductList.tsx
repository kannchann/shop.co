import { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductItem from "./product/ProductItem";

interface Product {
  _id: string;
  name: string;
  price: number;
  mainImage: {
    url: string;
    localPath: string;
  };
  description: string;
  stock: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const getProducts = () => {
    axios
      .get(
        "https://freeapi-app-production-dfcc.up.railway.app/api/v1/ecommerce/products?page=1&limit=4",
      )
      .then((res) => {
        setProducts(res.data.data.products);
      })
      .catch((err) => {
        // console.log(err.response);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="w-full">
      <ul className="grid grid-cols-4 items-center justify-center gap-4 p-10">
        {products.map((product) => (
          <ProductItem
            key={product._id}
            id={product._id}
            name={product.name}
            price={product.price}
            stock={product.stock}
            mainImage={product.mainImage}
            description={product.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
