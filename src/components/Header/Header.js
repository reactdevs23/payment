import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { AiOutlineAlignRight } from "react-icons/ai";
import styles from "./Header.module.css";
import { monthlyUsage } from "../../images";
import { Link } from "react-scroll";

const Header = () => {
  const navItems = [
    { navItem: "Home", to: "hero" },
    { navItem: "Features", to: "features" },
    { navItem: "Services", to: "services" },
    { navItem: "Roadmap", to: "roadmap" },
    { navItem: "Team", to: "team" },
    { navItem: "Blog", to: "blog" },
  ];
  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={[styles.wrapper, isScrolled && styles.wrapperBg].join(" ")}>
      <header className={[styles.header, "mainWrapper"].join(" ")}>
        <Link
          className={[styles.navItem, styles.logoContainer].join(" ")}
          to="hero"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => setSidebar((prev) => !prev)}
        >
          {" "}
          <img src={monthlyUsage} alt="#" className={styles.logo} />
        </Link>

        <div className={[styles.navItems, sidebar && styles.sidebar].join(" ")}>
          {navItems.map((el, i) => (
            <Link
              key={i}
              className={styles.navItem}
              to={el.to}
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
              activeStyle={{ color: "#00BD43" }}
              onClick={() => setSidebar((prev) => !prev)}
            >
              {el.navItem}
            </Link>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Contact Us</button>{" "}
          {sidebar ? (
            <IoMdClose
              className={styles.icon}
              onClick={() => setSidebar((prev) => !prev)}
            />
          ) : (
            <AiOutlineAlignRight
              className={styles.icon}
              onClick={() => setSidebar((prev) => !prev)}
            />
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
