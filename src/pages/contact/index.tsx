import { useState } from "react";
import Input from "../../components/ui/Input";
import SubHeading from "../../components/ui/SubHeading";
import Map from "../../components/Map";
import Button from "../../components/ui/Button";

type Props = {};

const Contact = (props: Props) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <div className="bg-primary-300 bg-right bg-no-repeat md:bg-contact">
        <div className="container">
          <div className="space-y-5 py-20">
            <h1 className="font-satoshiBold text-5xl">Get in Touch</h1>
            <p className="text-xl">
              Want to get in touch? We'd love to hear from you
            </p>
            <form action="" className="space-y-3 md:w-1/2">
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
              <Button buttonText="Submit" />
            </form>
          </div>
        </div>
      </div>
      <div className="container flex flex-wrap gap-10 pt-9 md:gap-20">
        <Map />
        <div className="flex flex-col justify-center space-y-2">
          <h2 className="font-satoshiBold text-4xl tracking-wider">
            Durbar Marg
          </h2>
          <SubHeading headingText="Address" />
          <p>Carrera 11 #79-35</p>
          <p>5th Floor</p>
          <p>Bogotá, Colombia</p>
          <p>111321</p>
          <SubHeading headingText="Phone No" />
          <p>+977 9823123543</p>
          <p>+977 9841987234</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
