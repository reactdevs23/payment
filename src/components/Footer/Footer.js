import React from "react";

import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaYoutube, FaPhoneVolume } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import {
  MdPhoneInTalk,
  MdOutlineMailOutline,
  MdLocationOn,
} from "react-icons/md";

import { monthlyUsage } from "../../images";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialItems = [
    { icon: <BsFacebook className={styles.socialIcon} />, to: "#" },
    { icon: <BsTwitter className={styles.socialIcon} />, to: "#" },
    { icon: <BiLogoInstagramAlt className={styles.socialIcon} />, to: "#" },
    { icon: <FaYoutube className={styles.socialIcon} />, to: "#" },
  ];

  const footerItems = [
    {
      heading: "Quick Links",
      items: [
        { item: "Home Page", to: "/" },
        { item: "About Us", to: "/aboutus" },
        { item: "How It works", to: "/howitworks" },
        { item: "Benefits", to: "/benefits" },
        { item: "Use Case", to: "/useCase" },
      ],
    },
    {
      heading: "Company",
      items: [
        { item: "Products", to: "/products" },
        { item: "Pricing", to: "/pricing" },
        { item: "Privacy Policy", to: "/privacy-policy" },
        { item: "Term Of Service", to: "/term-Of-service" },
        { item: "Blog", to: "/blog" },
      ],
    },
  ];
  return (
    <div className={styles.footer}>
      <footer className={[styles.wrapper, "mainWrapper"].join(" ")}>
        <div className={styles.logoAndInfo}>
          <div className={styles.logoContainer}>
            <img src={monthlyUsage} alt="#" className={styles.logo} />
          </div>
          <p className={styles.info}>
            Lorem ipsum dolor sit amet, contur ading elit. Ut elit tellus,
            luctus nec.
          </p>
          <div className={styles.socialContainer}>
            {socialItems.map((social, i) => (
              <a
                href={social.to}
                className={styles.iconContainer}
                target="_blank"
                rel="noreferrer"
                key={i}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        {footerItems.map((el, i) => (
          <div className={styles.itemContainer} key={i}>
            <h4 className={styles.heading}>{el.heading}</h4>

            {el.items.map((items, index) => (
              <Link to={items.to} key={index} className={styles.item}>
                {items.item}
              </Link>
            ))}
          </div>
        ))}
        <div className={[styles.contactUs, styles.itemContainer].join(" ")}>
          {" "}
          <h4 className={styles.heading}>Contact Us</h4>
          <a href="tel:250-200-333" className={styles.contactLink}>
            <MdPhoneInTalk className={styles.contactIcon} />
            <span className={styles.light}> Call:</span> 250-200-333
          </a>{" "}
          <a
            href="mailto: : info@blockchain@gmail.com"
            className={styles.contactLink}
          >
            <MdOutlineMailOutline className={styles.contactIcon} />
            <span className={styles.light}> Gmail:</span>
            info@blockchain@gmail.com
          </a>
          <p className={styles.contactLink}>
            <MdLocationOn className={styles.contactIcon} />
            <span className={styles.light}> Location:</span> Mirpur- Road-12#,
            USA
          </p>
        </div>
      </footer>
      <div className={styles.copyRightContainer}>
        <p className={[styles.copyRight, "mainWrapper"].join(" ")}>
          Copyright © 2023 Online Payment Gateway & Fintech. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
