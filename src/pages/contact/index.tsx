import { useState } from "react";
import { contact } from "../../assets";
import Input from "../../components/ui/Input";
import SubHeading from "../../components/ui/SubHeading";

type Props = {};

const Contact = (props: Props) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="bg-contact bg-primary-300 bg-right bg-no-repeat">
      <div className="container">
        <div className="space-y-5 py-20">
          <h1 className="font-satoshiBold text-5xl">Get in Touch</h1>
          <p className="text-xl">
            Want to get in touch? We'd love to hear from you
          </p>
          <form action="">
            <div className="flex gap-2">
              <Input
                id="fName"
                type="text"
                value={fName}
                onChange={setFName}
                placeholder="First Name"
              />
              <Input
                id="lName"
                type="text"
                value={lName}
                onChange={setLName}
                placeholder="Last Name"
              />
            </div>
            <div className="flex gap-2">
              <Input
                id="email"
                type="email"
                value={email}
                onChange={setEmail}
                placeholder="Email"
              />
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={setPhone}
                placeholder="phone no"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
