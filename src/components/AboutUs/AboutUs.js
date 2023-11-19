import React from "react";
import styles from "./AboutsUs.module.css";
import { aboutus } from "../../images";

const AboutUs = () => {
  return (
    <div className={["mainWrapper", styles.wrapper].join(" ")}>
      <img src={aboutus} alt="#" className={styles.image} />
      <div className={styles.infoContainer}>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.text}>
          At Rise Payments, we're not just a payment platform; we're innovators
          reshaping the way businesses interact with the blockchain. Founded by
          a team of fintech experts passionate about cryptocurrency's potential,
          Rise Payments offers a unique suite of tools designed to empower
          merchants and customers alike. With our user-centric approach, we're
          building a payment ecosystem that's secure, reliable, and incredibly
          easy to use.
        </p>
        <button className={styles.button}>Read More</button>
      </div>
    </div>
  );
};

export default AboutUs;
