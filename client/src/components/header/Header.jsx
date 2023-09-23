import React, { useState } from "react";
import "./Header.css";

import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { ROUTE } from "../../common/Routes";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../profileMenu/ProfileMenu";

const getMenuStyles = (menuOpened) => {
  if (document.documentElement.clientWidth <= 800) {
    return { right: !menuOpened && "-100%" };
  }
};

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
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
            {isAuthenticated ? (
              <ProfileMenu user={user} logout={logout} />
            ) : (
              <button className="button" onClick={loginWithRedirect}>
                Login
              </button>
            )}
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
