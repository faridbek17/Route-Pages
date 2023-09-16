import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <Link className="header__logo-h1" to="/#">
              <h1>Logo</h1>
            </Link>
          </div>

          <nav className="header__nav">
            <Link className="header__link" to="/about">
              About
            </Link>
            <Link className="header__link" to="/cervice">
              Service
            </Link>
            <Link className="header__link" to="/portfolio">
              Portfolio
            </Link>
            <Link className="header__link" to="/contact">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
