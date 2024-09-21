import React from "react";
import PButton from "./PButton";
import { MdDashboard, MdOutlineSupportAgent } from "react-icons/md";
import { RiArrowUpDownFill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="container d-flex h-100  justify-content-between flex-column">
      <div className=" above-section d-flex justify-content-center  flex-column align-items-center ">
        <div
          className="heading text-center p-3"
          style={{
            fontFamily: "'Ubuntu', sans-serif",
            color: " #5F00D9",
            fontWeight: "500px",
            fontSize: "20px",
          }}
        >
          @DOSOMECODING
        </div>
      </div>
      <div className="">
        <div className="downsection d-flex justify-content-center align-items-center  ">
          <PButton name="Dashboard" icon={<MdDashboard />}></PButton>
        </div>
        <div className="downsection d-flex justify-content-center align-items-center  ">
          <PButton name="Transation" icon={<RiArrowUpDownFill />}></PButton>
        </div>
      </div>
      <div className="downsection d-flex justify-content-center align-items-center  ">
        <PButton name="Support" icon={<MdOutlineSupportAgent />}></PButton>
      </div>
    </div>
  );
};

export default Sidebar;
