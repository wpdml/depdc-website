import React from "react";
import "./AboutusPage.css";
import x from "./x.jpg";

const AboutusPage = () => {
  return (
    <div className="body-box">
      <div className="about-box">
        <div className="intro-box">
          <div className="intro-img">
            <img src={x} alt="intro" loading="eager" />
          </div>
          <div className="intro-texts">
            <p className="about-title">The Ban Mai Roy Project</p>
            <p className="about-intro">
              WHAT DOES THE NAME “ BAN MAI ROY” MEAN?
            </p>
            <p>
              <span className="about-bold">"Ban Mai Roy” (บานไม่โรย)</span> is
              short for{" "}
              <span className="about-bold">“ Ban Mai Ru Roy” (บานไม่เรีย)</span>
              , the Thai name for the{" "}
              <span className="about-bold">globe amaranth flower</span>. It
              means <span className="about-bold">“forever in bloom”</span>. The
              amaranth is a resilient native species, often found growing even
              in harsh conditions. Likewise, our project is rooted in{" "}
              <span className="about-bold">resilience</span> : the strength of
              trafficking survivors, stateless youth, ethnic minorities who are
              vulnerable to trafficking and discrimination, and those who are
              committed to standing beside them. We believe that no matter what,
              every child deserves the chance to grow, hope, and bloom
              endlessly. And just like its name, we hope{" "}
              <span className="about-bold">Ban Mai Roy</span> will continue to
              take root, blossom, and endure as a lasting space for learning,
              connection, and compassion.
            </p>
          </div>
        </div>
        <div className="about-info">
          <div>
            <p className="about-intro">WHO WE SERVE</p>
            <p>
              We work specifically with stateless youth, especially from ethnic
              minorities like the Shan, Karen, Akha, Lahu, and Mon, who face
              systemic discrimination and exclusion in both Thailand and
              Myanmar. Many endure forced military conscription, lack access to
              basic rights, and suffer persecution, displacement, and poverty.
              Our initiatives empower these young people through education,
              community support, skills development, and safe spaces to build
              their confidence and social connections.
            </p>
          </div>
          <div>
            <p className="about-intro">OUR MISSION AND VALUES</p>
            <p>
              Our mission is to empower stateless youth from marginalized ethnic
              communities by providing education, skills development, and
              supportive spaces that cultivate confidence, resilience, and hope
              for a better future. We value empathy over sympathy, believing
              that true understanding is essential to addressing problems at
              their core. We embrace diversity and actively work to dismantle
              barriers based on ethnicity, status, or background. Working hand -
              in - hand with communities, volunteers, and partners, we strive to
              create lasting impact. Throughout all our efforts, we act with
              transparency, accountability, and respect.
            </p>
          </div>
        </div>
        <div className="contact-box">
          <div className="contact-left">
            <p className="contact-title">Contact us!</p>
            <p className="contact-intro">
              Please fill out the form below to send us an email.
            </p>
            <p>
              Thank you for being here ♡ Whether you follow
              along, volunteer, or just read and care. We’re glad you’re with
              us!
            </p>
            <p className="contact-info">E-mail:</p>
            <p>reachbanmairoy@gmail.com</p>
            <p className="contact-info">E-mail:</p>
            <p>reachbanmairoy@gmail.com</p>
            <p className="contact-info">Instagram:</p>
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
    </div>
  );
};

export default AboutusPage;
