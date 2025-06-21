import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Applayout.css";
import logo from "./logo.png";

const Applayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-container">
          <Link to="/" className="title logo-link">
            <img src={logo} alt="Logo" className="logo-img" loading="eager"/>
            BAN MAI ROY
          </Link>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <div className="dropdown-wrapper">
              <span className="nav-title dropdown-toggle">PROJECTS ▾</span>
              <div className="dropdown-content">
                <Link to="/letters" className="nav-title" onClick={closeMenu}>
                  RAKSA LETTERS
                </Link>
                <Link to="/magazine" className="nav-title" onClick={closeMenu}>
                  AMARANTH MAGAZINE
                </Link>
                <Link
                  to="/activities"
                  className="nav-title"
                  onClick={closeMenu}
                >
                  PYD ACTIVITIES CAMP
                </Link>
              </div>
            </div>
            <Link to="/aboutus" className="nav-title" onClick={closeMenu}>
              ABOUT US
            </Link>
            {/*
            <Link to="/partners" className="nav-side" onClick={closeMenu}>
              Our partners
            </Link>
            */}
            <Link to="/donate" className="nav-side" onClick={closeMenu}>
              DONATE
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Applayout;
