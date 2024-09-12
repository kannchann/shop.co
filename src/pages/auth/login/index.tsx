import {LoginSignUpFormWrapper} from "../../../components"
import Input from "../../../components/ui/Input"

const Login = () => {
  return (
    <LoginSignUpFormWrapper title="Welcome back!" subTitle="Please, login to your accont">
        <div>
        <label htmlFor="email" className="font-bold text-primary text-base">Email: </label>
        <Input id="email" type="email" placeholder="Enter your email" />
        </div>

        <div>
          <label htmlFor="password" className="font-bold text-primary text-base">Password:
          <Input id="password" type="password" placeholder="********" />
          </label>
        </div>

        <div>
          <div>
          <Input id="checkbox" type="checkbox" placeholder="" />
          <label htmlFor="checkbox" className="font-bold text-primary text-base">Remember me: </label>
          </div>
            
            

        </div>
    </LoginSignUpFormWrapper>
  )
}

export default Login