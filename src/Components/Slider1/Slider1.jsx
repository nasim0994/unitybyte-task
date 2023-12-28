import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Card1 from "../ProductCard/Card1/Card1";

export default function Slider1() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-2xl font-medium text-primary">Products Slider 1</h2>

        <div className="mt-5">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            modules={[Navigation]}
            // loop={true}
          >
            <SwiperSlide>
              <div>
                <div className="border-b pb-2">
                  <Card1 />
                </div>
                <div className="pt-2">
                  <Card1 />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="border-b pb-2">
                  <Card1 />
                </div>
                <div className="pt-2">
                  <Card1 />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="border-b pb-2">
                  <Card1 />
                </div>
                <div className="pt-2">
                  <Card1 />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
