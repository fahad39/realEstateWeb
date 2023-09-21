import React, { useState } from "react";
import "./Header.css";

import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { ROUTE } from "../../common/Routes";
import { Link, NavLink } from "react-router-dom";

const getMenuStyles = (menuOpened) => {
  if (document.documentElement.clientWidth <= 800) {
    return { right: !menuOpened && "-100%" };
  }
};

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings inner-width h-container">
        <Link to={ROUTE.home}>
          <img src="./img/logo.png" alt="logo" width={100} />
        </Link>
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <NavLink to={ROUTE.property}>Properties</NavLink>
            <a href="mailto:fahadhussain0127@gmail.com">Contact</a>
            <button className="button">Login</button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
