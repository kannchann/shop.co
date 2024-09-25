import { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./product/ProductItem";
import Heading from "./ui/Heading";

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
type Props = {
  headingText: string;
};

const ProductList: React.FC<Props> = ({ headingText }) => {
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
        console.log(err.response);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="space-y-9 border-b border-b-primary-300 pb-8">
      <Heading headingText={headingText} />
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
