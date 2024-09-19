import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LoginSignUpFormWrapper } from "../../../components";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // State for error messages
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    userName: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({ email: "", password: "", confirmPassword: "", userName: "" });

    // Basic validation checks
    let isValid = true;
    const newErrors = {
      email: "",
      password: "",
      confirmPassword: "",
      userName: "",
    };

    if (!userName) {
      newErrors.userName = "username is required.";
      isValid = false;
    }

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

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      isValid = false;
    }

    if (isValid) {
      console.log("Sign up submitted:", { userName, email, password });
      handleNewSignIn(userName, password, email);
    } else {
      setErrors(newErrors);
    }
  };

  const handleNewSignIn = (
    userName: string,
    password: string,
    email: string,
  ) => {
    console.log("Data being sent:", { email, password, username: userName });
    setIsLoading(true);
    axios
      .post(
        "https://freeapi-app-production-dfcc.up.railway.app/api/v1/users/register",
        {
          email: email,
          password: password,
          username: userName,
        },
      )
      .then((res) => {
        console.log(res);
        // if (res.data.message === "User logged in successfully") {

        // }
      });
  };

  return (
    <LoginSignUpFormWrapper
      title="Get started!"
      subTitle="Create your account now"
    >
      <form onSubmit={handleSubmit} className="mt-4 grid space-y-4">
        <Input
          labelText="Email"
          value={email}
          onChange={setEmail}
          id="email"
          type="email"
          placeholder="Enter your email"
        />

        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        <Input
          labelText="Username"
          id="username"
          value={userName}
          onChange={setUserName}
          type="text"
          placeholder="username"
        />
        {errors.userName && (
          <p className="text-sm text-red-500">{errors.userName}</p>
        )}
        <Input
          labelText="Password"
          value={password}
          onChange={setPassword}
          id="password"
          type="password"
          placeholder="*******"
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password}</p>
        )}

        <Input
          labelText="Confirm Password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          id="confirmPassword"
          type="password"
          placeholder="*******"
        />
        {errors.confirmPassword && (
          <p className="text-sm text-red-500">{errors.confirmPassword}</p>
        )}

        <Button
          type="submit"
          variant="primary"
          size="medium"
          buttonText="Sign up"
          isLoading={isLoading}
          disabled={isLoading}
        />
      </form>

      <div className="mt-4 flex space-x-2">
        <p className="text-grey-200">Already have an account?</p>
        <Link to="/login" className="text-primary-700">
          Sign in.
        </Link>
      </div>
    </LoginSignUpFormWrapper>
  );
};

export default SignUp;
