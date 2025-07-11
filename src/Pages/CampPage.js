import React from "react";
import "./CampPage.css";
import y4 from "./y4.jpg";
import y3 from "./y3.jpg";
import { Link } from "react-router-dom";

const CampPage = () => {
  return (
    <div className="body-box">
      <div className="article-section">
        <div className="note-box">
          <p>❀</p>
          <p>
            Our activity camp is focused on empowering marginalized youth at
            risk of human trafficking through a collaborative, cross-cultural
            exchange program that combines education, peer advocacy, and
            community-building initiatives.
          </p>
          <p>❀</p>
        </div>

        <div className="article-box left">
          <div className="image-placeholder">
            <img src={y4} alt="stamp" className="camp-img" loading="eager" />
          </div>
          <div className="article-text">
            <h2>2025 PYD activity camp</h2>
            <p>Read more about our first, most recent activity camp!</p>
            <p>
              We held an activity camp for students from the DEPDC Half-Day
              School at Panyaden International School (PYD), with the help of
              our amazing PYD student volunteers! The students took part in a
              range of activities that encouraged social connection, sparked
              curiosity, and most importantly, were lots of fun!
            </p>
            <Link to="/activities/article1" className="read-more">
              Read More ➜
            </Link>
          </div>
        </div>

        <div className="article-box right">
          <div className="image-placeholder">
            <img src={y3} alt="stamp" className="camp-img" loading="eager" />
          </div>
          <div className="article-text">
            <h2>Our vision for the activity camp</h2>
            <p>Read more about our first, most recent activity camp!</p>
            <p>
              This 3-day camp supports youth vulnerable to trafficking through
              cross-cultural exchange, peer connection, and creative activities
              that build trust, confidence, and community. We aim to sustain and
              grow this initiative to create lasting impact.
            </p>
            <Link to="/activities/article2" className="read-more">
              Read More ➜
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampPage;
