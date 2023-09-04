import React, { useEffect, useState } from "react";
import styles from "./Layout.module.css";
import { Link, useParams } from "react-router-dom";
import Arrow from "./assets/icon-source.svg";
import Boxes from "./Boxes";
import Statastics from "./Statastics";
import data from "../data.json";

import Mercury from "./assets/planet-mercury.svg";
import Jupiter from "./assets/planet-jupiter.svg";
import Mars from "./assets/planet-mars.svg";
import Neptune from "./assets/planet-neptune.svg";
import Saturn from "./assets/planet-saturn.svg";
import Uranus from "./assets/planet-uranus.svg";
import Venus from "./assets/planet-venus.svg";
import Earth from "./assets/planet-earth.svg";

import MercuryInternal from "./assets/planet-mercury-internal.svg";
import JupiterInternal from "./assets/planet-jupiter-internal.svg";
import MarsInternal from "./assets/planet-mars-internal.svg";
import NeptuneInternal from "./assets/planet-neptune-internal.svg";
import SaturnInternal from "./assets/planet-saturn-internal.svg";
import UranusInternal from "./assets/planet-uranus-internal.svg";
import Venusinternal from "./assets/planet-venus-internal.svg";
import EarthInternal from "./assets/planet-earth-internal.svg";

import MercuryGeology from "./assets/geology-mercury.png";
import JupiterGeology from "./assets/geology-jupiter.png";
import MarsGeology from "./assets/geology-mars.png";
import NeptuneGeology from "./assets/geology-neptune.png";
import SaturnGeology from "./assets/geology-saturn.png";
import UranusGeology from "./assets/geology-uranus.png";
import VenusGeology from "./assets/geology-venus.png";
import EarthGeology from "./assets/geology-earth.png";

const Layout = ({ id }) => {
  const { id: outsideId } = useParams();

  const updatedData = id === 0 ? data[id] : data[+outsideId];

  const [selectedBox, setSelectedBox] = useState("overview");

  const boxes = ["overview", "structure", "geology"];

  const handleButtons = (box) => setSelectedBox(box);

  console.log(updatedData, "updatedData");

  useEffect(() => {
    setSelectedBox("overview");
  }, [updatedData.name]);


  const  getColor = (name)=>{
    if(name==="Mercury") return "#419ebb"
    if(name==="Venus") return "#eda249"
    if(name==="Earth") return "#6d2ed5"
    if(name==="Mars") return "#d14c32"
    if(name==="Jupiter") return "#d83a34"
    if(name==="Saturn") return "#cd5120"
    if(name==="Uranus") return "#1ec1a2"
    if(name==="Neptune") return "#2d68f0"

 }

  const checkImage = () => {
    if (selectedBox === "overview") {
      if (updatedData.images.planet.includes("mercury")) return Mercury;
      if (updatedData.images.planet.includes("venus")) return Venus;
      if (updatedData.images.planet.includes("earth")) return Earth;
      if (updatedData.images.planet.includes("mars")) return Mars;
      if (updatedData.images.planet.includes("jupiter")) return Jupiter;
      if (updatedData.images.planet.includes("saturn")) return Saturn;
      if (updatedData.images.planet.includes("uranus")) return Uranus;
      if (updatedData.images.planet.includes("neptune")) return Neptune;
    }

    if (selectedBox === "structure") {
      if (updatedData.images.internal.includes("mercury"))
        return MercuryInternal;
      if (updatedData.images.internal.includes("venus")) return Venusinternal;
      if (updatedData.images.internal.includes("earth")) return EarthInternal;
      if (updatedData.images.internal.includes("mars")) return MarsInternal;
      if (updatedData.images.internal.includes("jupiter"))
        return JupiterInternal;
      if (updatedData.images.internal.includes("saturn")) return SaturnInternal;
      if (updatedData.images.internal.includes("uranus")) return UranusInternal;
      if (updatedData.images.internal.includes("neptune"))
        return NeptuneInternal;
    }

    if (selectedBox === "geology") {
      if (updatedData.images.geology.includes("mercury")) return MercuryGeology;
      if (updatedData.images.internal.includes("venus")) return VenusGeology;
      if (updatedData.images.internal.includes("earth")) return EarthGeology;
      if (updatedData.images.internal.includes("mars")) return MarsGeology;
      if (updatedData.images.internal.includes("jupiter"))
        return JupiterGeology;
      if (updatedData.images.internal.includes("saturn")) return SaturnGeology;
      if (updatedData.images.internal.includes("uranus")) return UranusGeology;
      if (updatedData.images.internal.includes("neptune"))
        return NeptuneGeology;
    }
  };

  return (
    <>
      <div className={styles.details}>
        {["overview", "structure", "geology"].map((details) => (
          <div
            key={details}
            className={styles.item}
            onClick={() => handleButtons(details)}
            style={{
              borderBottom:
                selectedBox === details
                  ? ` 2px solid ${getColor(updatedData.name)}`
                  : "transparent",
            }}
          >
            {details}
          </div>
        ))}
      </div>

      <div className={styles.layoutContainer}>
        <img src={checkImage()} alt="image" className={styles.image} />
        <div style={{ width: "350px" }} className={styles.align}>
          <div className={`heading1 ${styles.heading}`}>{updatedData.name}</div>
          <div className={styles.paragraph}>
            {updatedData[selectedBox].content}
          </div>
          <div className={styles.source}>
            <span>Source : </span>
            <Link
              to={updatedData[selectedBox].source}
              className={styles.wikipedia}
            >
              Wikipedia <img src={Arrow} alt="source" />{" "}
            </Link>
          </div>
          <div className={styles.box}>
            <Boxes
              boxes={boxes}
              handleButtons={handleButtons}
              selectedBox={selectedBox}
              updatedData={updatedData}
            />
          </div>
        </div>
      </div>
      <Statastics updatedData={updatedData} />
    </>
  );
};

export default Layout;
