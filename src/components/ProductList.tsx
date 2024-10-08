import { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./product/ProductItem";
import Heading from "./ui/Heading";
import { Product } from "../@types/product";
import { baseUrl } from "../utils/http/api";

type Props = {
  headingText: string;
};

const ProductList: React.FC<Props> = ({ headingText }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const getProducts = () => {
    axios
      .get(`${baseUrl}/ecommerce/products?page=1&limit=4`)
      .then((res) => {
        setProducts(res.data.data.products);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="space-y-9 border-b border-b-primary-300 pb-8">
      <Heading headingText={headingText} position="center" />
      <div className="w-full overflow-hidden">
        <div className="overflow-scroll">
          <ul className="flex justify-between gap-5">
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
      </div>
    </div>
  );
};

export default ProductList;
