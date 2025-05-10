import React, { useEffect, useContext, useState } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";
// import LineRaceChart from "../components/LineRaceChart";
import "../styles/FinishPage.css";

const FinishPage = () => {
  const { clearCart } = useContext(CartContext);
  const [purchasedItems, setPurchasedItems] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("purchasedItems");
    if (saved) {
      setPurchasedItems(JSON.parse(saved));
    }

    setTimeout(() => {
      clearCart();
      localStorage.removeItem("purchasedItems");
    }, 100);
  }, [clearCart]);
  console.log("買了啥好料", purchasedItems);

  return (
    <div>
      {purchasedItems.length > 0 ? (
        <div className="finish_page">
          <h2>結帳完成囉！</h2>
          <p className="finish_product_content">恭喜您購買了</p>
          <Link to="/">
            <button className="back_to_home">返回首頁</button>
          </Link>
          <div className="finish_product_list">
            {purchasedItems.map((i) => (
              <ul key={i.itemId}>
                <li>
                  <img src={i.src} alt="i.title" />
                  <p>{i.title} </p>
                </li>
              </ul>
            ))}
          </div>
        </div>
      ) : (
        <div className="empty_finish_page">
          <p>沒有購買的品項 😅</p>
        </div>
      )}
    </div>
  );
};

export default FinishPage;
