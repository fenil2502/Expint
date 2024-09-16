import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Navigate, Routes } from "../../navigation/NavigationLib";

function Header() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header-inner">
          <div className="navbar">
            <div className="logo">
              <img src="./Pionear-header.svg" alt="Pionear Pumps" />
            </div>

            <div className="menu">
              <div className="menu-links">
                <div onClick={() => Navigate(Routes.home)}>Home</div>
                <div onClick={() => Navigate(Routes.about)}>About Us</div>
                <div onClick={() => Navigate(Routes.blog)}>Blog</div>
                <div onClick={() => Navigate(Routes.career)}>Career</div>
                <div className="contact-btn" onClick={() => Navigate(Routes.contact)}>Get a quote</div>
              </div>
            </div>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className={`${toggle ? "none" : "mobile-menu"} `}>
              <div className="menu-links">
                <div onClick={() => Navigate(Routes.home)}>Home</div>
                <div onClick={() => Navigate(Routes.about)}>About</div>
                <div onClick={() => Navigate(Routes.blog)}>Blog</div>
                <div onClick={() => Navigate(Routes.career)}>Career</div>
                <div className="contact-btn" onClick={() => Navigate(Routes.contact)}>Get a quote</div>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
