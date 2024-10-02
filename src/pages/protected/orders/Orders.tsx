import Heading from "../../../components/ui/Heading";
import axios from "axios";
import { useEffect, useState } from "react";
import { getToken } from "../../../utils/token.utils";

import { Product } from "../../../@types/product";
import Loader from "../../../components/ui/Loader";
import CartItem from "../../../components/cart/CartItem";
import { handleDeleteItemFromCart } from "../../../services/ProductServices";
import Modal from "../../../components/ui/Modal";
import ConfirmationModal from "../../../components/ConfirmationModal";

interface Item {
  coupon: string;
  product: Product;
  quantity: number;
}

const Orders: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cartItems, setCartItems] = useState<Item[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>();
  const [selectedId, setSelectedId] = useState<string>("");
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
        <div className="mt-9 min-w-[358px] max-w-[715px] divide-y rounded-lg border border-black-700 border-opacity-10">
          {cartItems.length > 0 &&
            cartItems.map((item) => (
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
            ))}
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
