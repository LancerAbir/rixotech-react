import React from 'react';
import classes from './Media.module.css'

const Media = () => {
    return (
        <>
            <img
                            className={classes.image}
                            src="https://via.placeholder.com/500/"
                            alt="Hero Banner Image"
                        />
        </>
    );
};

export default Media;