import { useContext } from "react";
import { CartContext } from "./CartContext";
import { toast } from "react-toastify";

const useCartActions = () => {
  const { cart, addToCart } = useContext(CartContext);

  const addWithCheck = (product, options = {}) => {
    const existing = cart.find((i) => i.itemId === product.itemId);
    const newQuantity = (existing?.quantity || 0) + product.quantity;

    if (newQuantity > product.max) {
      toast.warning(`『${product.title}』最多只能買 ${product.max} 個唷❗`);
      return;
    }
    addToCart(product);
    toast.success(`成功加入『${product.title}』${product.quantity} 個❗`);
  };
  return { addWithCheck };
};

export default useCartActions;
