import React from "react";
import "./Forget.css";
import { RiLock2Fill } from "react-icons/ri";

const Forget = () => {
  return (
    <div>
    <div className="form-container">
      <form className="form" >
        <h2>Forget Password</h2>
        <div className="form-control">
          <input
            type="password"
            
            placeholder="Newpassword"
            
          />
           <RiLock2Fill className="reg-logo" />

        
        </div>
        <div className="form-control">
          <input
            type="password"
           
            placeholder="reenter password"
          />
            <RiLock2Fill className="reg-logo" />

         
        </div>
        <button type="submit" className="reg-btn">
          Login
        </button>
        

      </form>
    </div>
  </div>
);
};

export default Forget;
