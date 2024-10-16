import Heading from "../../../components/ui/Heading";
import axios from "axios";
import { useEffect, useState } from "react";
import { getToken } from "../../../utils/token.utils";

import { Product } from "../../../@types/product";
import Loader from "../../../components/ui/Loader";
import CartItem from "../../../components/cart/CartItem";
import { handleDeleteItemFromCart } from "../../../services/ProductServices";
import ConfirmationModal from "../../../components/ConfirmationModal";
import { baseUrl } from "../../../utils/http/api";
import Button from "../../../components/ui/Button";

interface Item {
  coupon: string;
  product: Product;
  quantity: number;
}

interface CartData {
  items: Item[];
  cartTotal: number;
  discountedTotal: number;
  coupon: {
    discountValue: number;
  };
}

const Orders: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cartData, setCartData] = useState<CartData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>();
  const [selectedId, setSelectedId] = useState<string>("");
  const getCart = () => {
    axios
      .get(`${baseUrl}/ecommerce/cart`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setCartData(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleDeleteButton = async () => {
    setIsLoading(true);
    const res = await handleDeleteItemFromCart(selectedId);
    if (res.success) {
      getCart();
    }
    setSelectedId("");
    setIsModalOpen(false);
  };

  const cancelDeleteButton = () => {
    setSelectedId("");
    setIsModalOpen(false);
  };
  useEffect(() => {
    setIsLoading(true);
    getCart();
  }, []);

  if (isLoading) {
    return <Loader size={80} />;
  }

  return (
    <>
      <div className="container py-9">
        <Heading headingText="Your Cart" position="start" />
        <div className="mt-9 grid gap-2 md:flex">
          <div className="flex-grow divide-y rounded-lg border border-black-700 border-opacity-10">
            {cartData && cartData.items.length > 0 ? (
              cartData.items.map((item) => (
                <CartItem
                  key={item.product._id}
                  id={item.product._id}
                  coupon={item.coupon}
                  productDetails={item.product}
                  quantity={item.quantity}
                  onClick={(id) => {
                    setSelectedId(id);
                    setIsModalOpen(true);
                  }}
                />
              ))
            ) : (
              <p className="p-4">Your cart is empty.</p>
            )}
          </div>
          <div className="min-w-[358px] max-w-[715px] space-y-4 rounded-lg border border-black-700 border-opacity-10 px-6 py-5">
            <h3 className="font-satoshiBold text-2xl">Orders Summary</h3>
            <div className="space-y-2 border-b border-black-700 border-opacity-10 py-5 text-xl">
              <div className="flex justify-between">
                <p className="opacity-60">Subtotal</p>
                <p className="font-satoshiBold">
                  ${cartData?.cartTotal.toFixed(2) || "0.00"}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="opacity-60">Discount</p>
                <p className="font-satoshiBold text-red-500">
                  ${cartData?.coupon?.discountValue.toFixed(2) || "0.00"}
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-between text-xl font-bold">
              <p>Total</p>
              <p className="font-satoshiBold">
                ${cartData?.discountedTotal.toFixed(2) || "0.00"}
              </p>
            </div>
            <div className="mt-4">
              <Button
                buttonText="Go to Checkout"
                size="large"
                onClick={() => {
                  console.log("Checkout");
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <ConfirmationModal
        open={isModalOpen}
        cancelButton={cancelDeleteButton}
        confirmButton={handleDeleteButton}
      />
    </>
  );
};

export default Orders;
