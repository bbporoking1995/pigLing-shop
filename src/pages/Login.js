import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { Apple, UserRound, KeyRound } from "lucide-react";
import { toast } from "react-toastify";
import "../styles/Login.css";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [userID, setUserID] = useState("");
  const [password, setPassward] = useState("");

  const handleLogin = () => {
    if (!userID.trim()) {
      toast.warning("請輸入帳號");
      return;
    } else if (!password.trim()) {
      toast.warning("請輸入密碼");
      return;
    }

    const user = {
      name: userID,
      password: password,
    };
    login(user);
    navigate("/cart");
  };

  return (
    <div>
      <div className="login_container">
        <div className="login_content">
          <h2>會員登入</h2>
          <div className="account">
            <UserRound />
            <input
              type="text"
              id="name"
              placeholder="請輸入使用者帳號"
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
              maxLength={8}
            />
          </div>
          <div className="password">
            <KeyRound />
            <input
              type="password"
              id="password"
              placeholder="請輸入密碼"
              value={password}
              onChange={(e) => setPassward(e.target.value)}
              maxLength={10}
            />
          </div>
          <button onClick={handleLogin}>
            <Apple />
            登入
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
