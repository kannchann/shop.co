import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../provider/AuthContext";
import { useContext, useEffect } from "react";
import { getToken } from "../utils/token.utils";
import axios from "axios";
import Loader from "../components/ui/Loader";
import { baseUrl } from "../utils/http/api";
import Footer from "../components/Footer";
import { useCart } from "../provider/CartContext";

type Props = {};

const RootLayout = (props: Props) => {
  const userContext = useContext(AuthContext);
  if (!userContext) {
    throw new Error("somthing went wrong");
  }
  const { setCredentials, isAuthenticating, isLoading } = userContext;
  const { setCartItemCount } = useCart();

  useEffect(() => {
    if (getToken()) {
      getUser();
      getCart();
    } else {
      isLoading(false);
    }
  }, []);

  const getCart = () => {
    axios
      .get(`${baseUrl}/ecommerce/cart`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setCartItemCount(res.data.data.items.length);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const getUser = () => {
    axios
      .get(`${baseUrl}/users/current-user`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setCredentials(res.data);
        isLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        isLoading(false);
      });
  };

  if (isAuthenticating) {
    return <Loader />;
  }

  return (
    <>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
