import React from "react";
import Product from "../components/Product";
import Sidebar from "../components/Sidebar";
import * as pic from "../pic";
import "../styles/AnimalPage.css";

const ClothesPage = () => {
  const productData = [
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
  ];
  return (
    <div className="page">
      <div className="page_content">
        <div className="side_bar">
          <Sidebar />
        </div>
        <div>
          <div className="topside_text">
            <p>服飾 Clothes</p>
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

export default ClothesPage;
