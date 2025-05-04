import React, { useState } from "react";
import { Plus } from "lucide-react";
import useCartActions from "../useCartActions";
import "../styles/LikeItem.css";

const LikeItem = ({ src, title, itemId, text, price, min = 1, max }) => {
  const [count, setCount] = useState(min);

  const handleClick = () => {
    if (count <= max) {
      const nextCount = count + 1;
      setCount(nextCount);
      addWithCheck({
        src,
        itemId,
        title,
        price,
        quantity: count,
        max,
      });
    }
  };

  const { addWithCheck } = useCartActions();
  return (
    <div className="like_item">
      <img src={src} alt={title} />
      <div className="item_card">
        <div className="card_title">{title}</div>
        <div className="card_content">{text}</div>
        <div className="like_item_bottom">
          <button className="plus_btn" onClick={handleClick}>
            <Plus className="plus-icon" />
          </button>
          <div className="card_price">${price}</div>
        </div>
      </div>
    </div>
  );
};

export default LikeItem;
