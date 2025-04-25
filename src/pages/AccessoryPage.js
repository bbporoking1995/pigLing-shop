import React from "react";
import Sidebar from "../components/Sidebar";
import Product from "../components/Product";
import * as pic from "../pic";
import "../styles/AnimalPage.css";

const AccessoryPage = () => {
  const productData = [
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
  return (
    <div className="page">
      <div className="page_content">
        <div className="side_bar">
          <Sidebar />
        </div>
        <div>
          <div className="topside_text">
            <p>飾品 Accessory</p>
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

export default AccessoryPage;
