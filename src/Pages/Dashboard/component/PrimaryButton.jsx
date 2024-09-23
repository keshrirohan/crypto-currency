import React from "react";
import style from "./component.module.css";


const PrimaryButton = ({ children }) => {
  return (
    <span
      className={`${style.primarybtn} px-3 py-2 text-center  d-flex fs-6 align-items-center gap-sm-2 gap-1 text-light  rounded-2  `}
      style={{
        background: "#5f00d9",
        fontFamily: "'ubuntu',san-serif",
        fontSize:"15px",
        fontWeight: "400",
        cursor: "pointer",
      }}
    >
      {children}
    </span>
  );
};

export default PrimaryButton;
