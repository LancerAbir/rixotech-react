import React from 'react';
import classes from './Stats.module.css'

const Stats = () => {
    return (
            <div className={classes.overlays__stats__info}>
                    <img
                      src="https://via.placeholder.com/32"
                      alt="Placeholder Icon"
                      className={classes.overlays__stats__info__icon}
                    />

                    <div className={classes.overlays__stats__info__content}>
                      <span className={classes.overlays__stats__info__content__name}>
                        Successfully Sent
                      </span>
                      <span className={classes.overlays__stats__info__content__info}>
                        200+ sent total
                      </span>
                    </div>
                    {/* <!-- .hero__banner__overlays__stats__info__content --> */}
                  </div>
    );
};

export default Stats;