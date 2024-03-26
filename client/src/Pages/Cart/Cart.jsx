import React from "react";
import "./Cart.css";
import { IoHomeSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import { ImExit } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
// import sarah from "./about.jpg";
// import benjamin from "./bce.jpg";
// import navbg from "./navbg.jpg";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Cart = () => {
  return (
    <div>
      {" "}
      <div className="main-cont">
        <div className="right-nav">
          <div className="sidenav-icons">
            <div className="icon">
              {" "}
              <IoHomeSharp className="icon-active" />
            </div>
            <div className="icon">
              <FaCartShopping />
            </div>
            <div className="icon">
              {" "}
              <IoIosAddCircle />
            </div>
            <div className="icon">
              <ImExit />
            </div>
          </div>
        </div>
        <div className="left-main">
          <div className="top-nav">
            <div className="search">
              <div className="s-icon">
                <FaSearch />
              </div>
              <div className="s-input">
                <input
                  className="s-inputinside"
                  placeholder="Search here for your book"
                ></input>
              </div>
            </div>
            <div className="txt-img">
              <div className="topt">
                <div className="top-txt">Hello Sarah!</div>
              </div>
              <div className="topi">
                <div className="top-img">
                  <img src={sarah} className="pro-pic" />
                </div>
              </div>
            </div>
          </div>
          <div className="main-centerandleft">
            <div className="center">
              <div className="center-top">
                <div className="ct">
                  <div className="cttop">
                    <div className="cttoptext">Recommend</div>
                    <div className="ctsidetext">
                      <button className="home-btn">More</button>
                    </div>
                  </div>

                  <div className="ctbottom">
                    <div className="box1">
                      <img src={benjamin} className="book-reccom" />
                      <div className="book-details">
                        <div className="book-name">Basic Mechanical E..</div>
                        <div className="book-auther">Benjamin</div>
                      </div>
                    </div>

                    <div className="box1">
                      <img src={benjamin} className="book-reccom" />
                      <div className="book-details">
                        <div className="book-name">Basic Mechanical E..</div>
                        <div className="book-auther">Benjamin</div>
                      </div>
                    </div>

                    <div className="box1">
                      <img src={benjamin} className="book-reccom" />
                      <div className="book-details">
                        <div className="book-name">Basic Mechanical E..</div>
                        <div className="book-auther">Benjamin</div>
                      </div>
                    </div>

                    <div className="box1">
                      <img src={benjamin} className="book-reccom" />
                      <div className="book-details">
                        <div className="book-name">Basic Mechanical E..</div>
                        <div className="book-auther">Benjamin</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="center-bottom">
                {" "}
                <div className="ct">
                  <div className="cttop">
                    <div className="cttoptext">Recommend</div>
                    <div className="ctsidetext">
                      <button className="home-btn">More</button>
                    </div>
                  </div>

                  <div className="cntrbtm-catmain">
                    <div className="all">All</div>
                    <div className="txt-book">Text Book</div>
                    <div className="note-book">Note book</div>
                    <div className="study-mat">Study materials</div>
                    <div className="lab-mat">Lab Materails</div>
                  </div>

                  <div className="ctbottom">
                    <div className="box2">
                      <img src={benjamin} className="book-reccom" />
                      <div className="book-details">
                        <div className="book-name">Basic Mechanical E..</div>
                      </div>
                    </div>

                    <div className="box2">
                      <img src={benjamin} className="book-reccom" />
                      <div className="book-details">
                        <div className="book-name">Basic Mechanical E..</div>
                      </div>
                    </div>

                    <div className="box2">
                      <img src={benjamin} className="book-reccom" />
                      <div className="book-details">
                        <div className="book-name">Basic Mechanical E..</div>
                      </div>
                    </div>

                    <div className="box2">
                      <img src={benjamin} className="book-reccom" />
                      <div className="book-details">
                        <div className="book-name">Basic Mechanical E..</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="left-nav">
              <div className="ryt-book">
                <img src={benjamin} className="left-bookimg"></img>
              </div>
              <div className="ryt-txt">
                Basic Mechanical Engineering
                <p>J Benjamin</p>
              </div>
              <div className="ryt-star">
                <FaStar className="ryt-star" />
                <FaStar className="ryt-star" />
                <FaStar className="ryt-star" />
                <FaRegStar className="ryt-star" />
                <FaRegStar className="ryt-star" />
              </div>
              <div className="ryt-desp">
                "Basic Mechanical Engineering" by J. Benjamin is an essential
                reference for KTU students, perfectly aligned with their
                syllabus.
              </div>
              <div className="ryt-button">
                <div className="ctsidetext">
                  <button className="home-btn">More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
