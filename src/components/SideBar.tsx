import React, { useState, useEffect } from "react";
import SubHeading from "./ui/SubHeading";
import { chevronRight, filter } from "../assets";
import ColorRadioButton from "./ui/ColorRadioButton";
import SizeRadioButton from "./ui/SizeRadioButton";
import Button from "./ui/Button";
import PriceRangeSlider from "./ui/PriceRangeSlider";
import { Product } from "../@types/product";

type Props = {
  data: Product[];
  filterData: (filters: any) => void;
};

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

const SideBar: React.FC<Props> = ({ data, filterData }) => {
  const [selectedColor, setSelectedColor] = useState<string>("colorOne");
  const [selectedSize, setSelectedSize] = useState<string>("small");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 0]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const [accordionState, setAccordionState] = useState({
    price: true,
    color: false,
    size: false,
    category: false,
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

  const handlePriceChange = (newPriceRange: [number, number]) => {
    setPriceRange(newPriceRange);
  };

  useEffect(() => {
    if (data.length > 0) {
      const prices = data.map((product) => product.price);
      const min = Math.floor(Math.min(...prices));
      const max = Math.ceil(Math.max(...prices));
      setMinPrice(min);
      setMaxPrice(max);
      setPriceRange([min, max]);
    }
  }, [data]);

  const handleApplyFilter = () => {
    const filters = {
      color: selectedColor,
      size: selectedSize,
      priceRange: priceRange,
    };
    filterData(filters);
  };

  return (
    <>
      <div className="hidden max-h-fit min-w-min rounded-lg border border-primary-300 px-6 py-5 md:block">
        <div className="grid divide-y">
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
              className="flex cursor-pointer items-center justify-between"
              onClick={() => toggleAccordion("price")}
            >
              <SubHeading headingText="Price" />
              <figure
                className={`${accordionState.price ? "rotate-90" : ""} transition-transform`}
              >
                <img src={chevronRight} alt="" />
              </figure>
            </div>
            {accordionState.price && (
              <div className="mt-4">
                <PriceRangeSlider
                  min={minPrice}
                  max={maxPrice}
                  value={priceRange}
                  onChange={handlePriceChange}
                />
                <div className="mt-2 flex justify-between text-sm">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            )}
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
              <div className="flex flex-wrap gap-2">
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

          <Button buttonText="Apply Filter" onClick={handleApplyFilter} />
        </div>
      </div>
    </>
  );
};

export default SideBar;
