import { LoginSignUpFormWrapper } from "../../../components";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
// import { Link } from "react-router-dom";
const Login = () => {
  return (
    <LoginSignUpFormWrapper
      title="Welcome back!"
      subTitle="Please, login to your accont"
    >
      <Input
        labelText="Email"
        id="email"
        type="email"
        placeholder="Enter your email"
      />
      <Input
        labelText="Password"
        id="password"
        type="password"
        placeholder="Password"
      />

      <div className="flex items-center justify-between">
        <label
          htmlFor="checkbox"
          className="text-black-100 flex items-center space-x-2 text-sm font-medium"
        >
          <Input id="checkbox" type="checkbox" />
          <span>Remember me</span>
        </label>

        <div className="text-primary-700 cursor-pointer text-sm font-medium">
          {/* <Link to="/forget-password">Forget me?</Link> */}Forget me?
        </div>
      </div>
      <Button
        type="submit"
        variant="primary"
        size="medium"
        buttonText="Login"
      />
    </LoginSignUpFormWrapper>
  );
};

export default Login;
