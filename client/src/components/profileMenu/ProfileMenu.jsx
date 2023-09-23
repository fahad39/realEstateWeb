import React from "react";
import { Avatar, Menu, Button } from "@mantine/core";
import { NavLink } from "react-router-dom";

const ProfileMenu = ({ user, logout }) => {
  return (
    <Menu>
      <NavLink>Favourites</NavLink>
      <NavLink>Bookings</NavLink>
      <div
        onClick={() => {
          localStorage.clear();
          logout();
        }}
      >
        Logout
      </div>
      <Avatar
        variant="default"
        src={user?.picture}
        alt="user image"
        radius="xs"
      />
    </Menu>
  );
};

export default ProfileMenu;
