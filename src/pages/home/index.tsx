import { useContext } from "react";
import { AuthContext } from "../../provider/AuthContext";
import ProductList from "../../components/ProductList";

const Home = () => {
  const userContext = useContext(AuthContext);

  if (!userContext) {
    throw new Error("somthing went wrong");
  }

  const { user } = userContext;

  return (
    <>
      <div className="container flex w-full">
        {/* {user && <h2>Hi {user?.username}</h2>} */}
        <ProductList />
      </div>
    </>
  );
};

export default Home;
