import React from "react";
import { FaHamburger } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <ul
      className=" d-flex align-items-center justify-content-between px-md-5 w-100 "
      style={{ listStyle: "none"}}
    >
      <li className="d-md-none">
        <FaHamburger className=" fs-2" />
      </li>
      <li>
        <a
          href="#"
          className="text-dark"
          style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: "500",
            fontSize: "28px",
            textDecoration: "none",
            textJustify: "none",
          }}
        >
          Dashboard
        </a>
      </li>
      <li>
        <a>
          <CgProfile className="fs-2" />
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
