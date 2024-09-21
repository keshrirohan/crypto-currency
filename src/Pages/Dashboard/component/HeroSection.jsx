import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import PrimaryButton from "./PrimaryButton";
import { FaArrowsDownToLine, FaArrowsUpToLine } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div
      className="p-2"
      style={{
        background: "rgb(234 237 253)",
      }}
    >
      <div className="container">
        <div className="portfolio-section bg-white rounded-3 px-2 py-3">
          <div className="d-lg-flex gap-4 p-2 align-items-center justify-content-center align-items-center">
            <div className="content ">
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
              </span>
            </div>
            <div className="content">
              <span
                className="d-flex align-items-center gap-2"
                style={{ color: "gray" }}
              >
                Wallet Balances
              </span>
              <div className="d-md-flex gap-3">
                <span
                  className="fs-4 d-flex gap-2  align-items-center "
                  style={{
                    fontFamily: "'ubuntu',san-serif",
                    fontWeight: "500",
                  }}
                >
                  22.39401000
                  <span
                    className="fs-6 px-3 py-2 text  rounded-5"
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
            <div className="buttonSection mt-2 d-flex flex-lg-column gap-2 justify-content-lg-center align-items-center ">
              <PrimaryButton>
                <FaArrowsDownToLine /> Deposite{" "}
              </PrimaryButton>
              <PrimaryButton>
                <FaArrowsUpToLine /> Withdrawl{" "}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
