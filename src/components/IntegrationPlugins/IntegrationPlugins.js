import React from "react";
import {
  wooCommerce,
  openChart,
  shopify,
  integrationPluginImg,
} from "../../images";
import styles from "./IntegrationPlugins.module.css";

const IntegrationPlugins = () => {
  const data = [
    {
      icon: wooCommerce,
      heading: "WooCommerce",
      details:
        "Integrate effortlessly with WooCommerce. Our plugin connects your online store to Rise Payments, allowing you to accept crypto payments with ease.",
    },
    {
      icon: openChart,
      heading: "OpenCart",
      details:
        "Unlock the power of crypto for your OpenCart store. Our solution ensures that accepting cryptocurrency is as simple as any traditional payment method.",
    },
    {
      icon: shopify,
      heading: "Shopify",
      details:
        "Bring the future of payment to your Shopify store. Our plugin makes it straightforward to set up and manage crypto payments, giving your customers more ways to pay.",
    },
  ];

  return (
    <section className={styles.mainWrapper}>
      <div className={["mainWrapper", styles.wrapper].join(" ")}>
        <div className={styles.container}>
          <h2 className={styles.title}>Integration Plugins</h2>
          <div className={styles.contentContainer}>
            {data.map((el, i) => (
              <div className={styles.content} key={i}>
                <img src={el.icon} alt="#" className={styles.icon} />
                <div className={styles.info}>
                  <h4 className={styles.heading}>{el.heading}</h4>
                  <p className={styles.details}>{el.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img src={integrationPluginImg} alt="#" className={styles.image} />
      </div>
    </section>
  );
};

export default IntegrationPlugins;
