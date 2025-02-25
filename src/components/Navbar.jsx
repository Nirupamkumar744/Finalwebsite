import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Nav role="navigation" aria-label="Main Navigation">
      {/* Overlay effect when the menu is open */}
      <div
        className={`overlay ${openMenu ? "active" : ""}`}
        onClick={() => setOpenMenu(false)}
      ></div>

      <div className="menuIcon">
        <div
          className="mobile-navbar-btn"
          aria-label={openMenu ? "Close menu" : "Open menu"}
          aria-expanded={openMenu}
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? (
            <CgCloseR className="mobile-nav-icon close-icon" aria-hidden="true" />
          ) : (
            <CgMenu className="mobile-nav-icon" aria-hidden="true" />
          )}
        </div>

        <ul className={`navbar-list ${openMenu ? "active" : ""}`} role="menubar">
          {["Home", "About","Contact", "Blog", "FAQ", "Franchise"].map(
            (item, index) => (
              <li key={index} role="none">
                <NavLink
                  className="navbar-link"
                  onClick={() => setOpenMenu(false)}
                  to={`/${item.toLowerCase()}`}
                  role="menuitem"
                  aria-label={item}
                >
                  {item}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  .menuIcon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: #252525;
    width: 100%;
    position: relative;
    z-index: 1001;
  }

  .navbar-list {
    display: flex;
    gap: 1.5rem;
    list-style: none;

    li {
      .navbar-link {
        &:link,
        &:visited {
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: bold;
          color: #fff;
          transition: color 0.3s ease;
        }

        &:hover,
        &:active {
          color: #ffcc00;
        }
      }
    }
  }

  /* Hidden by default in desktop view */
  .mobile-navbar-btn {
    display: none;

    .mobile-nav-icon {
      font-size: 3.5rem;
      cursor: pointer;
      color: #febb12;
      transition: color 0.3s ease;
    }

    .close-icon {
      position: fixed;
      top: 1.5rem;
      right: 1.5rem;
      z-index: 10001;
    }
  }

  /* Overlay effect */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    z-index: 999;
  }

  .overlay.active {
    opacity: 1;
    visibility: visible;
  }

  /* Show hamburger menu when screen size is 1000px or smaller */
  @media (max-width: 1000px) {
    .mobile-navbar-btn {
      display: block;
    }

    /* Slide-in menu effect */
    .navbar-list {
      position: fixed;
      top: 0;
      right: -100%;
      width: 75%;
      height: 100%;
      background-color: rgba(37, 37, 37, 0.95);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      padding: 2rem;
      transform: translateX(0);
      transition: right 0.4s ease-in-out;
      z-index: 10000;
    }

    .navbar-list.active {
      right: 0;
    }

    /* Styling for navbar links in mobile view */
    .navbar-link {
      font-size: 2.5rem;
      color: #ffcc00;
      text-transform: uppercase;
      padding: 1rem 2rem;
      display: block;
      width: 100%;
      text-align: center;
      transition: background 0.3s ease;
    }

    .navbar-link:hover {
      background: rgba(255, 204, 0, 0.2);
    }

    /* Menu icon */
    .mobile-navbar-btn .mobile-nav-icon {
      display: block;
    }
  }
`;

export default Navbar;