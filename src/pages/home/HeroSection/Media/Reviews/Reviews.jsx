import React from 'react';
import classes from './Reviews.module.css'

const Reviews = () => {
    return (

        <div className={classes.overlays__reviews__info}>
            <img
                src="https://via.placeholder.com/16"
                alt="Placeholder Icon"
                className={classes.overlays__reviews__info__icon}
            />

            <span className={classes.overlays__reviews__info__name}>4.9</span>
            <span className={classes.overlays__reviews__info__info}>(15K Review)</span>
        </div>
    );
};

export default Reviews;