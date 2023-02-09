import React, { useState } from "react";
import Axios from "axios";
import { Outlet, Link, Route } from "react-router-dom";

import "./style.css";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

import LocationCityIcon from "@mui/icons-material/LocationCity";
import SouthAmericaIcon from "@mui/icons-material/SouthAmerica";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import PersonIcon from "@mui/icons-material/Person";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import Battery80Icon from "@mui/icons-material/Battery80";
import HdrStrongIcon from "@mui/icons-material/HdrStrong";
import PowerIcon from "@mui/icons-material/Power";
import BoltIcon from "@mui/icons-material/Bolt";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";

export const Indexdash = () => {
  const [vid, setVid] = useState(0);
  const [vdata, setVdata] = useState([{}]);

  const getData = () => {
    Axios.post("http://54.95.196.89:8000/api/dash/", {
      vid: vid,
    }).then((response) => {
      setVdata(response.data);
    });
    console.log(vid);
    console.log(vdata);
  };
  return (
    <div className="page">
      <Sidebar />
      <div className="home">
        {/* <Navbar /> */}

        <h1>NIKOLA CHARGING PVT LTD</h1>
        <h2>Battery OEM Dashboard</h2>

        <div className="container">
          <div className="sel">
            <label>Vehicle ID : </label>
            {/* <div className="dropdown">
              {celldata
                .filter((cellid) => {
                  const searchTerm = value.toString().toLowerCase();
                  const fullName = cellid.id.toString().toLowerCase();

                  return (
                    searchTerm &&
                    fullName.startsWith(searchTerm) &&
                    fullName !== searchTerm
                  );
                })
                .slice(0, 10)
                .map((cellid) => (
                  <div
                    onClick={() => onSearch(cellid.id)}
                    className="dropdown-row"
                    key={cellid.id}
                  >
                    {cellid.id}
                  </div>
                ))}
            </div> */}
            <select
              inputMode="mulitple"
              onChange={(event) => {
                setVid(event.target.value);
              }}
            >
              <option defaultValue="Select">Select</option>
              <option>V123456789</option>
              <option>V987654321</option>
              {/* <option>EV_2W_104</option>
              <option>EV_2W_105</option>
              <option>EV_2W_106</option> */}
            </select>
          </div>

          <button className="fbutton" onClick={getData}>
            Get Data
          </button>
        </div>

        <div className="details">
          <h2>Vehicle Details</h2>

          <div className="container">
            <div className="widget">
              <div className="left">
                <span className="title">State</span>
                <p className="num">{vdata[0].State}</p>
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
                <p className="num">{vdata[0].Region}</p>
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
                <span className="title">Vehicle No.</span>
                <p className="num">{vdata[0].Veh_No}</p>
              </div>
              <div className="right">
                <ElectricCarIcon
                  className="icon"
                  style={{
                    color: "#DD3B62",
                  }}
                />
              </div>
            </div>
            <div className="widget">
              <div className="left">
                <span className="title">Owner Name</span>
                <p className="num">{vdata[0].Owner_Name}</p>
              </div>
              <div className="right">
                <PersonIcon />
              </div>
            </div>
            <div className="widget">
              <div className="left">
                <span className="title">Vehicle Stat</span>
                <p className="num">{vdata[0].Vehicle_Stat}</p>
              </div>
              <div className="right">
                <ToggleOnIcon />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="widget">
              <div className="left">
                <span className="title">Battery Level</span>
                <p className="num">{vdata[0].Batt_Lvl}</p>
              </div>
              <div className="right">
                <Battery80Icon
                  className="icon"
                  style={{
                    color: "#4ECA8A",
                  }}
                />
              </div>
            </div>
            <div className="widget">
              <div className="left">
                <span className="title">Rem Range</span>
                <p className="num">{vdata[0].Rem_rnge}</p>
              </div>
              <div className="right">
                <HdrStrongIcon />
              </div>
            </div>
            <div className="widget">
              <div className="left">
                <span className="title">Charge</span>
                <p className="num">{vdata[0].Charge_S}</p>
              </div>
              <div className="right">
                <PowerIcon
                  className="icon"
                  style={{
                    color: "#4ECA8A",
                  }}
                />
              </div>
            </div>
            <div className="widget">
              <div className="left">
                <span className="title">Energy Consumption</span>
                <p className="num">{vdata[0].Energ_Conspn}</p>
              </div>
              <div className="right">
                <BoltIcon
                  className="icon"
                  style={{
                    color: "#F7B924",
                  }}
                />
              </div>
            </div>
            <div className="widget">
              <div className="left">
                <span className="title">Vehicle Usage Pattern</span>
                <p className="num">{vdata[0].Veh_Usg_Patter}</p>
              </div>
              <div className="right">
                <EmojiTransportationIcon
                  className="icon"
                  style={{
                    color: "#DD3B62",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="variable-box">
            <h2>State</h2>
            <p>{vdata[0].State}</p>
          </div>
          <div className="variable-box">
            <h2>Region</h2>
            <p>{vdata[0].Region}</p>
          </div>
          <div className="variable-box">
            <h2>Vehicle No.</h2>
            <p>{vdata[0].Veh_No}</p>
          </div>
          <div className="variable-box">
            <h2>Owner Name</h2>
            <p>{vdata[0].Owner_Name}</p>
          </div>
          <div className="variable-box">
            <h2>Vehicle Stat</h2>
            <p>{vdata[0].Vehicle_Stat}</p>
          </div> */}

        {/* <div className="container">
          <div className="variable-box">
            <h2>Battery Level</h2>
            <p>{vdata[0].Batt_Lvl}</p>
          </div>
          <div className="variable-box">
            <h2>Rem range</h2>
            <p>{vdata[0].Rem_rnge}</p>
          </div>
          <div className="variable-box">
            <h2>Charge</h2>
            <p>{vdata[0].Charge_S}</p>
          </div>
          <div className="variable-box">
            <h2>Energy Consumption</h2>
            <p>{vdata[0].Energ_Conspn}</p>
          </div>
          <div className="variable-box">
            <h2>Vehicle Usage Pattern</h2>
            <p>{vdata[0].Veh_Usg_Patter}</p>
          </div>
        </div> */}
        <div className="bcls">
          <button className="fbutton">
            <Link
              className="link"
              to="/fault-detection"
              state={{ data: vdata }}
            >
              Fault Detection
            </Link>
          </button>
          <button className="fbutton">
            <Link
              className="link"
              to="/battery-analysis"
              state={{ data: vdata }}
            >
              Battery Analysis
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
