import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";
import { RiLock2Fill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const navigate = useNavigate();
  const [retypepassword, setRetypePassword] = useState("");

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (!value.match(/[^a-zA-Z ]/)) {
      setName(value);
    }
  };
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (!value.match(/[^0-9 ]/) && value.replace(/\D/g, "").length <= 10) {
      setPhonenumber(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== retypepassword) {
      alert("Passwords do not match");
    } else if (!name || !email || !password) {
      alert("Please fill in all details.");
      return;
    } else {
      axios
        .post("http://localhost:3001/register", { name, email, password })
        .then((result) => {
          console.log(result);
          alert("Account created successfully");
          navigate("/app");
        });
    }
  };

  return (
    <div>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div className="form-control">
            {/* <input
              placeholder="Fullname"
              type="text"
              required
              pattern="[A-Za-z ]+"
              title="Name must contain letters only."
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            /> */}
            <input
              placeholder="Fullname"
              type="text"
              required
              pattern="[A-Za-z ]+"
              title="Name must contain letters only."
              onChange={handleNameChange}
              // onChange={(e) => {
              //   setName(e.target.value);
              // }}
              value={name}
            />
            <FaUser className="reg-logo" />
          </div>
          <div className="form-control">
            <input
              placeholder="Email Id"
              type="email"
              required
              pattern="[a-zA-Z0-9]{3,20}@[a-zA-Z0-9]{3,20}\.[a-zA-Z0-9]{2,20}"
              title="Enter a valid email."
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <FiAtSign className="reg-logo" />
          </div>
          <div className="form-control">
            <input
              placeholder="Phone no"
              type="tel"
              required
              pattern="\d{10}"
              title="Phone number contains only 10 numbers only."
              onChange={handlePhoneChange}
              value={phonenumber}
            />
            <FaPhoneAlt className="reg-logo" />
          </div>
          {/* Password 1 */}
          <div className="form-control">
            <input
              placeholder="Password"
              type="password"
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}"
              title="Password must contain at least one number, one uppercase and lowercase letter, one special character, and be at least 8 characters long."
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <RiLock2Fill className="reg-logo" />
          </div>
          {/* Password 1 */}
          <div className="form-control">
            <input
              placeholder="Confirm Password"
              type="password"
              onChange={(e) => {
                setRetypePassword(e.target.value);
              }}
              value={retypepassword}
            />
            <RiLock2Fill className="reg-logo" />
          </div>

          <button type="submit" className="reg-btn">
            Register
          </button>
          <p className="regbtm-txt">
            <br></br>
            Already have an account?
            <Link to="/login" className="login-link">
              {" "}
              Login{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
