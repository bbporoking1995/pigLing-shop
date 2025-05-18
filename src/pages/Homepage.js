import { useMemo } from "react";
import { Link } from "react-router-dom";
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

const productData = [
  {
    src: pic.animal1,
    itemId: "animal01",
    title: "恐怖噩夢貓",
    text: "喵喵喵!!!喵!!!喵喵~~~秒(臭臉)",
    min: 1,
    max: 10,
    price: 99999,
  },
  {
    src: pic.animal2,
    itemId: "animal02",
    title: "5元松",
    text: "松如其名鼠。吱吱喳！吱喳！",
    min: 1,
    max: 10,
    price: 5,
  },
  {
    src: pic.animal3,
    itemId: "animal03",
    title: "粉紅貓頭鷹",
    text: "會飛的貓咪",
    min: 1,
    max: 10,
    price: 6666,
  },
  {
    src: pic.animal4,
    itemId: "animal04",
    title: "大金剛",
    text: "面惡心善幫你抓背",
    min: 1,
    max: 10,
    price: 1111,
  },
  {
    src: pic.animal5,
    itemId: "animal05",
    title: "梅花梅花鹿",
    text: "鹿鹿要去哪一路",
    min: 1,
    max: 10,
    price: 500,
  },
  {
    src: pic.animal6,
    itemId: "animal06",
    title: "水豚 (頭上無橘子)",
    text: "優惠您1元",
    min: 1,
    max: 10,
    price: 2999,
  },
  {
    src: pic.animal7,
    itemId: "animal07",
    title: "真。北極熊",
    text: "不是白化棕熊 已查證",
    min: 1,
    max: 10,
    price: 9999999,
  },
  {
    src: pic.animal8,
    itemId: "animal08",
    title: "狗狗弟弟",
    text: "卡比唯一認證的底迪",
    min: 1,
    max: 1,
    price: 5200,
  },
  {
    src: pic.animal10,
    itemId: "animal10",
    title: "正港棕熊",
    text: "這次是真的棕熊了，請勿養殖於寒帶",
    min: 1,
    max: 10,
    price: 7777,
  },
  {
    src: pic.animal11,
    itemId: "animal11",
    title: "實驗用小老鼠",
    text: "一切都是命...打脖子吧",
    min: 1,
    max: 10,
    price: 1000,
  },
  {
    src: pic.animal12,
    itemId: "animal12",
    title: "大熊貓",
    text: "小貓熊的遠房親戚，但根本不像？",
    min: 1,
    max: 10,
    price: 64,
  },
  {
    src: pic.animal13,
    itemId: "animal13",
    title: "獅子王",
    text: "冷知識：獅子一天至少有20小時在睡覺哦",
    min: 1,
    max: 10,
    price: 819,
  },
  {
    src: pic.animal14,
    itemId: "animal14",
    title: "飯店小水獺",
    text: "OwO：(倒著游泳看你)",
    min: 1,
    max: 10,
    price: 5100,
  },
  {
    src: pic.animal15,
    itemId: "animal15",
    title: "遠古恐龍",
    text: "恐嚨康啷康啷康~恐嚨康啷康啷康~",
    min: 1,
    max: 10,
    price: 150000000,
  },
  {
    src: pic.animal16,
    itemId: "animal16",
    title: "青青虎",
    text: "我不要吃肉啦!!!🥺",
    min: 1,
    max: 10,
    price: 1998,
  },
  {
    src: pic.animal17,
    itemId: "animal17",
    title: "披甲龍龜海棲版",
    text: "OK(吐泡泡)",
    min: 1,
    max: 10,
    price: 225,
  },
  {
    src: pic.animal18,
    itemId: "animal18",
    title: "小倉鼠",
    text: "矇矇每每丸小熊貓小哆哆妞虎麗麗戴戴太郎哈姆拉瑪老闆大眼鏡小細細咚咚",
    min: 1,
    max: 10,
    price: 79,
  },
  {
    src: pic.clothes1,
    itemId: "clothes01",
    title: "女性風衣外套",
    text: "時尚必備的秋裝大衣，是外套的經典款式。",
    min: 1,
    max: 10,
    price: 300000,
  },
  {
    src: pic.clothes2,
    itemId: "clothes02",
    title: "男性大衣外套",
    text: "穿上直接變身韓國歐巴，還不趕快入手!!!",
    min: 1,
    max: 10,
    price: 74146,
  },
  {
    src: pic.pant1,
    itemId: "pant01",
    title: "視覺+10kg的褲子",
    text: "棉花糖先略過",
    min: 1,
    max: 10,
    price: 9990,
  },
  {
    src: pic.pant2,
    itemId: "pant02",
    title: "直的要命褲子",
    text: "鳥仔腳首選",
    min: 1,
    max: 10,
    price: 15000,
  },
  {
    src: pic.pant3,
    itemId: "pant03",
    title: "很少人要買的褲子",
    text: "擁有獨特眼光",
    min: 1,
    max: 10,
    price: 150,
  },
  {
    src: pic.skirt1,
    itemId: "skirt01",
    title: "迷你百褶裙",
    text: "很像一串香蕉",
    min: 1,
    max: 10,
    price: 3000,
  },
  {
    src: pic.skirt2,
    itemId: "skirt02",
    title: "很多釦子的A字裙",
    text: "粉色台燈燈罩",
    min: 1,
    max: 10,
    price: 1500,
  },
  {
    src: pic.skirt3,
    itemId: "skirt03",
    title: "中規中矩深色長裙",
    text: "常用首選",
    min: 1,
    max: 10,
    price: 2990,
  },
  {
    src: pic.skirt4,
    itemId: "skirt04",
    title: "寬版蛋糕裙",
    text: "假裝101",
    min: 1,
    max: 10,
    price: 5000,
  },
  {
    src: pic.skirt5,
    itemId: "skirt05",
    title: "夢幻公主蛋糕裙",
    text: "假裝洗車刷",
    min: 1,
    max: 10,
    price: 600,
  },
  {
    src: pic.tshirt1,
    itemId: "tshirt01",
    title: "特價標籤的上衣",
    text: "買到賺到",
    min: 1,
    max: 10,
    price: 1,
  },
  {
    src: pic.tshirt2,
    itemId: "tshirt02",
    title: "乾淨整潔的上衣",
    text: "100%殺菌",
    min: 1,
    max: 10,
    price: 999,
  },
  {
    src: pic.tshirt3,
    itemId: "tshirt03",
    title: "假裝很新的上衣",
    text: "二手的所以需要假裝",
    min: 1,
    max: 10,
    price: 50,
  },
  {
    src: pic.tshirt4,
    itemId: "tshirt04",
    title: "黑的發亮的上衣",
    text: "黑黑黑黑黑黑黑",
    min: 1,
    max: 10,
    price: 550,
  },
  {
    src: pic.game1,
    itemId: "game01",
    title: "NDS",
    text: "雙螢幕始祖?",
    min: 1,
    max: 10,
    price: 2000,
  },
  {
    src: pic.game2,
    itemId: "game02",
    title: "電腦螢幕mix主機",
    text: "最省空間就是你，只要有電就能玩",
    min: 1,
    max: 10,
    price: 555555,
  },
  {
    src: pic.game3,
    itemId: "game03",
    title: "安份守己XVI 1TB",
    text: "(已加關稅版)你用iPhone手機嗎?我安份守己",
    min: 1,
    max: 10,
    price: 77748,
  },
  {
    src: pic.game4,
    itemId: "game04",
    title: "夜市彈珠台",
    text: "獎品不是銘謝惠顧，就是化學太空泡泡。",
    min: 1,
    max: 10,
    price: 10,
  },
  {
    src: pic.game5,
    itemId: "game05",
    title: "湯姆熊必玩遊戲",
    text: "除了練手速、反應之外，還能順便練腹肌XD",
    min: 1,
    max: 10,
    price: 25,
  },
  {
    src: pic.game6,
    itemId: "game06",
    title: "FALL GUYS",
    text: "嘿嘿嘿拉你~欸欸欸不要在那邊拉啦!!!!S撞場仔",
    min: 1,
    max: 10,
    price: 199,
  },
  {
    src: pic.game7,
    itemId: "game07",
    title: "索尼是你嗎?",
    text: "不用車的競速遊戲",
    min: 1,
    max: 10,
    price: 3000,
  },
  {
    src: pic.game8,
    itemId: "game08",
    title: "Playstaion 12345",
    text: "黑黑黑黑白",
    min: 1,
    max: 10,
    price: 15580,
  },
  {
    src: pic.game9,
    itemId: "game09",
    title: "Chess game",
    text: "又稱國際象棋",
    min: 1,
    max: 10,
    price: 600,
  },
  {
    src: pic.accessory1,
    itemId: "accessory01",
    title: "彩色棒球帽",
    text: "防曬首選",
    min: 1,
    max: 10,
    price: 690,
  },
  {
    src: pic.accessory2,
    itemId: "accessory02",
    title: "漂亮的耳環",
    text: "異國風味好夥伴",
    min: 1,
    max: 10,
    price: 1200,
  },
  {
    src: pic.accessory3,
    itemId: "accessory03",
    title: "求婚戒指",
    text: "閃瞎大家雙眸",
    min: 1,
    max: 10,
    price: 2000000,
  },
  {
    src: pic.accessory4,
    itemId: "accessory04",
    title: "沙灘墨鏡",
    text: "給酷!!!踹昏AAAAA",
    min: 1,
    max: 10,
    price: 3150,
  },
  {
    src: pic.accessory5,
    itemId: "accessory05",
    title: "這是什麼?手套嗎",
    text: "點線面手套還是警示燈???O1O1O1O1O組成的手錶",
    min: 1,
    max: 10,
    price: 300,
  },
  {
    src: pic.accessory6,
    itemId: "accessory06",
    title: "線條手錶",
    text: "點線面組成的手錶",
    min: 1,
    max: 10,
    price: 890,
  },
  {
    src: pic.accessory7,
    itemId: "accessory07",
    title: "硬殼皮包",
    text: "上班族買起來",
    min: 1,
    max: 10,
    price: 5990,
  },
  {
    src: pic.accessory8,
    itemId: "accessory08",
    title: "S型皮帶",
    text: "腰圍50吋請選別款",
    min: 1,
    max: 10,
    price: 390,
  },
  {
    src: pic.accessory9,
    itemId: "accessory09",
    title: "高級訂製珠寶項鍊",
    text: "華麗登場",
    min: 1,
    max: 10,
    price: 1500000,
  },
  {
    src: pic.accessory10,
    itemId: "accessory10",
    title: "貓咪肉球手套",
    text: "是用人工皮請放心",
    min: 1,
    max: 10,
    price: 10000,
  },
];

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
  const recommended = useMemo(() => {
    const shuffled = [...productData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 8);
  }, []);

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
              <LikeItem key={i.itemId} {...i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
