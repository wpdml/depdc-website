import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Applayout.css";

const Applayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-container">
          <Link to="/" className="title">
            Banmairoy
          </Link>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <Link to="/aboutus" className="nav-title" onClick={closeMenu}>
              About us
            </Link>

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

            <Link to="/donate" className="nav-side" onClick={closeMenu}>
              Donate
            </Link>
            <Link to="/partners" className="nav-side" onClick={closeMenu}>
              Our partners
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Applayout;
