import SubHeading from "./ui/SubHeading";
import { chevronRight, filter } from "../assets";
import ColorRadioButton from "./ui/ColorRadioButton";
import { useState } from "react";
import SizeRadioButton from "./ui/SizeRadioButton";
import Button from "./ui/Button";

type Props = {};

const categoryArray = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];

const colorArray = [
  "colorOne",
  "colorTwo",
  "colorThree",
  "colorFour",
  "colorFive",
  "colorSix",
  "colorSeven",
  "colorEight",
  "colorNine",
  "colorTen",
];

const sizeArray = [
  "XX-small",
  "X-small",
  "small",
  "medium",
  "large",
  "X-large",
  "XX-large",
  "3X-large",
  "4X-large",
];

const SideBar = (props: Props) => {
  const [selectedColor, setSelectedColor] = useState<string>("colorOne");
  const [selectedSize, setSelectedSize] = useState<string>("small");

  const [accordionState, setAccordionState] = useState({
    price: false,
    color: true,
    size: true,
    category: true,
  });

  const toggleAccordion = (section: keyof typeof accordionState) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <>
      <div className="hidden max-h-fit rounded-lg border border-primary-300 px-6 py-5 md:block">
        <div className="grid gap-3 divide-y">
          <div className="flex justify-between">
            <SubHeading headingText="Filters" />
            <figure>
              <img src={filter} alt="" />
            </figure>
          </div>

          <ul className="grid space-y-5 py-5">
            {categoryArray.map((category) => (
              <div className="flex justify-between text-base">
                <li>{category}</li>
                <img src={chevronRight} alt="" />
              </div>
            ))}
          </ul>

          <div className="py-5">
            <div
              className="flex items-center justify-between"
              onClick={() => toggleAccordion("price")}
            >
              <SubHeading headingText="Price" />
              <figure
                className={`${accordionState.price ? "rotate-90" : ""} transition-transform`}
              >
                <img src={chevronRight} alt="" />
              </figure>
            </div>
            {accordionState.price && <div>hi i am here</div>}
          </div>

          <div className="space-y-2 py-5">
            <div
              className="flex items-center justify-between"
              onClick={() => toggleAccordion("color")}
            >
              <SubHeading headingText="Color" />
              <figure
                className={`${accordionState.color ? "rotate-90" : ""} transition-transform`}
              >
                <img src={chevronRight} alt="" />
              </figure>
            </div>
            {accordionState.color && (
              <div className="flex flex-wrap justify-between gap-2">
                {colorArray.map((color, index) => (
                  <ColorRadioButton
                    key={index}
                    color={
                      color as
                        | "colorOne"
                        | "colorTwo"
                        | "colorThree"
                        | "colorFour"
                        | "colorFive"
                        | "colorSix"
                        | "colorSeven"
                        | "colorEight"
                        | "colorNine"
                        | "colorTen"
                    }
                    isSelected={selectedColor === color}
                    colorChanged={handleColorChange}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2 py-5">
            <div
              className="flex items-center justify-between"
              onClick={() => toggleAccordion("size")}
            >
              <SubHeading headingText="Size" />
              <figure
                className={`${accordionState.size ? "rotate-90" : ""} transition-transform`}
              >
                <img src={chevronRight} alt="" />
              </figure>
            </div>
            {accordionState.size && (
              <div className="flex flex-wrap gap-2">
                {sizeArray.map((size, index) => (
                  <SizeRadioButton
                    key={index}
                    size={size as "small" | "medium" | "large" | "X-large"}
                    index={index}
                    isSelected={selectedSize === size}
                    sizeChanged={handleSizeChange}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="py-5">
            <div
              className="flex items-center justify-between"
              onClick={() => toggleAccordion("category")}
            >
              <SubHeading headingText="Dress Style" />
              <figure
                className={`${accordionState.category ? "rotate-90" : ""} transition-transform`}
              >
                <img src={chevronRight} alt="" />
              </figure>
            </div>

            {accordionState.category && (
              <ul className="grid space-y-5 py-5">
                {categoryArray.map((category) => (
                  <div className="flex justify-between text-base">
                    <li>{category}</li>
                    <img src={chevronRight} alt="" />
                  </div>
                ))}
              </ul>
            )}
          </div>

          <Button buttonText="Apply Filter" />
        </div>
      </div>
    </>
  );
};

export default SideBar;
