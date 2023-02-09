import React, { useState } from "react";
import Axios from "axios";
import { Outlet, Link, useLocation } from "react-router-dom";
import "./style.css";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

export const Battery = () => {
  const loc = useLocation();
  console.log(loc);
  console.log(loc.state.batteryid);
  const bmsid = loc.state.batteryid;

  // const [vid, setVid] = useState(0);
  const [bdata, setBdata] = useState([{}]);

  const getBattery = () => {
    Axios.post("http://54.95.196.89:8000/api/dash/bms", {
      bmsid: bmsid,
    }).then((response) => {
      console.log(response.data);
      setBdata(response.data);
    });
  };
  return (
    <div className="page">
      <Sidebar />
      <div className="home">
        <Navbar />
        <div className="container">
          <div className="sel">
            <h2>BMS ID</h2>
            <p>{bmsid}</p>
          </div>

          <button className="fbutton" onClick={getBattery}>
            Get Battery Details
          </button>
        </div>

        <div className="container">
          <div className="variable-box">
            <h2>Nature of Fault</h2>
            <p>{bdata[0].naturef}</p>
          </div>
          <div className="variable-box">
            <h2>Type of Fault</h2>
            <p>{bdata[0].typef}</p>
          </div>
          <div className="variable-box">
            <h2>Date and Time of Fault Detection</h2>
            <p>{bdata[0].datetime}</p>
          </div>
          <div className="variable-box">
            <h2>No of time fault occured</h2>
            <p>{bdata[0].noofoccur}</p>
          </div>
        </div>
        <div className="container">
          <div className="variable-box">
            <h2>Immediate on ground support required</h2>
            <p>{bdata[0].immediate}</p>
          </div>
          <div className="variable-box">
            <h2>live location of vehicle</h2>
            <p>{bdata[0].livelocation}</p>
          </div>
          <div className="variable-box">
            <h2>Last Battery Inspection date</h2>
            <p>{bdata[0].lastinsdate}</p>
          </div>
          <div className="variable-box">
            <h2>Current Temperature of battery pack</h2>
            <p>{bdata[0].currenttemp}</p>
          </div>
        </div>
        <div className="container">
          <button className="fbutton">
            <Link className="black" to="/cell-info">
              Cell Information
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
