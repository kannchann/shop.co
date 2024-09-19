import { useContext } from "react";
import { AuthContext } from "../../provider/AuthContext";

const Home = () => {
  const userContext = useContext(AuthContext);

  if (!userContext) {
    throw new Error("somthing went wrong");
  }

  const { user } = userContext;

  return (
    <>
      <div className="flex h-[calc(100vh-4rem)] items-center justify-center text-5xl">
        Welcome to home
      </div>
    </>
  );
};

export default Home;
