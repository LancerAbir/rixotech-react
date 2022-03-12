import React from 'react';
import classes from './HotTopic.module.css'
const HotTopic = ({label, annousment}) => {
    return (
             <div
              className={`${classes.main_header__navigation__list__item} ${classes['main_header__navigation__list__item--special']}`}
            >
              <a href="/" className={classes['main_header__navigation__list__item--special__link']}>
                <span className={classes['main_header__navigation__list__item--special__link__name']}>{label}</span>
                <span className={classes['main_header__navigation__list__item--special__link__info']}>
                  {annousment}
                </span>
              </a>
            </div>
    );
};

export default HotTopic;