import React from "react";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="body-box">
      <div class="home-box">
        <div class="top-box">
          <p>Empowerment.</p>
          <p>Education.</p>
          <p>Embrace.</p>
        </div>
        <div class="bottom-box">
          <div class="item-box-text">
            <div>
              Empowering stateless youth at risk to human trafficking in
              Northern Thailand through education, mentorship, and community
              connection. We aim to create safe spaces where young people can
              grow, express themselves, and build a sense of belonging
            </div>
            <button onClick={() => navigate('/aboutus')}>Learn more</button>
          </div>
          <div class="item-box">image</div>
          <div class="item-box">image</div>
          <div class="item-box">image</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
