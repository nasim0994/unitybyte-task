import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { GoGitCompare } from "react-icons/go";
import { IoSearch } from "react-icons/io5";

export default function Card1() {
  return (
    <div className="w-full p-2 lg:p-4 product_card">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative h-full flex items-center">
          <img
            src="/images/products/boyam1.png"
            alt=""
            className="w-[75%] h-[85%] mx-auto"
          />

          {/*  */}
          <div className="icons absolute top-0 left-0 w-full h-full bg-neutral/30 flex justify-center items-center">
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-base-100 flex justify-center items-center hover:text-primary duration-200">
                <FaHeart />
              </button>
              <button className="w-10 h-10 rounded-full bg-base-100 flex justify-center items-center hover:text-primary duration-200">
                <GoGitCompare />
              </button>
              <button className="w-10 h-10 rounded-full bg-base-100 flex justify-center items-center hover:text-primary duration-200">
                <IoSearch />
              </button>
            </div>
          </div>

          {/* discount */}
          <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary text-base-100 flex justify-center items-center">
            <p className="text-xs">-50%</p>
          </div>
        </div>

        <div>
          <div className="flex gap-1 text-sm">
            <FaStar className="opacity-20" />
            <FaStar className="opacity-20" />
            <FaStar className="opacity-20" />
            <FaStar className="opacity-20" />
            <FaStar className="opacity-20" />
          </div>
          <h2 className="font-semibold text-neutral my-2">
            Lorem ipsum dolor sit amet....
          </h2>
          <div className="flex gap-3 items-end">
            <p className="text-xl font-semibold text-primary/90">$600.00</p>
            <del className="text-neutral-content/80 font-medium">$50.00</del>
          </div>
          <p className="text-neutral-content text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            asperiores aut amet rem totam.
          </p>

          <div className="mt-3">
            <button className="cart_btn px-4 py-1.5 rounded-full bg-gray-600 text-base-100 uppercase text-sm">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
