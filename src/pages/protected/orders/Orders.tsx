import Heading from "../../../components/ui/Heading";
import axios from "axios";
import { useEffect, useState } from "react";
import { getToken } from "../../../utils/token.utils";

import { Product } from "../../../@types/product";
import Loader from "../../../components/ui/Loader";
import CartItem from "../../../components/cart/cartItem";

interface Item {
  coupon: string;
  productDetails: Product;
  quantity: number;
}

const Orders: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cartItems, setCartItems] = useState<Item[]>([]);
  const getCart = () => {
    axios
      .get(
        "https://freeapi-app-production-dfcc.up.railway.app/api/v1/ecommerce/cart",
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      )
      .then((res) => {
        setCartItems(res.data.data.items);
        console.log(res.data.data.items);
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    getCart();
  }, []);

  if (isLoading) {
    return <Loader size={80} />;
  }
  return (
    <div className="container py-9">
      <Heading headingText="Your Cart" position="start" />
      <div className="mt-9 min-w-[358px] max-w-[715px] border border-cyan-300">
        {cartItems.length > 0 &&
          cartItems.map((item) => (
            <CartItem
              coupon={item.coupon}
              productDetails={item.productDetails}
              quantity={item.quantity}
            />
          ))}
      </div>
    </div>
  );
};

export default Orders;
