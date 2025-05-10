import React, { createContext, useEffect, useState, useCallback } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  //設置購物車
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("my-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("my-cart", JSON.stringify(cart));
  }, [cart]);

  //設置購物車數量
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  //加入購物車
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.itemId === product.itemId);

      if (existing) {
        return prev.map((i) =>
          i.itemId === product.itemId
            ? { ...i, quantity: i.quantity + product.quantity }
            : i
        );
      } else {
        return [...prev, product];
      }
    });
  };

  //更新購物車數量
  const updateQuantity = (itemId, newQuantity) => {
    setCart((prev) =>
      prev.map((i) =>
        i.itemId === itemId ? { ...i, quantity: newQuantity } : i
      )
    );
  };

  //逐項清除
  const removeFromCart = (itemId) => {
    setCart((prev) => prev.filter((i) => i.itemId !== itemId));
  };

  //清空購物車
  const clearCart = useCallback(() => {
    setCart([]);
    localStorage.removeItem("cart");
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
