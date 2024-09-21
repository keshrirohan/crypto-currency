import React from "react";

const PButton = ({ name, icon }) => {
  return (
    <div className=" container  d-flex justify-content-center w-100">
      <button className=" w-100  my-3  d-flex justify-content-center align-items-center gap-2 py-1 rounded-3 border bg-transparent ">
        {icon}
        {name}
      </button>
    </div>
  );
};

export default PButton;
