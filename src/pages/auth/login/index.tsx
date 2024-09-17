import { Link } from "react-router-dom";
import { LoginSignUpFormWrapper } from "../../../components";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import { useState } from "react";
// import axios from "axios";

// import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    credentials: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setErrors({ email: "", password: "", credentials: "" });

    let isValid = true;
    const newErrors = { email: "", password: "", credentials: "" };

    if (!email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required.";
      isValid = false;
    }

    const correctEmail = "test@example.com"; // Replace with real check
    const correctPassword = "password123";

    if (isValid) {
      if (email !== correctEmail || password !== correctPassword) {
        newErrors.credentials = "Credentials do not match.";
        isValid = false;
      }
    }

    if (isValid) {
      console.log("Login successful:", { email, password, rememberMe });
      // Proceed with login logic here (e.g., redirect or store auth token)
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <LoginSignUpFormWrapper
      title="Welcome back!"
      subTitle="Please, login to your accont"
    >
      <form onSubmit={handleSubmit} className="mt-6 grid space-y-5">
        <Input
          labelText="Email"
          id="email"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="Enter your email"
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        <Input
          labelText="Password"
          value={password}
          onChange={setPassword}
          id="password"
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password}</p>
        )}
        {errors.credentials && (
          <p className="text-sm text-red-500">{errors.credentials}</p>
        )}

        <div className="flex items-center justify-between">
          <label
            htmlFor="checkbox"
            className="flex items-center space-x-2 text-sm font-medium text-black-100"
          >
            <input
              id="checkbox"
              type="checkbox"
              checked={rememberMe}
              onChange={(checked) => setRememberMe(!checked)}
            />
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
