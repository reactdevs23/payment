import React, { useState } from "react";
import styles from "./Benefits.module.css";
import { benefits } from "../../images";

const Benefits = () => {
  const [active, setActive] = useState(0);
  const data = [
    {
      heading: "No Chargebacks",
      details:
        "Enjoy the peace of mind that comes with blockchain transactions. With Rise Payments, chargebacks are a thing of the past, ensuring that every sale is final and fraud is significantly reduced.",
    },
    {
      heading: "Cost-Effective Transactions",
      details:
        "With our fixed monthly fee, you can forget about the high costs usually associated with payment processing. Keep more of your earnings with our transparent pricing model.",
    },
    {
      heading: "Global Accessibility",
      details:
        "Expand your reach. Rise Payments enables you to accept payments from anywhere in the world, opening your business to a global customer base without the usual hassle of currency conversion.",
    },
  ];
  return (
    <section className={styles.mainWrapper}>
      <div className={["mainWrapper", styles.wrapper].join(" ")}>
        <h2 className={styles.title}>Benefits</h2>
        <div className={styles.container}>
          <div className={styles.contentContainer}>
            {data.map((el, i) => (
              <div
                className={[
                  styles.content,
                  active === i && styles.activeContent,
                ].join(" ")}
                key={i}
                onClick={() => setActive(i)}
              >
                <p className={styles.indexContainer}>
                  {i + 1 <= 9 ? `0${i + 1}` : i + 1}
                </p>
                <div className={styles.info}>
                  <h4 className={styles.heading}>{el.heading}</h4>
                  <p className={styles.details}>{el.details}</p>
                </div>
              </div>
            ))}
          </div>{" "}
          <img src={benefits} alt="#" className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
