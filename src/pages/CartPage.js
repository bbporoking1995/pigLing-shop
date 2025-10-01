import { useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import { AuthContext } from "../AuthContext";
import { Minus, Plus, CircleDollarSign, UserRoundSearch } from "lucide-react";
import { toast } from "react-toastify";
import * as pic from "../pic";
import "../styles/CartPage.css";

function Copyable({ children, value = children }) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast.success(`已複製 Email`);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      toast.error("操作失敗！");
    }
  };
  return (
    <span
      onClick={handleClick}
      className={`copyable ${copied ? "copied" : ""}`}
    >
      {children}
    </span>
  );
}

const CartPage = ({ min = 1 }) => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  const { isLoggedIn } = useContext(AuthContext);

  const handlePayment = localStorage.setItem(
    "purchasedItems",
    JSON.stringify(cart)
  );

  const ExternaLink = ({ href, children, ...rest }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );

  if (!isLoggedIn) {
    return (
      <div className="unlogin_cart">
        <div className="plz_login">
          <p>🚫 請先登入才能查看購物車喔！</p>
          <Link to="/login">
            <button>前往登入</button>
          </Link>
        </div>
      </div>
    );
  }
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      {cart.length === 0 ? (
        <div className="empty_cart">
          <p className="pig_text">
            豬布林提醒：
            <br />
            購物車是空的唷
          </p>
          <div className="pig_contnent">
            <img src={pic.bg009} alt="pig" />
          </div>
        </div>
      ) : (
        <div className="normal_cart">
          <h3>購物車 Cart</h3>
          <div className="cart_content">
            <table className="cart_table">
              <thead>
                <tr>
                  <th>商品種類</th>
                  <th>數量</th>
                  <th>小計</th>
                  <th>移除商品</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((i) => (
                  <tr key={i.itemId}>
                    <td className="cart_item_info">
                      <img
                        src={i.src}
                        alt={i.title}
                        className="cart_item_img"
                      />
                      <div>
                        <strong>{i.title} </strong>
                        <p className="cart_price">${i.price}</p>
                      </div>
                    </td>
                    <td className="cart_quantity">
                      <div className="cart_quantity_btn">
                        <button
                          onClick={() =>
                            i.quantity <= min
                              ? removeFromCart(i.itemId)
                              : updateQuantity(i.itemId, i.quantity - 1)
                          }
                        >
                          <Minus />
                        </button>
                        <div>{i.quantity}</div>
                        <button
                          onClick={() =>
                            i.quantity < i.max &&
                            updateQuantity(i.itemId, i.quantity + 1)
                          }
                          disabled={i.quantity >= i.max}
                        >
                          <Plus />
                        </button>
                      </div>
                    </td>
                    <td>${i.quantity * i.price}</td>
                    <td>
                      <button
                        className="cart_delete_btn"
                        onClick={() => removeFromCart(i.itemId)}
                      >
                        刪除
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <div className="normal_cart_right_side">
                <p className="price_text">
                  <strong>總金額：</strong>${totalPrice}
                </p>
                <Link to="/finish">
                  <button className="finish_btn" onClick={handlePayment}>
                    <CircleDollarSign />
                    立即結帳
                  </button>
                </Link>
                <p className="cart_note">
                  感謝您於豬布林商城消費！
                  <br />
                  如果對網頁有興趣的話，可以來信Email：
                  <Copyable>luluhsu.work@gmail.com</Copyable>
                  <br />
                  更多作者介紹與作品可以到個人簡歷觀看唷！
                </p>
                <ExternaLink
                  className="link"
                  href="https://bbporoking1995.github.io/portfolio/portfolio.html"
                >
                  <button className="goto_portfolio">
                    <UserRoundSearch /> 前往更多作品
                  </button>
                </ExternaLink>
              </div>
            </div>
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default CartPage;
