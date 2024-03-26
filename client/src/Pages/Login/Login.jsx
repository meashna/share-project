import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FiAtSign } from "react-icons/fi";
import { RiLock2Fill } from "react-icons/ri";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all details.");
      return;
    }
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/app");
        } else if (result.data === "Invalid password") {
          alert("The password you entered is incorrect.");
        } else if (result.data === "User not found") {
          alert("No user found with that email address.");
        }
      });
  };
  return (
    <div>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="form-control">
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              placeholder="Enter Email"
            />
            <FiAtSign className="reg-logo" />
          </div>
          <div className="form-control">
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              placeholder="Enter Password"
            />
            <RiLock2Fill className="reg-logo" />
          </div>
          <div className="rem-for">
            <div className="rem">
              <input type="checkbox" />
              <label className="rem-text"> Remember me</label>
            </div>
            <div className="for">
              <Link to="/forget" style={{ textDecoration: "none" }}>
                Forget Password
              </Link>
            </div>
          </div>
          <button type="submit" className="reg-btn">
            Login
          </button>
          <p className="regbtm-txt">
            <br></br>
            Don't have an account?
            <Link to="/register" className="login-link">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
