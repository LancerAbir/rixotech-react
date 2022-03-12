import React from "react";
import styles from "./GiftSection.module.css";
import cx from "classnames"; //---For adding multiple classes
import { IconCard, SectionTitle } from "../../../styledComponents/components";

const logos = [
  {
    id: 1,
    icon: "https://www.vectorlogo.zone/logos/vimeo/vimeo-icon.svg",
    alt: "placeholder",
    color: "linear-gradient(to bottom, #effafc, #e8f3f5)",
  },
  {
    id: 2,
    icon: "https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg",
    alt: "placeholder",
    color: "linear-gradient(to bottom, #feefef, #f7e8e8)",
  },
  {
    id: 3,
    icon:
      "https://www.vectorlogo.zone/logos/google_drive/google_drive-icon.svg",
    alt: "placeholder",
    color: "linear-gradient(to bottom, #fefbef, #f8f5e9)",
  },
  {
    id: 4,
    icon: "https://www.vectorlogo.zone/logos/twitter/twitter-official.svg",
    alt: "placeholder",
    color: "linear-gradient(to bottom, #eff9fe, #e9f3f8)",
  },
];
const GiftSection = () => {
  return (
    <>
      <div className={styles.gifts__container}>
        <section className={cx(styles.gifts, styles.container)}>
          <SectionTitle>
            Accept Gift Cards <br />
            Online?
          </SectionTitle>

          <a href="#" className={styles.gifts__call_to_action}>
            <img
              src="https://via.placeholder.com/48/"
              alt="PlaceHolder"
              className={styles.gifts__call_to_action__icon}
            />
            <span className={styles.gifts__call_to_action__name}>
              Discover Now
            </span>
          </a>
          <div className={styles.gifts__logos}>
            {logos &&
              logos.map((logo) => (
                <IconCard gradientColor={logo.color}>
                  <img
                    src={logo.icon}
                    alt={logo.alt}
                    className={styles.gifts__logos__container__item}
                  />
                </IconCard>
              ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default GiftSection;
