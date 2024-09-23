import React from "react";
import { FaArrowsDownToLine, FaArrowsUpToLine } from "react-icons/fa6";
import PrimaryButton from "./PrimaryButton";
import { FaInfoCircle } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="portfolio-section bg-white rounded-3 px-2 py-3">
      <div
        className="d-flex flex-column flex-lg-row  p-2 align-items-center justify-content-center text-center text-lg-start"
        style={{ flexWrap: "wrap" }}
      >
        <div className="content flex-grow-1 my-2 ">
          <span
            className="d-flex align-items-center gap-2"
            style={{ color: "gray" }}
          >
            Total Portfolio Value <FaInfoCircle />{" "}
          </span>
          <span
            className="fs-4"
            style={{ fontFamily: "'ubuntu',san-serif", fontWeight: "500" }}
          >
            ₹ 112,312.24
            <span
              className="fs-6 px-3 py-2   rounded-5"
              style={{
                color: "gray",
                background: "rgb(234 237 253)",
              }}
            >
              INR
            </span>
          </span>
        </div>
        <div className="content flex-grow-1 my-2">
          <span
            className="d-flex align-items-center gap-2 justify-content-center justify-content-lg-start"
            style={{ color: "gray" }}
          >
            Wallet Balances
          </span>
          <div className="d-flex flex-column flex-md-row gap-3 justify-content-center justify-content-lg-start">
            <span
              className="fs-4 d-flex gap-2 justify-content-center   align-items-center "
              style={{
                fontFamily: "'ubuntu',san-serif",
                fontWeight: "500",
              }}
            >
              22.39401000
              <span
                className="fs-6 px-3 py-2   rounded-5"
                style={{
                  color: "gray",
                  background: "rgb(234 237 253)",
                }}
              >
                BTC
              </span>
            </span>
            <span
              className="fs-4 fs-md-5 "
              style={{
                fontFamily: "'ubuntu',san-serif",
                fontWeight: "500",
              }}
            >
              ₹ 112,312.24
              <span
                className="fs-6 px-3 py-2   rounded-5"
                style={{
                  color: "gray",
                  background: "rgb(234 237 253)",
                }}
              >
                INR
              </span>
            </span>
          </div>
        </div>
        <div className="buttonSection d-flex my-3 flex-lg-column gap-2 justify-content-center align-items-center  ">
          <PrimaryButton>
            <FaArrowsDownToLine /> Deposite{" "}
          </PrimaryButton>
          <PrimaryButton>
            <FaArrowsUpToLine /> Withdrawl{" "}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
