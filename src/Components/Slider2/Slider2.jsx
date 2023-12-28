import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Card2 from "../ProductCard/Card2/Card2";

export default function Slider2() {
  return (
    <section className="lg:py-10">
      <div className="container">
        <h2 className="text-2xl font-medium text-primary">Products Slider 2</h2>

        <div className="md:flex gap-16 items-center">
          <div className="w-full md:w-1/2 flex items-center">
            <img
              src="/images/banner.jpg"
              alt=""
              className="h-40 md:h-60 rounded w-full"
            />
          </div>

          <div className="w-full md:w-1/2 relative mt-10 md:mt-10">
            <div className="absolute w-full top-1">
              <div className="flex justify-between items-center border-b-2 pb-2">
                <h2 className="relative text-2xl font-semibold uppercase text-neutral">
                  Best Sellers
                  <div className="absolute -bottom-2.5 w-full h-1 bg-primary rounded"></div>
                </h2>
              </div>
            </div>

            <div>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                modules={[Pagination]}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                className="pt-16"
              >
                <SwiperSlide>
                  <Card2 />
                  <Card2 />
                  <Card2 />
                </SwiperSlide>
                <SwiperSlide>
                  <Card2 />
                  <Card2 />
                  <Card2 />
                </SwiperSlide>
                <SwiperSlide>
                  <Card2 />
                  <Card2 />
                  <Card2 />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
