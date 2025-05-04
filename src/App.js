import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Page404 from "./pages/Page404";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import ItemPage from "./pages/ItemPage";
import Cart from "./pages/CartPage";
import Finish from "./pages/FinishPage";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter basename="/pigLing-shop">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          <Route path="finish" element={<Finish />} />
          <Route path="item" element={<ItemPage />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
