import React from "react";
import Navbar from "./Pages/Dashboard/component/Navbar";
import Sidebar from "./Pages/Dashboard/component/Sidebar";
import HeroSection from "./Pages/Dashboard/component/HeroSection";
import { MdHeight } from "react-icons/md";

const App = () => {
  return (
    <div className=" d-flex border  " style={{ height: "100vh" }}>
      <aside
        className="container d-none d-md-block   h-100 py-5 px-2 "
        style={{ flexBasis: "250px" }}
      >
        <Sidebar></Sidebar>
      </aside>

      <div className=" flex-grow-1   w-100  ">
        <nav className="container d-flex py-2 justify-content-center  ">
          <Navbar></Navbar>
        </nav>

        <HeroSection></HeroSection>
      </div>
    </div>
  );
};

export default App;
