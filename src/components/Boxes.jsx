import React from "react";
import styles from "./Layout.module.css";
import Statastics from "./Statastics";
import { useParams } from "react-router-dom";

const Boxes = ({ boxes, handleButtons,selectedBox,updatedData }) => {
  const changedBox = {
    overview: "OVERVIEW",
    structure: "INTERNAL STRUCTURE",
    geology: "SURFACE GEOLOGY",
  };

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

  return (
    <>
      {" "}
      {boxes.map((box, index) => (
        <div className={styles.box} key={index}>
          <div onClick={() => handleButtons(box)}  style={{background:selectedBox===box? getColor(updatedData.name):"transparent"}} >
            &nbsp;  &nbsp; &nbsp;<span> 0{index + 1} </span> {changedBox[box]}
          </div>
        </div>
      ))}
    </>
  );
};


export default Boxes;
