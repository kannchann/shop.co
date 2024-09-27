import QuantityCounter from "../ui/QuantityCounter";
import { deleteButton } from "../../assets";
import { Product } from "../../@types/product";

type CartProducts = {
  coupon: string;
  productDetails: Product;
  quantity: number;
};

const CartItem: React.FC<CartProducts> = ({
  coupon,
  productDetails,
  quantity,
}) => {
  return (
    <div className="flex justify-between border-b border-b-red-300 px-5 py-6">
      <div className="flex flex-row gap-3">
        <div className="max-w-[124px] bg-primary-300">
          {/* <img src={productDetails.mainImage.url} alt="" /> */}
        </div>
        <div>
          <h2>{productDetails?.name ?? "No name"}</h2>
          <p>
            <span> size:</span> size
          </p>
          <p>
            <span> size:</span> size
          </p>
          <p>Price: price</p>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <div>
          <img src={deleteButton} alt="" />
        </div>
        <QuantityCounter stock={2} count={3} size="small" setCount={() => {}} />
      </div>
    </div>
  );
};

export default CartItem;
