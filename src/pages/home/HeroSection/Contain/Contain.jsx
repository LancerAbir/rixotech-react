import React from "react";
import { ContendButton } from "../../../../styledComponents/components";
import classes from "./Contain.module.css";
const Contain = () => {
  return (
    <div className={classes.content}>
      <h1 className={classes.content__name}>
        The Greatest Journey Of Online Shop.
      </h1>

      <p className={classes.content__info}>
        It only takes 5 minutes and we handle everything from payment to
        delivery.
      </p>

      <a href="/">
        <ContendButton>Get Started</ContendButton>
      </a>
      {/* <a href="/" className={`${classes.hero__content__call_to_action} ${classes.call_to_action}`}>Get Started</a> */}

      <div className={classes.hero__content__video}>
        <img
          className={classes.hero__content__video__player}
          src="https://via.placeholder.com/48"
          alt="Placeholder"
        />
        <span className={classes.hero__content__video__info}>Learn More</span>
      </div>
    </div>
  );
};

export default Contain;
