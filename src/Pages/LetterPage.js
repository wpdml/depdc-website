import React, { useEffect } from "react";
import "./LetterPage.css";
import orchid from "./x1.jpg";

const LetterPage = () => {
  const createParticle = () => {
    const particle = document.createElement("div");
    particle.className = "particle";
    const size = Math.random() * 1.5 + 1.3;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    particle.style.animation = `glitter ${
      Math.random() * 6 + 2
    }s ease-in-out forwards`;
    particle.style.zIndex = 1000;
    document.body.appendChild(particle);
    const glowIntensity = Math.random() * 15 + 20;
    particle.style.boxShadow = `0 0 ${glowIntensity}px rgba(255, 255, 255)`;
    particle.addEventListener("animationend", () => {
      particle.remove();
    });
  };

  useEffect(() => {
    const interval = setInterval(createParticle, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="body-box">
      <div className="letter">
        <div className="letter-box">
          <svg
            className="envelope-flap"
            viewBox="0 0 100 60"
            preserveAspectRatio="none"
          >
            <polygon
              points="0,0 100,0 50,60"
              fill="rgba(255, 255, 255, 0.7)"
              stroke="rgb(188, 142, 197)"
              strokeWidth="0.5"
              strokeDasharray="2,1.5"
            />
          </svg>
          <div className="texts-box">
            <img src={orchid} alt="stamp" className="stamp" />
            <div className="raksa-text">RAKSA LETTERS</div>
            <div className="letter-text">COMING SOON!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterPage;
