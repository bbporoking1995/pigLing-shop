import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { BaggageClaim } from "lucide-react";

const CartIcon = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <div className="cart_icon">
      <BaggageClaim />
      <span>：{cartCount}</span>
    </div>
  );
};

export default CartIcon;
