import React from 'react';
import ShowcaseMedia from './ShowcaseMedia/ShowcaseMedia';
const FeatureImage = [
    {
        media:'https://via.placeholder.com/200x75',
    },
    {
        media:'https://via.placeholder.com/200x75',
    },
    {
        media:'https://via.placeholder.com/200x75',
    },
    {
        media:'https://via.placeholder.com/200x75',
    },
]

const Feature = () => {
    return (
        <>
        {
            FeatureImage.map(media => <ShowcaseMedia media={media} /> )
        }
        </>
    );
};

export default Feature;