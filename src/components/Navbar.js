import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/icons/C.png";
import { DataContext } from "./DataProvider";
import lightSky from "../assets/icons/light.png";
import darkSky from "../assets/icons/dark.png";

// Navbar.js
export default function Navbar() {
  const { theme, toggleTheme, authenticate, setAuthenticate } =
    useContext(DataContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  let list = <></>;
  // only authenticated users are allowed to view Blogs, gallery - photos and videos
  if (authenticate) {
    list = (
      <>
        <div className="nav-item">
          <Link to="/blogs" className="nav-link">
            Blogs
          </Link>
        </div>
        <div className="nav-item dropdown">
          <div
            className="nav-link dropdown-toggle btn btn-link"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="dropdownMenuButton1"
          >
            Gallery
          </div>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <div>
              <Link to="/photos" className="dropdown-item">
                Photos
              </Link>
            </div>
            <div>
              <Link to="/videos" className="dropdown-item">
                Videos
              </Link>
            </div>
            {/* <div>
              <hr className="dropdown-divider" />
            </div> */}
            <div>
              <Link to="/others" className="dropdown-item">
                Others
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    // refer to https://getbootstrap.com/docs/5.3/components/navbar/
    // https://blog.logrocket.com/using-bootstrap-with-react-tutorial-with-examples/
    <nav className="navbar navbar-expand-lg  sticky-top">
      <div className="container-fluid">
        <Link to="/about-me" className="navbar-brand">
          <img src={logo} alt="logo" width="30" height="24" />
        </Link>
        <div className="d-flex">
          <button id="toggleTheme" onClick={() => toggleTheme()}>
            {theme === "dark-theme" ? (
              <img src={darkSky} alt="Dark Mode" />
            ) : (
              <img src={lightSky} alt="Light Mode" />
            )}
          </button>

          {/* following  based on answer in stackoverflow how to change css*/}
          {/* Bootstrap 5 - Animated hamburger starting off as X */}
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* define the spacing */}
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
            <div className="nav-item">
              <Link id="home" to="/about-me" className="nav-link">
                Home
              </Link>
            </div>

            {/* following {list} will be displayed if authenticated */}
            {list}
            <div className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </div>
          </div>

          <div>
            {/* if already login, display 'logout' button; otherwise, display 'login' button */}
            {authenticate ? (
              <Link
                to="/about-me"
                onClick={() => {
                  setAuthenticate(false);
                  document.getElementById("home").focus();
                }}
                className="nav-link"
              >
                Logout
              </Link>
            ) : (
              <Link to="/auth" className="nav-link">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
