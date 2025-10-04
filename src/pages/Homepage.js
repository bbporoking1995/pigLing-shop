import { useMemo } from "react";
import { Link } from "react-router-dom";
import UseGoogleSheets from "../components/UseGoogleSheets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
// import Carousel from "../components/Carousel";
import ItemLogo from "../components/ItemLogo";
import LikeItem from "../components/LikeItem";
import IntroVideo from "../components/IntroVideo";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import * as pic from "../pic";
import "../styles/HomePage.css";
import { LoadingMouse } from "../components/LoadingMouse";

const category = [
  {
    src: pic.animal8,
    text: "溫和動物",
    link: "/item?filter=animalGood",
  },
  {
    src: pic.animal18,
    text: "凶猛動物",
    link: "/item?filter=animalBad",
  },
  {
    src: pic.tshirt1,
    text: "上半身",
    link: "/item?filter=top",
  },
  {
    src: pic.pant1,
    text: "下半身",
    link: "/item?filter=bottom",
  },
  { src: pic.game7, text: "遊戲", link: "/item?filter=game" },
  {
    src: pic.accessory10,
    text: "飾品",
    link: "/item?filter=accessory",
  },
  {
    src: pic.goldenApple,
    text: "金蘋果",
    link: "/item",
  },
];

const Homepage = () => {
  const { data, loading } = UseGoogleSheets(
    "1YedVL1LdSOLlm1DDmJkqVhCHCddB7Gy15n0w0r8IDN4"
  );

  const recommended = useMemo(() => {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 8);
  }, [data]);

  if (loading) {
    return (
      <div>
        <LoadingMouse />
      </div>
    );
  }
  return (
    <div>
      <div className="homepage_container">
        <div className="slide">
          {/* <Carousel /> */}
          <IntroVideo />
        </div>
        <h3 className="product_type_title">商品分類</h3>
        <div className="sell_item">
          <Swiper
            modules={[Autoplay, FreeMode]}
            loop
            spaceBetween={5}
            freeMode={{
              enabled: true,
              momemtum: false,
            }}
            speed={1000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: { slidesPerView: 2.2 },
              480: { slidesPerView: 2.8 },
              640: { slidesPerView: 3.2 },
              1024: { slidesPerView: 5 },
            }}
          >
            {category.map((i, index) => (
              <SwiperSlide key={index}>
                <Link to={i.link}>
                  <ItemLogo src={i.src} text={i.text} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hot_item">
          <h3 className="hot_item_title">你可能會喜歡</h3>
          <div className="you_may_like_item">
            {recommended.map((i) => (
              <LikeItem key={i.itemId} {...i} src={pic[i.src]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
