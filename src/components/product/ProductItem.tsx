import { Link, useNavigate } from "react-router-dom";
import { ProductItemType } from "../../@types/product";

const ProductItem: React.FC<ProductItemType> = ({
  id,
  name,
  price,
  mainImage,
  stock,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="shrink-0 cursor-pointer outline-red-500"
      onClick={() => navigate(`/products/${id}`)}
    >
      <div className="min-h[174px] min-w-[174px] max-w-[295px] rounded-lg bg-primary-300 lg:h-[298px]">
        <img
          className="h-full w-full rounded-lg object-cover"
          src={mainImage.url}
          alt={name}
        />
      </div>
      <div className="py-3">
        <h3 className="font-satoshiMedium">{name}</h3>
        <div className="flex space-x-3">
          <p className="font-satoshiMedium">${price}</p>
          <span className="text-red-700">only {stock} left</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
