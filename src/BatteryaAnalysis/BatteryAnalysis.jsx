import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation, useParams } from "react-router-dom";
import capacity from "../assets/capacitor-symbol.png";
import current from "../assets/current.png";
import Bolt from "@mui/icons-material/Bolt";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import Battery3BarIcon from '@mui/icons-material/Battery3Bar';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';

export const BatteryAnalysis = () => {
  const { battid } = useParams()
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`http://65.0.103.14/bat_info`, {
        method: "GET",
      });
      const tempdata = await response.json();
      setData({ ...tempdata.data.find(obj => obj.Batt_ID === battid) });
      console.log(tempdata.data);
    };
    getData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);


  return (
    <div className="w-full">
      <div className="relative h-auto overflow-hidden bg-white border-0  flex items-center flex-col justify-center">
        {/* <img src="/images/landscape/6.svg" className="absolute object-cover w-full h-full" /> */}
        <div className="container relative z-10 flex items-center">
          <div className="relative z-10 flex flex-col items-center w-full">
            <h1 className="font-bold leading-tight text-center text-black text-7xl">
              Battery Details
            </h1>
          </div>
        </div>
      </div>
      {
        data ? (

          <div className="home">
            <div className="container">
              <div className="widget">
                <div className="left">
                  <span className="title">Battery Capacity</span>
                  <p className="num">{data.Batt_cap}</p>
                </div>
                <div className="right">
                  <img src={capacity} style={{ height: "24px" }} />
                </div>
              </div>
              <div className="widget">
                <div className="left">
                  <span className="title">Battery Voltage</span>
                  <p className="num">{data.Batt_Volt}</p>
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
                  <p className="num">{data.Batt_Cur}</p>
                </div>
                <div className="right">
                  <img src={current} style={{ height: "22px" }} />
                </div>
              </div>
              <div className="widget">
                <div className="left">
                  <span className="title">Battery Temperature</span>
                  <p className="num">{data.Batt_temp}</p>
                </div>
                <div className="right">
                  <DeviceThermostatIcon
                    className="icon"
                    style={{ height: "26px", color: "red" }}
                  />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="widget">
                <div className="left">
                  <span className="title">Battery SOC</span>
                  <p className="num">{data.Batt_SOC}</p>
                </div>
                <div className="right">
                  <Battery3BarIcon style={{ color : '#4ECA8A'}} />
                </div>
              </div>
              <div className="widget">
                <div className="left">
                  <span className="title">Battery SOH</span>
                  <p className="num">{data.Batt_SOH}</p>
                </div>
                <div className="right">
                <Battery3BarIcon style={{ color : 'teal'}} />
                </div>
              </div>
              <div className="widget">
                <div className="left">
                  <span className="title">Cycle Life</span>
                  <p className="num">{data.Cycle_Life}</p>
                </div>
                <div className="right">
                  <ChangeCircleOutlinedIcon />
                </div>
              </div>
              <div className="widget">
                <div className="left">
                  <span className="title">Calender Life</span>
                  <p className="num">{data.Calend_Life}</p>
                </div>
                <div className="right">
                  <EventRepeatOutlinedIcon style={{color: 'blue'}} />
                </div>
              </div>
              <div className="widget">
                <div className="left">
                  <span className="title">Depth of Degradation</span>
                  <p className="num">{data.DOD}</p>
                </div>
                <div className="right">
                  <TrendingDownOutlinedIcon style={{color: 'red'}} />
                </div>
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
        ) : (
          <> </>
        )
      }
    </div>
  );
};
