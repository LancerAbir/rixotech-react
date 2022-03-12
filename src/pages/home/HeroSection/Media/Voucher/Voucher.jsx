import React from 'react';
import classes from './Voucher.module.css'

const Voucher = () => {
    return (
        <div className={classes.overlays__voucher}>
            <img
                src="https://via.placeholder.com/46"
                alt="Placeholder Icon"
                className={classes.__overlays__voucher__icon}
            />

            <div className={classes.overlays__voucher__content}>
                <span className={classes.overlays__voucher__content__name}>Voucher</span>
                <span className={classes.overlays__voucher__content__info}>+$10,000</span>
            </div>
        </div>
    );
};

export default Voucher;