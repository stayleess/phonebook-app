import React, { useState } from "react";

// STYLES
import styled from "styled-components";
import "../index.css";

// ASSETS
import Logo from "../assets/icons/contact-book.png";
import Flag from "../assets/icons/united-kingdom.png";
import { FiLock } from "react-icons/fi";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";

function NavBar({ changeTheme, currentTheme }) {
  // za toggling
  const [navState, setNavState] = useState(false);
  return (
    <Nav id="top" className="nav">
      <div className="brand-container">
        <div className="brand">
          <img src={Logo} alt="Logo" />
          <div className="brand-name">
            Your <span>PhoneBook</span>
          </div>
        </div>

        <div className="toggle-container">
          <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavState(true)} />
            )}
          </div>
          <div className="mode" onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </div>
        </div>
      </div>

      <div className={`links-container ${navState ? "nav-visible" : ""}`}>
        <ul className="links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="phoneBook">
              <span className="highlight">PhoneBook</span>
            </a>
          </li>
          <li>
            <a href="About">
              <span className="highlight">About</span>
            </a>
          </li>
          <li className="flag">
            <img src={Flag} className="flag" alt="language" />
            <span>English</span>
          </li>
          <li className="login-btn">
            <FiLock />
            Login & Registration
          </li>
          <div id="visible" className="theme" onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </div>
        </ul>
      </div>
    </Nav>
  );
}
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--primary-color);
  margin-bottom: 1rem;
  .brand-container {
    .brand {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 10vh;
      }
      .brand-name {
        display: flex;
        flex-direction: column;
        font-size: 1.6rem;
        font-weight: bold;
        color: #babbbb;
        span {
          color: var(--primary-color);
        }
      }
    }
  }
  .toggle-container {
    display: none;
    .toggle {
      .mode {
        .dark {
          color: #ffff;
        }
        .light {
          color: var(--background-color);
          &:hover {
            background-color: var(--background-color);
          }
        }
      }
    }
  }
  .links-container {
    .links {
      list-style: none;
      display: flex;
      gap: 2rem;
      li {
        padding: 0.2rem;
        transition: 0.3s ease-in-out;
        border-radius: 0.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        &:first-of-type,
        &:hover {
          background-color: var(--primary-color);
          cursor: pointer;
        }

        a {
          text-decoration: none;
          color: #babbbb;
          font-weight: bold;
          transition: 0.3s ease-in-out;
        }
        &:last-of-type {
          a {
            color: var(--primary-color);
          }
        }
      }
      .flag {
        font-weight: bold;
        background-color: var(--primary-color);
      }
    }
    .login-btn {
      font-weight: bold;
      background-color: var(--primary-color);
      button {
        border: none;
        border-radius: 0.3rem;
        outline: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-weight: bold;
        gap: 1rem;
        margin: 1rem;
        cursor: pointer;

        svg {
          font-size: 1.5rem;
          font-weight: bold;
        }
      }
    }
  }
  .theme {
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .dark {
      svg {
        color: var(--primary-color);
        &:hover {
          color: var(--primary-color);
          cursor: pointer;
        }
      }
    }
    .light {
      color: var(--primary-color);
      &:hover {
        color: var(--primary-color);
      }
    }
  }

  [data-theme="light"] {
    Nav {
      .brand-container {
        .brand {
          img {
            filter: brightness(0);
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: relative;
    padding: 1rem 2rem;
    .brand-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .brand {
        img {
          height: 1.5rem;
        }
      }
      .toggle-container {
        display: block;
        color: var(--accent-color1);
        display: flex;
        flex-direction: row-reverse;
        gap: 1rem;
        z-index: 40;
        .toggle {
          z-index: 40;
          display: block;
        }
      }
    }
    .links-container {
      z-index: 30;
      background-image: linear-gradient(101deg, var(--pink), var(--orange));
      height: 100vh;
      position: absolute;
      top: 0;
      right: 0;
      opacity: 0;
      width: 0;
      visibility: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s ease-in-out;
      .links {
        flex-direction: column;
        li {
          a {
            color: var(--background);
          }
          &:last-of-type {
            display: none;
          }
        }
        #visible {
          visibility: hidden;
        }
      }
    }
    .nav-visible {
      width: 60vw;
      visibility: visible;
      opacity: 1;
    }
  }
`;

export default NavBar;
