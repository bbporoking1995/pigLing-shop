import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import useCartActions from "../useCartActions";
import "../styles/Product.css";

const Product = ({ src, itemId, title, text, price, min = 1, max }) => {
  const [count, setCount] = useState(min);
  const increment = () => {
    if (count <= max) setCount((num) => num + 1);
  };
  const decrement = () => {
    if (count >= min) setCount((num) => num - 1);
  };

  const { addWithCheck } = useCartActions();

  return (
    <div>
      <div className="product_container">
        <div className="picture">
          <img src={src} alt={title} />
        </div>
        <div className="content">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        <div className="bottom">
          <div className="price">${price}</div>
          <div className="btn">
            <button onClick={decrement} disabled={count <= min}>
              -
            </button>
            <span>{count}</span>
            <button onClick={increment} disabled={count >= max}>
              +
            </button>
          </div>
        </div>
        <button
          className="cart"
          onClick={() =>
            addWithCheck({
              src,
              itemId,
              title,
              price,
              quantity: count,
              max,
              min,
            })
          }
        >
          <ShoppingCart />
          放入購物車
        </button>
      </div>
    </div>
  );
};

export default Product;
