import React from "react";
import classes from "./NavItem.module.css";
const NavItem = ({ title, activeNav }) => {
  return (
    <li>
      <a
        href="/"
        className={`${classes.link} ${
          title === activeNav ? classes.active : ""
        }`}
      >
        {title}
      </a>
    </li>
  );
};

export default NavItem;
