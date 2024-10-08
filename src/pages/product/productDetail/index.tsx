import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ColorRadioButton from "../../../components/ui/ColorRadioButton";
import SizeRadioButton from "../../../components/ui/SizeRadioButton";
import Button from "../../../components/ui/Button";
import NotFoundPage from "../../NotFoundPage";
import { getToken } from "../../../utils/token.utils";
import { AuthContext } from "../../../provider/AuthContext";
import Heading from "../../../components/ui/Heading";
import QuantityCounter from "../../../components/ui/QuantityCounter";
import Loader from "../../../components/ui/Loader";
import { Product } from "../../../@types/product";
import { baseUrl } from "../../../utils/http/api";

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mainImage, setMainImage] = useState("");

  const [selectedColor, setSelectedColor] = useState<string>("colorOne");
  const [selectedSize, setSelectedSize] = useState<string>("small");

  const [totalQuantity, setTotalQuantity] = useState<number>(1);

  const userContext = useContext(AuthContext);
  if (!userContext) {
    throw new Error("somthing went wrong");
  }
  const { isAuthenticated } = userContext;

  const navigate = useNavigate();

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleaddToCart = () => {
    isAuthenticated
      ? axios
          .post(
            `${baseUrl}/ecommerce/cart/item/${productID}`,
            {
              quantity: totalQuantity,
            },
            {
              headers: {
                Authorization: `Bearer ${getToken()}`,
              },
            },
          )
          .catch((err) => console.log(err.response))
      : navigate("/login");
  };

  const { productID } = useParams();

  const getProductDetail = () => {
    axios
      .get(`${baseUrl}/ecommerce/products/${productID}`)
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
    return <Loader size={80} />;
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
          <Heading
            headingText={product.name.toUpperCase()}
            position="start"
          ></Heading>
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
            <QuantityCounter
              stock={product.stock}
              count={totalQuantity}
              setCount={setTotalQuantity}
            />
            <Button
              size="large"
              buttonText="Add to Cart"
              onClick={handleaddToCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
