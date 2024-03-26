import React from "react";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Forget from "./Pages/Forget/Forget";
import Cart from "./Pages/Cart/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/forget" element={<Forget />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
