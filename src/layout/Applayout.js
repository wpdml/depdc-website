import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Applayout.css";
import logo from "./logo.png"

const Applayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-container">
          <Link to="/" className="title logo-link">
            <img src={logo} alt="Logo" className="logo-img" />
            Ban Mai Roy
          </Link>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <div className="dropdown-wrapper">
              <span className="nav-title dropdown-toggle">Projects ▾</span>
              <div className="dropdown-content">
                <Link to="/letters" className="nav-title">
                  Raksa letters
                </Link>
                <Link to="/activities" className="nav-title">
                  PYD activities camp
                </Link>
              </div>
            </div>
            <Link to="/aboutus" className="nav-title" onClick={closeMenu}>
              About us
            </Link>
            <Link to="/partners" className="nav-side" onClick={closeMenu}>
              Our partners
            </Link>
            <Link to="/donate" className="nav-side" onClick={closeMenu}>
              Donate
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Applayout;
