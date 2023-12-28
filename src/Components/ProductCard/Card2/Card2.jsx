import { FaStar } from "react-icons/fa6";

export default function Card2() {
  return (
    <div className="w-full p-2 lg:p-4">
      <div className="flex gap-8 items-center">
        <div className="w-1/4">
          <img
            src="/images/products/headphone.png"
            alt=""
            className="sm:w-[80%] sm:h-[80%] mx-auto"
          />
        </div>

        <div className="w-3/4">
          <div className="flex gap-1 text-sm">
            <FaStar className="opacity-20" />
            <FaStar className="opacity-20" />
            <FaStar className="opacity-20" />
            <FaStar className="opacity-20" />
            <FaStar className="opacity-20" />
          </div>
          <h2 className="sm:text-lg font-semibold text-neutral my-2">
            HD Tabled With Alexa Hands....
          </h2>
          <div className="flex gap-3 items-end sm:text-[17px]">
            <p className="text-xl font-semibold text-primary/90">$600.00</p>
            <del className="text-neutral-content/80 font-medium">$50.00</del>
          </div>
        </div>
      </div>
    </div>
  );
}
