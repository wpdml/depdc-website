import React from "react";
import "./MagazinePage.css";
import x from "./x.jpg";

const MagazinePage = () => {
  return (
    <div className="body-box">
      <div className="magazine">
        <div className="magazine-box">
          <div className="page left-page">
            <div className="mag-title">AMARANTH MAGAZINE</div>
            <div className="mag-sub">A space for blooming voices</div>
          </div>
          <div className="page right-page">
            <img src={x} alt="stamp" className="magazine-sticker" loading="eager"/>
            <div className="coming-text">COMING SOON</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazinePage;
