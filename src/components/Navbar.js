import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/icons/C.png";
import { DataContext } from "./DataProvider";

// Navbar.js
export default function Navbar() {
  const { theme, toggleTheme } = useContext(DataContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    // refer to https://getbootstrap.com/docs/5.3/components/navbar/
    // https://blog.logrocket.com/using-bootstrap-with-react-tutorial-with-examples/
    <nav className="navbar navbar-expand-lg  sticky-top  bg-warning nav-dark">
      <div className="container-fluid">
        <Link to="/about-me" className="navbar-brand">
          <img src={logo} alt="logo" width="30" height="24" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            {/* add following hamburger icon */}
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* define the spacing */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/about-me" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blogs" className="nav-link">
                Blogs
              </Link>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle btn btn-link"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Gallery
              </div>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/photos" className="dropdown-item">
                    Photos
                  </Link>
                </li>
                <li>
                  <Link to="/videos" className="dropdown-item">
                    Videos
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/others">
                    Others
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>

          <li className="nav-item">
            <Link to="/auth" className="nav-link">
              Login
            </Link>
          </li>
          <div className="header-toggle-buttons">
            <button onClick={() => toggleTheme()}>{theme}</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
