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
  description,
  stock,
}) => {
  return (
    <div className="w-[300px] cursor-pointer">
      <Link to={`products/${id}`}>
        <li>
          <div className="bg-slate-400">
            <img
              className="object-contain"
              src={mainImage.url}
              alt={name}
              style={{ width: "600px" }}
            />
          </div>
          <div className="p-3">
            <h3>{name}</h3>
            <div className="flex space-x-3">
              <p>Price: ${price}</p>
              <span className="text-red-700">only {stock} left</span>
            </div>
          </div>
        </li>
      </Link>
    </div>
  );
};

export default ProductItem;
