import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../../components/ui/Spinner";
import ColorRadioButton from "../../../components/ui/ColorRadioButton";
import SizeRadioButton from "../../../components/ui/SizeRadioButton";
import Button from "../../../components/ui/Button";
import AddToCart from "../../../components/ui/AddToCart";
import NotFoundPage from "../../NotFoundPage";

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

  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("small");

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    console.log("Selected size", selectedSize);
  }, [selectedSize]);

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
    return <NotFoundPage />;
  }

  return (
    <div className="container py-20">
      <div className="flex w-full flex-col gap-4 md:flex-row">
        {/*images div */}
        <div className="flex w-full flex-col gap-3 lg:w-1/2 lg:flex-row-reverse">
          <figure className="h-full w-full min-w-[358px] rounded-lg bg-primary-300 md:w-[444px]">
            <img src={mainImage} alt="" className="rounded-lg object-contain" />
          </figure>

          <div className="flex gap-3 lg:flex-col">
            {product.subImages.slice(0, 3).map((subImg) => (
              <figure
                key={subImg._id}
                className="min-h[106px] max-h[167px] min-w-[112px] max-w-[152px] rounded-lg"
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
        </div>

        <div className="space-y-2 lg:w-2/3">
          <h1 className="font-custom1 text-xl md:text-2xl lg:text-4xl">
            {product.name.toUpperCase()}
          </h1>
          <div className="flex space-x-5 text-lg font-bold">
            <p>{`$${product.price}`}</p>
            <p className="text-red-600 opacity-60">
              only {product.stock} items left
            </p>
          </div>
          <p className="font-custom2 border-b border-b-grey-100 pb-4 font-black opacity-60">
            {product.description}
          </p>
          <p>Select Colors</p>
          <div className="flex space-x-2 border-b border-b-grey-100 pb-4">
            {["colorOne", "colorTwo", "colorThree"].map((color, index) => (
              <ColorRadioButton
                key={index}
                color={color as "colorOne" | "colorTwo" | "colorThree"}
                isSelected={selectedColor === color}
                colorChanged={handleColorChange}
              />
            ))}
          </div>
          <p>Choose size</p>
          {/* <pre>{JSON.stringify(selectedSize)}</pre> */}
          <div className="flex space-x-2 border-b border-b-grey-100 pb-4">
            {["small", "medium", "large", "X-large"].map((size, index) => (
              <SizeRadioButton
                key={index}
                size={size as "small" | "medium" | "large" | "X-large"}
                index={index}
                isSelected={selectedSize === size}
                sizeChanged={handleSizeChange}
              />
            ))}
          </div>
          <div className="flex space-x-2">
            <AddToCart stock={product.stock} />
            <Button size="large" buttonText="Add to Cart" to="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
