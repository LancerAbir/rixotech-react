import React from "react";
import classes from "./Brand.module.css";
const Brand = ({ width = "250px" }) => {
  return (
    <div class={classes.main_header__brand}>
      <img
        src={window.location.origin + "/static/images/RixoTech.com-Logo.svg"}
        alt="RixoTech"
        width={width}
      />
      {/* <span class={classes.main_header__brand__name}>EDUCA</span>
              <span class={classes.main_header__brand__info}>STUDYA.</span> */}
    </div>
  );
};

export default Brand;
