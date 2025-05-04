import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./components/Footer";
import * as pic from "./pic";
import CartIcon from "./components/CartIcon";
import { AuthContext } from "./AuthContext";
import { LogOut, UserRoundCheck, User, Cat } from "lucide-react";

const Layout = () => {
  const { user, logout, isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <div className="topside">
        <div className="logo">
          <Link to="/">
            <img src={pic.pigLingLogo} alt="Logo" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="item">
              <Cat />
            </Link>
          </li>
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
                <Link to="/login">
                  <User className="account_icon" />
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link to="/cart">
              <CartIcon />
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
