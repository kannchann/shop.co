import ProductList from "../../components/ProductList";
import CategoryList from "../../components/CategoryList";
import Button from "../../components/ui/Button";
import { heroBackgroundDesign, heroImage } from "../../assets";

const Home = () => {
  return (
    <>
      <div className="bg-primary-100">
        <div className="container space-y-9">
          <div className="items-center md:flex">
            <div className="grid w-full space-y-5 px-4 py-10 md:block md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl lg:leading-[64px]">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="text-black-100 opacity-60">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <Button buttonText="Shop Now" />
              <div className="flex gap-3 pt-5">
                <div>
                  <p className="font-satoshiBold text-2xl lg:text-4xl">200+</p>
                  <p className="text-xs opacity-60 lg:text-base">
                    International Brands
                  </p>
                </div>
                <div>
                  <p className="font-satoshiBold text-2xl lg:text-4xl">
                    20,00+
                  </p>
                  <p className="text-xs opacity-60 lg:text-base">
                    High Quality Products
                  </p>
                </div>
                <div>
                  <p className="font-satoshiBold text-2xl lg:text-4xl">
                    30,000+
                  </p>
                  <p className="text-xs opacity-60 lg:text-base">
                    Happy customers
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroBackgroundDesign}
                alt=""
                className="absolute left-10 top-[40%] min-w-[44px] max-w-[56px]"
              />
              <img src={heroImage} alt="" className="object-cover" />
              <img
                src={heroBackgroundDesign}
                alt=""
                className="absolute right-10 top-[10%] min-w-[76px] max-w-[104px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-20 w-full bg-black-700"></div>

      <div className="container space-y-9 py-9">
        <ProductList headingText="New Arrivals" />
        <ProductList headingText="Top Selling" />
        <CategoryList />
      </div>
    </>
  );
};

export default Home;
