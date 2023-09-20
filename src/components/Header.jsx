import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const links = [
    {
      id: 1,
      path: "/about",
      text: "About",
    },
    {
      id: 2,
      path: "/cervice",
      text: "Cervice",
    },
    {
      id: 3,
      path: "/portfolio",
      text: "Portfolio",
    },
    {
      id: 4,
      path: "/contact",
      text: "Contact",
    },
  ];

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
            {links.map((item) => {
              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "header__link header__link-active"
                      : "header__link"
                  }
                >
                  {item.text}
                </NavLink>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;