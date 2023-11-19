import React from "react";
import styles from "./SimplifyTransaction.module.css";
import { simplifyTransaction } from "../../images";

const SimplifyTransaction = () => {
  return (
    <div className={["mainWrapper", styles.wrapper].join(" ")}>
      {" "}
      <img src={simplifyTransaction} alt="#" className={styles.image} />
      <div className={styles.infoContainer}>
        <h2 className={styles.title}>
          Simplify Transactions with Static Wallet Addresses
        </h2>
        <p className={styles.subTitle}>Effortless Top-Ups, Zero Errors</p>
        <p className={styles.text}>
          Enhance your customer's payment journey with Rise Payments’ Static
          Wallet Addresses. Our solution provides a seamless top-up experience,
          eliminating the common errors associated with dynamic addresses. By
          offering a constant destination for funds, you empower your customers
          with a straightforward and error-free way to transact.
        </p>
        <button className={styles.button}>Enable Easy Top-Ups</button>
      </div>
    </div>
  );
};

export default SimplifyTransaction;
