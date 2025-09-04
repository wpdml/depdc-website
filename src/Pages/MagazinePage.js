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
            <img
              src={x}
              alt="stamp"
              className="magazine-sticker"
              loading="eager"
            />
            <div className="coming-text">First issue out now!</div>
          </div>
        </div>
      </div>
      <div className="magazine-flip">
        <div className="first-issue">THE AMARANTH MAGAZINE · Summer 2025 Vol. 1, Issue 1</div>
        <iframe
          src="https://online.fliphtml5.com/qmvzu/drgb/#p=1"
          width="100%"
          height="100%"
          style={{ border: "none" }}
          allowFullScreen
          title="Flipbook Magazine"
        ></iframe>
      </div>
      <div className="issue-soon">NEXT ISSUE COMING SOON!</div>
    </div>
  );
};

export default MagazinePage;
