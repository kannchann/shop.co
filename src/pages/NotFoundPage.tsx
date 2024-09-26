import { notFound } from "../assets";
import Button from "../components/ui/Button";
import useGoBack from "../hooks/useGoBack";

const NotFoundPage = () => {
  const goBack = useGoBack();
  return (
    <div className="container flex w-full items-center justify-between pt-10">
      <div className="flex flex-col gap-4">
        <h1 className="font-satoshiBold text-5xl md:text-9xl">404</h1>
        <p className="font-satoshi text-base md:text-xl lg:text-3xl">
          OOPS. Page not found
        </p>
        <Button
          variant="primary"
          size="medium"
          buttonText="Go Back"
          onClick={goBack}
        />
      </div>
      <div className="w-2/3">
        <img src={notFound} alt="" className="w-full object-contain" />
      </div>
    </div>
  );
};

export default NotFoundPage;
