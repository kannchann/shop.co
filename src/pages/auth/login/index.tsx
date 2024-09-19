import { Link } from "react-router-dom";
import { LoginSignUpFormWrapper } from "../../../components";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getToken, setToken } from "../../../utils/token.utils";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthContext";
import WarningBanner from "../../../components/ui/WarningBanner";

// import { Link } from "react-router-dom";
const Login = () => {
  const userContext = useContext(AuthContext);

  if (!userContext) {
    throw new Error("somthing went wrong");
  }

  const { setCredentials, isAuthenticated } = userContext;

  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    message: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
      return;
    }
  }, [isAuthenticated]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setErrors({ username: "", password: "", message: "" });

    let isValid = true;
    const newErrors = { username: "", password: "", message: "" };

    if (!username) {
      newErrors.username = "username is required.";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required.";
      isValid = false;
    }

    if (isValid) {
      handleNewLogin(username, password);
    } else {
      setErrors(newErrors);
    }
  };

  const handleNewLogin = (username: string, password: string) => {
    setIsLoading(true);
    axios
      .post(
        "https://freeapi-app-production-dfcc.up.railway.app/api/v1/users/login",
        {
          username: username,
          password: password,
        },
      )
      .then((res) => {
        console.log(res);
        if (res.data.message === "User logged in successfully") {
          const response = res.data.data;
          setToken(response.accessToken);
        }
      })
      .then(() => {
        getUser();
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setErrors({
          username: "",
          password: "",
          message: error.response.data.message,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getUser = () => {
    axios
      .get(
        "https://freeapi-app-production-dfcc.up.railway.app/api/v1/users/current-user",
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      )
      .then((res) => {
        setCredentials(res.data);
      });
  };

  return (
    <LoginSignUpFormWrapper
      title="Welcome back!"
      subTitle="Please, login to your accont"
    >
      {errors.message && <WarningBanner warningText={errors.message} />}
      <form onSubmit={handleSubmit} className="mt-6 grid space-y-5">
        <Input
          labelText="Username"
          id="username"
          type="text"
          value={username}
          onChange={setUserName}
          placeholder="Enter your username"
          disabled={isLoading}
        />
        {errors.username && (
          <p className="text-sm text-red-500">{errors.username}</p>
        )}
        <Input
          labelText="Password"
          value={password}
          onChange={setPassword}
          id="password"
          type="password"
          placeholder="Password"
          disabled={isLoading}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password}</p>
        )}

        <div className="flex items-center justify-between">
          <label
            htmlFor="checkbox"
            className="flex items-center space-x-2 text-sm font-medium text-black-100"
          >
            <input id="checkbox" type="checkbox" />
            <span>Remember me</span>
          </label>
          <div className="cursor-pointer text-sm font-medium text-primary-700">
            {/* <Link to="/forget-password">Forget me?</Link> */}Forget me?
          </div>
        </div>
        <Button
          type="submit"
          variant="primary"
          size="medium"
          buttonText="Login"
          isLoading={isLoading}
          disabled={isLoading}
        />
      </form>
      <div className="mt-4 flex space-x-2">
        <p className="text-grey-200">Don't have an account?</p>
        <Link to="/signup" className="text-primary-700">
          Signup.
        </Link>
      </div>
    </LoginSignUpFormWrapper>
  );
};

export default Login;
