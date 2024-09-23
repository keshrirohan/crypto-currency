import React from "react";
import Portfolio from "./Portfolio";
import { FaLongArrowAltLeft } from "react-icons/fa";
import PrimaryButton from "./PrimaryButton";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi2";
import { FaBitcoin } from "react-icons/fa";
const HeroSection = () => {
  let timer = ["1H", "1D", "1W", "1M"];
  let clock = ["7:15 PM", "12:55 AM ", "6:35 AM", "12:15 PM", "5:55 PM"];
  return (
    <div style={{ padding: "1rem", background: "rgb(234, 237, 253)" }}>
      <div className="container">
        <Portfolio />
        <section
          className="d-flex justify-content-between mt-2"
          style={{ gap: "1rem", flexWrap: "wrap" }}
        >
          <div
            className="d-flex flex-column justify-content-between bg-white"
            style={{
              padding: "1rem",
              Radius: "8px",
              flex: "1 1 300px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="   -danger">
              <div className="d-sm-flex flex-wrap align-items-center justify-content-between ">
                <h3 className="" style={{ color: "gray" }}>
                  Current Price
                </h3>{" "}
                <div className="d-flex gap-2">
                  <PrimaryButton>
                    <FaPlusCircle /> Buy
                  </PrimaryButton>
                  <PrimaryButton>
                    <FaMinusCircle /> Sell
                  </PrimaryButton>
                </div>
              </div>

              <div
                className="d-flex align-items-center  "
                style={{ gap: "0.5rem" }}
              >
                <span
                  className="fs-4"
                  style={{
                    fontFamily: "'Ubuntu', sans-serif",
                    fontWeight: "500",
                  }}
                >
                  ₹ 26,670.25
                </span>
                <span
                  className="fs-5 d-flex align-items-center"
                  style={{ color: "#059669", gap: "0.2rem" }}
                >
                  <FaLongArrowAltLeft
                    className="fs-5"
                    style={{ transform: "rotate(45deg)" }}
                  />
                  0.04%
                </span>
              </div>
            </div>
            <div className="d-flex my-2 justify-content-sm-end justify-content-center align-items-center ">
              <div
                className=" rounded    d-flex gap-2  px-2 py-1"
                style={{ background: "#F3F3F7" }}
              >
                {timer.map((time) => (
                  <p
                    className="px-2 py-1   rounded d-flex m-0"
                    style={{
                      fontSize: "18px",
                      cursor: "pointer",
                    }}
                  >
                    {time}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-3">
              <img
                className="img-fluid"
                src="../Public/Graph.png"
                alt="graph"
                style={{ width: "100%" }}
              />
            </div>
            <div className="d-flex justify-content-between gap-1   -top">
              {clock.map((time) => (
                <p
                  className="m-0"
                  style={{ fontSize: "12px ", color: "#797E82" }}
                >
                  {time}
                </p>
              ))}
            </div>
          </div>

          <div
            className="d-flex flex-column  bg-white"
            style={{
              padding: "1rem",
              borderRadius: "8px",
              flex: "1 1 300px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="pb-3">
              <h3 className="" style={{ color: "gray" }}>
                Recent Transactions
              </h3>{" "}
            </div>
            <div className="d-flex flex-column gap-5 ">
              <section className="d-flex  ">
                <div
                  className="   rounded-circle px-2 py-3 "
                  style={{ background: "#F3F3F7" }}
                >
                  <HiCurrencyDollar
                    className=" "
                    style={{ fontSize: "2rem" }}
                  />
                </div>
                <div className="transaction   w-100 justify-content-between px-3 d-flex">
                  <div className=" ">
                    <h4 className="transectionStatus">INR Deposit</h4>
                    <div className="transactionTiming d-flex gap-2">
                      <span className="date" style={{ color: "gray" }}>
                        2022-06-09
                      </span>
                      <span className="time" style={{ color: "gray" }}>
                        7:06 PM
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="moneySection fw-bold"> + ₹81,123.10</div>
                    <div className="submoney"> </div>
                  </div>
                </div>
              </section>

              <section className="d-flex  ">
                <div
                  className="  rounded-circle px-2 py-3 "
                  style={{ background: "#F3F3F7" }}
                >
                  <FaBitcoin className=" " style={{ fontSize: "2rem" }} />
                </div>
                <div className="transaction   w-100 justify-content-between px-3 d-flex">
                  <div className="">
                    <h4 className="transectionStatus">BTC Sell</h4>
                    <div className="transactionTiming d-flex gap-2">
                      <span className="date" style={{ color: "gray" }}>
                        2022-05-27
                      </span>
                      <span className="time" style={{ color: "gray" }}>
                        12:32 PM
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="moneySection fw-bold">
                      {" "}
                      - 12.48513391 BTC
                    </div>
                    <div className="submoney" style={{ color: "gray" }}>
                      {" "}
                      + $81,123.10{" "}
                    </div>
                  </div>
                </div>
              </section>
              <section className="d-flex  ">
                <div
                  className="   rounded-circle px-2 py-3 "
                  style={{ background: "#F3F3F7" }}
                >
                  <HiCurrencyDollar
                    className=" "
                    style={{ fontSize: "2rem" }}
                  />
                </div>
                <div className="transaction   w-100 justify-content-between px-3 d-flex">
                  <div className=" ">
                    <h4 className="transectionStatus">INR Deposit</h4>
                    <div className="transactionTiming d-flex gap-2">
                      <span className="date" style={{ color: "gray" }}>
                        2022-06-09
                      </span>
                      <span className="time" style={{ color: "gray" }}>
                        7:06 PM
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="moneySection fw-bold"> + ₹81,123.10</div>
                    <div className="submoney"> </div>
                  </div>
                </div>
              </section>
            </div>
            <section className="d-flex shadow-sm  mt-2 justify-content-center  ">
              <button
                className=" fs-3 border-0 w-100 rounded"
                style={{
                  outline: "none",
                  fontFamily: "'ubuntu',san-serif",
                  background: "#EEEEF4",
                }}
              >
                View All
              </button>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
