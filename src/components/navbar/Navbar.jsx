import React from "react";
import "./Navbar.scss";
import { Line } from "../../assets";
import { GrLinkedinOption } from "react-icons/gr";
import { CiBasketball } from "react-icons/ci";
import { FaGithubAlt, FaInstagramSquare, FaFigma } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="nav-container-content">
          <button>HOME</button>
          <button>ABOUT</button>
          <button>WORK</button>
          <button>BLOG</button>
          <button>CONTACT</button>
        </div>
      </div>
      <div className="subheader-container">
        <div className="subheader-container-content-one">
          <GrLinkedinOption className="in" />
          <FaGithubAlt className="git" />
          <FaFigma className="figma" />
          <FaInstagramSquare className="insta" />
          <CiBasketball className="ball" />
          {/* <img src={Line} alt="Line" /> */}
          <hr />
          <p>SCROLLDOWN</p>
        </div>
        <div className="subheader-container-content-two">
          <div className="subheader-container-content-two-cntnt">
            <div className="subheader-container-content-two-cntnt-pfImg"></div>
            <h1>Imran Ahmad</h1>
            <p>I am a Web Designer |</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
