import React from "react";
import style from "./component.module.css";


const PrimaryButton = ({ children }) => {
  return (
    <span
      className={`${style.primarybtn} px-3 py-2 text-center d-flex align-items-center gap-2 text-light fs-5 rounded-2  fs-5 `}
      style={{
        background: "#5f00d9",
        fontFamily: "'ubuntu',san-serif",
        fontWeight: "400",
        cursor: "pointer",
      }}
    >
      {children}
    </span>
  );
};

export default PrimaryButton;
