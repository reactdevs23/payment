import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";

import {
  walletAddress,
  monthlyUsage,
  selfListing,
  instantPayout,
} from "../../images";
import styles from "./ServicesSection.module.css";

const ServicesSection = () => {
  const services = [
    {
      icon: walletAddress,
      heading: "Static Wallet Addresses",
      info: "Take control of your payments with our static wallet addresses. Each address is uniquely linked to a customer, eliminating confusion and ensuring that funds always reach their intended destination.",
      learnMore: "#",
    },
    {
      icon: monthlyUsage,
      heading: "Fixed Monthly Usage Costs",
      info: "Say goodbye to unpredictable transaction fees. Our fixed monthly usage costs mean you pay one flat rate to access all our premium features — simplicity and savings combined.",
      learnMore: "#",
    },
    {
      icon: selfListing,
      heading: "Self-Listing Capabilities for Cryptocurrencies",
      info: "Embrace the full potential of crypto payments. With Rise, you can self-list any ERC20 token, opening up a world of possibilities for receiving payments in the currency that best suits your business.",
      learnMore: "#",
    },
    {
      icon: instantPayout,
      heading: "Instant Payout Section",
      info: "Transform your crypto into cash instantly. With Rise Payments, you're always just a few clicks away from converting your cryptocurrency into your local currency and transferring it directly into your account. Fast, fluid, and secure — liquidity on your terms.",
      learnMore: "#",
    },
  ];
  return (
    <div className={["mainWrapper", styles.wrapper].join(" ")} id="services">
      <h2 className={styles.title}>Our Services Section</h2>
      <div className={styles.services}>
        {services.map((el, i) => (
          <div className={styles.service} key={i}>
            <img src={el.icon} alt="#" />
            <h4 className={styles.heading}>{el.heading}</h4>
            <p className={styles.info}>{el.info}</p>
            <a
              href={el.learnMore}
              target="_blank"
              rel="noreferrer"
              className={styles.learnmore}
            >
              Learn More
              <HiOutlineArrowSmRight className={styles.arrow} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
