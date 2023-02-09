import React, { useState } from "react";
import Axios from "axios";
import { Outlet, Link, useLocation } from "react-router-dom";

import LocationCityIcon from "@mui/icons-material/LocationCity";
import SouthAmericaIcon from "@mui/icons-material/SouthAmerica";
import FingerprintIcon from "@mui/icons-material/Fingerprint";

import "./style.css";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

export const FaultDetection = () => {
  // console.log(props);
  const loc = useLocation();
  console.log(loc.state.data[0]);
  const data = loc.state.data[0];
  console.log(data);
  return (
    <div className="page">
      <Sidebar />
      <div className="home">
        {/* <Navbar /> */}
        <h2>Fault Detection</h2>
        <div className="container">
          <div className="widget">
            <div className="left">
              <span className="title">State</span>
              <p className="num">{data.State}</p>
            </div>
            <div className="right">
              <LocationCityIcon
                className="icon"
                style={{
                  color: "#F7B924",
                }}
              />
            </div>
          </div>
          <div className="widget">
            <div className="left">
              <span className="title">Region</span>
              <p className="num">{data.Region}</p>
            </div>
            <div className="right">
              <SouthAmericaIcon
                className="icon"
                style={{
                  color: "#4ECA8A",
                }}
              />
            </div>
          </div>
          <div className="widget">
            <div className="left">
              <span className="title">Vehicle ID</span>
              <p className="num">{data.Vehicle_ID}</p>
            </div>
            <div className="right">
              <FingerprintIcon
                className="icon"
                style={{
                  color: "#DD3B62",
                }}
              />
            </div>
          </div>
          {/* <div className="variable-box">
            <h2>State</h2>
            <p>{data.State}</p>
          </div>
          <div className="variable-box">
            <h2>Region</h2>
            <p>{data.Region}</p>
          </div>
          <div className="variable-box">
            <h2>Vehicle ID</h2>
            <p>{data.Vehicle_ID}</p>
          </div> */}
        </div>
        <div className="container">
          <button className="fbutton">
            <Link
              className="black"
              to="/battery"
              state={{ batteryid: data.Batt_ID }}
            >
              Battery ID
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
