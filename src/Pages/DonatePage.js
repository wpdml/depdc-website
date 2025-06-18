import { useEffect } from "react";
import "./Donatepage.css";
import x3 from "./x3.jpg";
import x4 from "./x4.jpg";

const DonatePage = () => {
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
    <div className="donate-box">
      <div className="donate">
        <div className="top-img">
          <img src={x4} alt="intro" />
        </div>
        <div className="donate-text">
          <p>
            We are actively fundraising to support our initiatives and to
            contribute to shelters that care for at-risk children. While we do
            not yet have an official bank account, you can make a difference by
            participating in our fundraising efforts.
          </p>
          <p>
            Visit <span className="highlight">@banmairoy</span> on Instagram for
            updates and ways to get involved.
          </p>
        </div>
        <div className="bottom-img">
          <img src={x3} alt="intro" />
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
