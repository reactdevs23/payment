import React from "react";
import styles from "./PartnershipNetworks.module.css";
const PartnershipNetworks = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Partnership Networks</h2>
      <p className={styles.text}>
        Join our growing network of partners and tap into a community that's at
        the forefront of payment technology. Whether you're a financial
        institution, a crypto wallet, or an eCommerce platform, partnering with
        Rise Payments connects you to new markets and opportunities.
      </p>
      <div className={styles.buttonContainer}>
        <button className={[styles.button, styles.crypto].join(" ")}>
          Crypto Wallet
        </button>
        <button className={[styles.button, styles.join].join(" ")}>
          Join Our Growing
        </button>
      </div>
    </div>
  );
};

export default PartnershipNetworks;
