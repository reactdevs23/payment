import React from "react";
import {
  btc,
  eth,
  bnb,
  dash,
  btcCardBg,
  ethCardBg,
  bnbCardBg,
  dashCardBg,
} from "../../images";
import styles from "./Currencies.module.css";
const Currencies = () => {
  const data = [
    {
      icon: btc,
      name: "BTC",
      coinName: "Bitcoin",
      amount: "$ 15,705.03",
      bg: btcCardBg,
    },
    {
      icon: eth,
      name: "ETH",
      coinName: "Ethereum",
      amount: "$ 10,705.03",
      bg: ethCardBg,
    },
    {
      icon: bnb,
      name: "BNB",
      coinName: "Binance coin",
      amount: "$ 25,705.03",
      bg: bnbCardBg,
    },
    {
      icon: dash,
      name: "Dash",
      coinName: "Dash coin",
      amount: "$ 16,705.03",
      bg: dashCardBg,
    },
  ];
  return (
    <div className={["mainWrapper", styles.container].join(" ")}>
      {data.map((el, i) => (
        <div className={styles.card} key={i}>
          <div className={styles.infoContainer}>
            <div className={styles.cardHeader}>
              <div className={styles.nameAndIcon}>
                <div className={styles.iconContainer}>
                  <img src={el.icon} alt={el.name} className={styles.icon} />
                </div>
                <p className={styles.name}>{el.name}</p>
              </div>
              <p className={styles.coinName}>{el.coinName}</p>
            </div>
            <h3 className={styles.amount}>{el.amount}</h3>
          </div>
          <img src={el.bg} alt="#" className={styles.bg} />
        </div>
      ))}
    </div>
  );
};

export default Currencies;
