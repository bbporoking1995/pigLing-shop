import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { BaggageClaim } from "lucide-react";
import "../styles/CartIcon.css";

const CartIcon = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <div className="cart_icon">
      <BaggageClaim />
      <span className="cart_count">{cartCount >= 100 ? `99+` : cartCount}</span>
    </div>
  );
};

export default CartIcon;
