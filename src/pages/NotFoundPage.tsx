import { notFound } from "../assets";
import Button from "../components/ui/Button";
import useGoBack from "../hooks/useGoBack";

const NotFoundPage = () => {
  const goBack = useGoBack();
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col gap-4 mb-8 md:mb-0 text-center md:text-left">
        <h1 className="font-satoshiBold text-5xl md:text-7xl lg:text-9xl">404</h1>
        <p className="font-satoshi text-base md:text-xl lg:text-3xl mb-4">
          OOPS. Page not found
        </p>
        <div className="flex justify-center md:justify-start">
          <Button
            variant="primary"
            size="medium"
            buttonText="Go Back"
            onClick={goBack}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-2/3">
        <img src={notFound} alt="404 Not Found" className="w-full h-auto object-contain" />
      </div>
    </div>
  );
};

export default NotFoundPage;
