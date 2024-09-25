import { Link } from "react-router-dom";

type Props = {
  id: string;
  name: string;
  price: number;
  mainImage: {
    url: string;
    localPath: string;
  };
  description: string;
  stock: number;
};

const ProductItem: React.FC<Props> = ({
  id,
  name,
  price,
  mainImage,
  stock,
}) => {
  return (
    <div className="shrink-0 cursor-pointer">
      <li>
        <div className="grid h-[200px] w-[198px] rounded-lg bg-primary-300 md:h-[290px] md:w-[295px]">
          <img
            className="h-full w-full rounded-lg object-contain"
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
      </li>
    </div>
  );
};

export default ProductItem;
