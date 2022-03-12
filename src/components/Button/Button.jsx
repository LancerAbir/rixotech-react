import React from "react";
import classes from "./Button.module.css";
const Button = ({ type = "contain", title }) => {
  return (
    <div>
      <a
        className={` ${
          type === "link"
            ? classes.link
            : type === "outline"
            ? classes.outline
            : classes.contain
        } ${classes.btn}`}
        href="/"
      >
        {title}
      </a>
    </div>
  );
};

export default Button;
