import React from "react";
import "./AboutusPage.css";

const AboutusPage = () => {
  return (
    <div className="about-box">
      <div className="intro-box">
        <div className="intro-img">img</div>
        <div className="intro-texts">
          <p>The Ban Mai Roy Project</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="contact-box">
        <div className="contact-left">
          <p>Contact us!</p>
          <p>Please fill out the form below to send us an email.</p>
          <p>E-mail:</p>
          <p>jaitothanida@gmail.com</p>
          <p>Instagram:</p>
          <p>@banmairoy</p>
        </div>
        <div className="contact-right">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AboutusPage;
