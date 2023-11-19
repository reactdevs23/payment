import React from "react";
import { maximizeSaving } from "../../images";
import styles from "./MaximizeSavings.module.css";

const MaximizeSavings = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={["mainWrapper", styles.wrapper].join(" ")}>
        <div className={styles.infoContainer}>
          <h2 className={styles.title}>
            Maximize Your Savings with Our Fixed Monthly Fee
          </h2>
          <p className={styles.subTitle}>
            Starting at $500 - Unlock Unlimited Payment Possibilities
          </p>
          <p className={styles.text}>
            Welcome to predictable billing without compromising on quality. Rise
            Payments introduces a fixed monthly fee structure, starting at just
            <span className={styles.highlight}> $500, tailored</span> to fit
            your business needs while supporting your growth and budget.
          </p>
          <button className={styles.button}>Embrace Fixed Pricing</button>
        </div>
        <img src={maximizeSaving} alt="#" className={styles.image} />
      </div>
    </div>
  );
};

export default MaximizeSavings;
