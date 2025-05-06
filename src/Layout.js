import React, { useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./components/Footer";
import * as pic from "./pic";
import CartIcon from "./components/CartIcon";
import { AuthContext } from "./AuthContext";
import { LogOut, UserRoundCheck, User, PiggyBank, Menu, X } from "lucide-react";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const { user, logout, isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      <div className="topside">
        <div className="logo">
          <Link to="/">
            <img src={pic.pigLingLogo} alt="Logo" />
          </Link>
        </div>
        <button onClick={toggleMenu} className="hamburger">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        {menuOpen && (
          <div className="overlay" onClick={() => setMenuOpen(false)}></div>
        )}
        <ul className={menuOpen ? "nav open" : "nav"}>
          <li>
            {isLoggedIn ? (
              <div>
                <div className="logged_in">
                  <UserRoundCheck className="login_icon" />
                  <span>
                    {user.name}　
                    <button onClick={logout}>
                      <LogOut className="logout_icon" />
                    </button>
                  </span>
                </div>
              </div>
            ) : (
              <div className="unlogin">
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  <User className="account_icon" />
                  <p>會員登入</p>
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link to="item" onClick={() => setMenuOpen(false)}>
              <PiggyBank className="store_icon" />
              <p>大賣場</p>
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              <CartIcon />
              <p>購物車</p>
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
