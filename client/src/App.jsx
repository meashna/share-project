import React from "react";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Forget from "./Forget/Forget";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/app" element={<Home />}></Route>
        <Route path="/forget" element={<Forget />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
