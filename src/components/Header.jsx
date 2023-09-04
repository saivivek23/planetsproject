import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import HamburgerMenu from "./assets/icon-hamburger.svg";
import Chevron from "./assets/icon-chevron.svg";

const Header = () => {
  const planetNames = [
    { id: 0, name: "Mercury", color: "#def4fc" },
    { id: 1, name: "Venus", color: "#f7cc7f" },
    { id: 2, name: "Earth", color: "#545bfe" },
    { id: 3, name: "Mars", color: "#ff6a45" },
    { id: 4, name: "Jupiter", color: "#ecad7a" },
    { id: 5, name: "Saturn", color: "#fccb6b" },
    { id: 6, name: "Uranus", color: "#65f0d5" },
    { id: 7, name: "Neptune", color: "#497efa" },
  ];

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((open) => !open);
  };
  return (
    <>
      <header className={styles.container}>
        <div className={styles.heading}>THE PLANETS</div>
        <img
          src={HamburgerMenu}
          alt="hamburger"
          className={styles.icon}
          onClick={handleClick}
        />
        <ul className={`heading4`}>
          {planetNames.map((pn, index) => (
            <li key={index}>
              <NavLink
                to={`/${pn.id}`}
                style={({ isActive }) => ({
                  borderBottom: isActive ? "4px solid #419ebb" : "",
                })}
              >
                {" "}
                {pn.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
      <div className={styles.mobileContainer} onClick={handleClick} >
        {open &&
          planetNames.map((pn) => (
            <Link to={`/${pn.id}`}>
            <div className={styles.container} key={pn.id}>
              <div className={styles.both}>
                <div
                  className={styles.circle}
                  style={{ background: pn.color }}
                ></div>
                <div className={styles.name}>{pn.name}</div>
              </div>
              <div>
                <img src={Chevron} alt="chevron" className={styles.chIcon} />
              </div>
            </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Header;
