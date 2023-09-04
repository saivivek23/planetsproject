import React, { useEffect, useState } from "react";
import styles from "./Layout.module.css";

const Statastics = ({updatedData}) => {
  const data = [
    {
      heading: "ROTATION TIME",
      value:updatedData.rotation,
    },
    {
      heading: "REVOLUTION TIME",
      value:updatedData.revolution,
    },
    {
      heading: "RADIUS",
      value:updatedData.radius,
    },
    {
      heading: "AVERAGE TEMP.",
      value:updatedData.temperature,
    },
  ];

  return (
    <div className={styles.staContainer}>
      {data.map((sts) => (
        <div className={styles.statastics}>
          <div className={styles.heading}>{sts.heading}</div>
          <div className={`${styles.value} heading2`}>{sts.value}</div>
        </div>
      ))}
    </div>
  );
};

export default Statastics;
