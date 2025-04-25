import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import * as pic from "../pic";
import "../styles/Carousel.css";

const Carousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const items = [pic.pic1, pic.pic2, pic.pic3];
  return (
    <div className="swiper_container">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {items.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index}`}
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
        ))}
        <div
          ref={prevRef}
          className="custom-swiper-button-prev animated-arrow-left "
        >
          ⬅️
        </div>
        <div
          ref={nextRef}
          className="custom-swiper-button-next animated-arrow-right"
        >
          ➡️
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
