import React from 'react';
import classes from './ShowcaseMedia.module.css'
const ShowcaseMedia = ({media}) => {
    // console.log(media.media);
    return (
            <img className={classes.stats__showcase__image}  src={media.media} alt='' />
    );
};

export default ShowcaseMedia;