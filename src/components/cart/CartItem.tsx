import { deleteButton } from "../../assets";
import { Product } from "../../@types/product";

type CartProducts = {
  coupon: string;
  id: string;
  productDetails: Product;
  quantity: number;
  onClick: (id: string) => void;
};

const CartItem: React.FC<CartProducts> = ({
  coupon,
  productDetails,
  quantity,
  onClick,
  id,
}) => {
  return (
    <div className="flex justify-between px-5 py-6">
      <div className="flex flex-row gap-3">
        <div className="max-w-[124px] rounded-md bg-primary-300">
          <img
            src={productDetails.mainImage.url}
            alt="cart product image"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div>
          <h2 className="font-satoshiBold text-xl">{productDetails.name}</h2>
          <p>
            Quantity:
            <span className=""> {quantity}</span>
          </p>
          <p>
            <span> Size:</span> small
          </p>
          <p className="pt-4 font-satoshiBold text-2xl">
            ${productDetails.price}
          </p>
        </div>
      </div>

      <button
        onClick={() => {
          onClick(id);
        }}
      >
        <img src={deleteButton} alt="" />
      </button>
    </div>
  );
};

export default CartItem;
