import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="container">
        <h1>Defi</h1>
        <ul className={click ? "nav active" : "nav"}>
          <li className="nav__item">
            <a href="/">Platform</a>
          </li>
          <li className="nav__item">
            <a href="/">Developers</a>
          </li>
          <li className="nav__item">
            <a href="/">Community</a>
          </li>
          <li className="nav__item">
            <a href="/">About</a>
          </li>
          <li className="nav__item">
            <a className="btn" href="/">
              Use Defi
            </a>
          </li>
        </ul>
        <div onClick={handleClick} className="hamburger">
          {click ? (
            <AiOutlineClose className="icon" />
          ) : (
            <AiOutlineMenu className="icon" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
