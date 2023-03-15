import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-container-content1">
          <div className="footer-container-content1-ftmenu">
            <button>HOME</button>
            <button>ABOUT</button>
            <button>WORK</button>
            <button>BLOG</button>
            <button>CONTACT</button>
          </div>
          <h1>IMRAN AHMAD</h1>
        </div>
        <div className="footer-container-content2">
          <p>copyright by Louna Skylander 2022</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
