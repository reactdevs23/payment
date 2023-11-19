import React from "react";
import {
  tinder,
  youtube,
  amazon,
  paypal,
  asus,
  nationalGeographic,
} from "../../images";
import styles from "./Partners.module.css";

const Partners = () => {
  const partners = [tinder, youtube, amazon, paypal, asus, nationalGeographic];

  return (
    <div className={[styles.wrapper].join(" ")}>
      <div className={styles.marquee}>
        <div className={styles.marqueGroup}>
          {partners.map((el, i) => (
            <div className={styles.imageGroup} key={i}>
              <img src={el} alt="#" className={styles.image} />
            </div>
          ))}
        </div>
        <div className={styles.marqueGroup}>
          {partners.map((el, i) => (
            <div className={styles.imageGroup} key={i}>
              <img src={el} alt="#" className={styles.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
