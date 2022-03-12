import React from "react";
import classes from "./Navbar.module.css";
import NavItem from "./NavItem";

const Navbar = ({ navItems, activeNav }) => {
  return (
    <nav className="main_header__navigation">
      <ul className={classes.main_header__navigation__list}>
        {navItems &&
          navItems.map((nav) => (
            <NavItem key={nav.id} title={nav.title} activeNav={activeNav} />
          ))}
        {/* <!-- .main_header__navigation__list__item --> */}
      </ul>
      {/* <!-- .main_header__navigation__list --> */}
    </nav>
  );
};

export default Navbar;
