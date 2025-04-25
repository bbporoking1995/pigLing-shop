import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import ItemLogo from "../components/ItemLogo";
import Carousel from "../components/Carousel";
import * as pic from "../pic";
import "../styles/HomePage.css";

const Homepage = () => {
  const category = [
    { path: "/item/animal", pic: pic.controlYorself, text: "管好你自己" },
    { path: "/item/animal", pic: pic.goldenApple, text: "金蘋果" },
    { path: "/item/animal", pic: pic.pic_1, text: "圖1" },
  ];

  return (
    <div>
      <div className="homepage_container">
        <div className="slide">
          <Carousel />
        </div>
        <p>產品分類</p>
        <div className="sell_item">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={10}
            slidesPerView={3}
            autoplay={{ delay: 3000 }}
            navigation
          >
            {category.map((i, index) => (
              <SwiperSlide key={index}>
                <Link to={i.path}>
                  <ItemLogo src={i.pic} text={i.text} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hot_item">
          <p>你可能會喜歡</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
