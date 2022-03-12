import React from "react";
import styles from "./Testimonial.module.css";
import cx from "classnames"; //---For adding multiple classes
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";

const Testimonial = () => {
  return (
    <>
      <div className={styles.testimonials__container}>
        <section className={cx(styles.testimonials, styles.container)}>
          <h2 className={styles.testimonials__name}>Trusted Clients</h2>

          <div className={styles.testimonials__reviews}>
            <div className={styles.testimonials__reviews__content}>
              <p className={styles.testimonials__reviews__content__info}>
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quidem esse debitis magnam deserunt doloribus quod nemo
                inventore maiores vero neque. Minus quibusdam repellendus nobis
                dignissimos. Commodi, rerum officiis. Optio, quisquam?"
              </p>

              <div className={styles.testimonials__reviews__content__author}>
                <span className="testimonials__reviews__content__author__name">
                  Larry Diamond
                </span>

                <span
                  className={styles.tstimonials__reviews__content__author__info}
                >
                  Chief Executive Officer, Besnik
                </span>
              </div>
              <div className={styles.testimonials__reviews__content__switch}>
                <div className={styles.switch}>
                  <GrFormPreviousLink fontSize={30} />
                </div>
                <div className={styles.switch}>
                  <GrFormNextLink fontSize={30} />
                </div>
              </div>
            </div>
            <img
              src="https://via.placeholder.com/500/"
              alt="PlaceHolder"
              className={styles.testimonials__reviews__banner}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonial;
