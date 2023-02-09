import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Axios from "axios";
import "./style.css";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import capacity from "../assets/capacitor-symbol.png";
import current from "../assets/current.png";
import Bolt from "@mui/icons-material/Bolt";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";

export const Battery2 = () => {
  const loc = useLocation();
  console.log(loc.state.batteryid);
  const battid = loc.state.batteryid;

  // const [vid, setVid] = useState(0);
  const [bdata, setBdata] = useState([{}]);
  const getBattery = () => {
    Axios.post("http://54.95.196.89:8000/api/dash/battery", {
      battid: battid,
    }).then((response) => {
      setBdata(response.data);
      console.log(response.data);
    });
  };
  console.log(bdata);
  return (
    <div className="page">
      <Sidebar />
      <div className="home">
        {/* <Navbar /> */}
        <div className="container">
          <div className="sel">
            <h2>BMS ID</h2>
            <p>{battid}</p>
          </div>

          <button className="fbutton" onClick={getBattery}>
            Get Battery Details
          </button>
        </div>

        <div className="container">
          <div className="widget">
            <div className="left">
              <span className="title">Battery Capacity</span>
              <p className="num">{bdata[0].Batt_cap}</p>
            </div>
            <div className="right">
              <img src={capacity} style={{ height: "22px" }} />
            </div>
          </div>
          <div className="widget">
            <div className="left">
              <span className="title">Battery Voltage</span>
              <p className="num">{bdata[0].Batt_Volt}</p>
            </div>
            <div className="right">
              <Bolt
                className="icon"
                style={{ height: "26px", color: "#F7B924" }}
              />
            </div>
          </div>
          <div className="widget">
            <div className="left">
              <span className="title">Battery Current</span>
              <p className="num">{bdata[0].Batt_Cur}</p>
            </div>
            <div className="right">
              <img src={current} style={{ height: "22px" }} />
            </div>
          </div>
          <div className="widget">
            <div className="left">
              <span className="title">Battery Temperature</span>
              <p className="num">{bdata[0].Batt_temp}</p>
            </div>
            <div className="right">
              <DeviceThermostatIcon
                className="icon"
                style={{ height: "26px", color: "red" }}
              />
            </div>
          </div>

          {/* <div className="variable-box">
            <h2>Battery Capacity</h2>
            <p>{bdata[0].Batt_cap}</p>
          </div>
          <div className="variable-box">
            <h2>Battery Voltage</h2>
            <p>{bdata[0].Batt_Volt}</p>
          </div>
          <div className="variable-box">
            <h2>Battery Current</h2>
            <p>{bdata[0].Batt_Cur}</p>
          </div>
          <div className="variable-box">
            <h2>Battery Temperature</h2>
            <p>{bdata[0].Batt_temp}</p>
          </div> */}
        </div>
        <div className="container">
          <div className="widget">
            <div className="left">
              <span className="title">Battery SOC</span>
              <p className="num">{bdata[0].Batt_SOC}</p>
            </div>
            <div className="right">
              {/* <img src={current} style={{ height: "22px" }} /> */}
            </div>
          </div>
          <div className="widget">
            <div className="left">
              <span className="title">Battery SOH</span>
              <p className="num">{bdata[0].Batt_SOH}</p>
            </div>
            <div className="right">
              {/* <img src={current} style={{ height: "22px" }} /> */}
            </div>
          </div>
          <div className="widget">
            <div className="left">
              <span className="title">Cycle Life</span>
              <p className="num">{bdata[0].Cycle_Life}</p>
            </div>
            <div className="right">
              {/* <img src={current} style={{ height: "22px" }} /> */}
            </div>
          </div>
          <div className="widget">
            <div className="left">
              <span className="title">Calender Life</span>
              <p className="num">{bdata[0].Calend_Life}</p>
            </div>
            <div className="right">
              {/* <img src={current} style={{ height: "22px" }} /> */}
            </div>
          </div>
          <div className="widget">
            <div className="left">
              <span className="title">Depth of Degradation</span>
              <p className="num">{bdata[0].DOD}</p>
            </div>
            <div className="right">
              {/* <img src={current} style={{ height: "22px" }} /> */}
            </div>
          </div>
          {/* <div className="variable-box">
            <h2>Battery SOC</h2>
            <p>{bdata[0].Batt_SOC}</p>
          </div>
          <div className="variable-box">
            <h2>Battery SOH</h2>
            <p>{bdata[0].Batt_SOH}</p>
          </div>
          <div className="variable-box">
            <h2>Cycle Life</h2>
            <p>{bdata[0].Cycle_Life}</p>
          </div>
          <div className="variable-box">
            <h2>Calender Life</h2>
            <p>{bdata[0].Calend_Life}</p>
          </div>
          <div className="variable-box">
            <h2>Depth of Degradation</h2>
            <p>{bdata[0].DOD}</p>
          </div> */}
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
