import React from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/icons/C.png";

// Navbar.js
export default function Navbar() {
  return (
    // refer to https://getbootstrap.com/docs/5.3/components/navbar/
    // https://blog.logrocket.com/using-bootstrap-with-react-tutorial-with-examples/
    <nav
      className="navbar navbar-expand-lg  sticky-top  bg-body-tertiary"
      data-bs-theme="dark"
    >
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
          <span className="navbar-toggler-icon"></span>
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
              <button
                className="nav-link dropdown-toggle btn btn-link"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Gallery
              </button>
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
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
