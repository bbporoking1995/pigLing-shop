import React from "react";
import Product from "../components/Product";
import Sidebar from "../components/Sidebar";
import * as pic from "../pic";
import "../styles/AnimalPage.css";

const GamePage = () => {
  const productData = [
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
      title: "音速小子",
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
  ];
  return (
    <div className="page">
      <div className="page_content">
        <div className="side_bar">
          <Sidebar />
        </div>
        <div>
          <div className="topside_text">
            <p>遊戲 Game</p>
            <p>{productData.length}件商品</p>
          </div>
          <div className="page_container">
            {productData.map((i) => (
              <Product key={i.itemId} {...i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
