import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../../../components/ui/Spinner";

interface Product {
  _id: string;
  name: string;
  category: string;
  owner: string;
  price: number;
  mainImage: {
    localPath: string;
    url: string;
    _id: string;
  };
  stock: number;
  subImages: [
    {
      localPath: string;
      url: string;
      _id: string;
    },
  ];
  description: string;
}

const Product: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mainImage, setMainImage] = useState("");

  const { productID } = useParams();

  const getProductDetail = () => {
    axios
      .get(
        `https://freeapi-app-production-dfcc.up.railway.app/api/v1/ecommerce/products/${productID}`,
      )
      .then((res) => {
        setProduct(res.data.data);
        setMainImage(res.data.data.subImages[0].url);
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (productID) {
      setIsLoading(true);
      getProductDetail();
    }
  }, []);

  const handleClick = (url: string) => {
    console.log(url);
    setMainImage(url);
  };

  if (isLoading) {
    return (
      <div className="grid h-[1000px] w-full items-center justify-center">
        <Spinner size={80} />;
      </div>
    );
  }

  if (!product || !productID) {
    return "product not found";
  }

  console.log(product);
  return (
    <div className="container">
      <div className="flex flex-col py-20 md:flex-row md:space-x-4">
        <figure className="bg-primary-300 order-1 max-h-[530px] max-w-[444px] rounded-lg md:order-2">
          <img
            src={mainImage}
            alt=""
            className="h-full rounded-lg object-contain"
          />
        </figure>
        <div className="order-2 flex md:order-1 md:flex-col md:space-y-7">
          {product.subImages.slice(0, 3).map((subImg) => (
            <figure
              key={subImg._id}
              className="max-w-[152px] rounded-lg"
              onClick={() => handleClick(subImg.url)}
            >
              <img
                src={subImg.url}
                alt="product image"
                className="rounded-lg object-contain"
              />
            </figure>
          ))}
        </div>
        <div className="order-3 lg:pl-4">
          <h1 className="font-custom1 text-xl md:text-3xl lg:text-4xl">
            {product.name.toUpperCase()}
          </h1>
          <div className="flex space-x-5 text-xl md:text-2xl lg:text-3xl">
            <p>{`$${product.price}`}</p>
            <p className="opacity-60">only {product.stock} items left</p>
          </div>
          <p className="font-custom2 font-black opacity-60">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
