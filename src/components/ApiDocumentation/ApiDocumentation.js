import React from "react";
import { apiDocumentation } from "../../images";
import styles from "./ApiDocumentation.module.css";

const ApiDocumentation = () => {
  return (
    <div className={["mainWrapper", styles.wrapper].join(" ")}>
      <img src={apiDocumentation} alt="#" className={styles.image} />
      <div className={styles.infoContainer}>
        <h2 className={styles.title}>API Documentation</h2>
        <p className={styles.text}>
          Our OpenAPI-compliant interface promises a seamless integration
          process for developers. With comprehensive documentation and dedicated
          support, integrating Rise Payments into your service has never been
          easier.
        </p>
        <button className={styles.button}>Get Started</button>
      </div>
    </div>
  );
};

export default ApiDocumentation;
