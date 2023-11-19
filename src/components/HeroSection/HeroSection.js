import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.wrapper} id="hero">
      <div className={styles.heroSection}>
        <h1 className={styles.title}>
          Welcome to the Future of Payments with Rise
        </h1>
        <p className={styles.text}>
          Unleash the potential of cryptocurrency in your business with static,
          secure wallets, fixed pricing, and flexible ERC20 token acceptance.
        </p>
        <div className={styles.buttonContainer}>
          <button className={[styles.button, styles.discover].join(" ")}>
            Discover Rise
          </button>
          <button className={[styles.button, styles.join].join(" ")}>
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
