import React, { useState, useEffect } from "react";
import "./Cell-info.css";
import { MyResponsiveLine } from "../components/charts/LineGraph";
import { Histogram } from "../components/charts/Histogram";
import { MyResponsivePie } from "../components/charts/Pie";
import { celldata } from "./celldata";

export default function CellInfo() {
  const [id, setId] = useState(celldata[0].id);
  const [data, setdata] = useState(celldata);
  const [value, setValue] = useState("");
  const [modal, setModal] = useState(false);
  const [modaldata, setmodaldata] = useState("");
  const modaldom = document.getElementsByClassName("modal");

  const toggleModel = async (data) => {
    if (modal) {
      setModal(false);
      setTimeout(() => {
        modaldom[0].style.display = "none";
      }, 500);
      modaldom[0].style.opacity = 0;
      console.log("modal closed");
    } else {
      let temp = await JSON.stringify(data.data);
      setmodaldata(temp);
      setModal(true);
      modaldom[0].style.display = "block";
      setTimeout(() => {
        modaldom[0].style.opacity = 1;
      }, 50);
      console.log("modal opened");
    }
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    setId(searchTerm);
  };

  useEffect(() => {
    const filteredData = celldata.filter((obj) => obj.id == id);
    setdata(filteredData);
    console.log(filteredData);
  }, [id]);

  return (
    <>
      <div className="modal" id="modal-one" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-header">
            <h2>Hidden data</h2>
            <a className="btn-close" onClick={toggleModel}>
              ×
            </a>
          </div>
          <div className="modal-body">
            <p >{modaldata}</p>
          </div>
          <div className="modal-footer">
            <a className="btn" onClick={toggleModel}>
              close
            </a>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center">
        <div className="w-full flex flex-row justify-between p-4">
          <div className="relative flex flex-row border-l-black" >
            <span className="celltitle">CELLID</span>
            <div className="search-container">
              <div className="search-inner">
                <input
                  placeholder="Search By Cell ID"
                  type="text"
                  value={value}
                  onChange={onChange}
                  onSubmit={() => setId(value)}
                />
              </div>
              <div className="dropdown">
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
              </div>
            </div>
          </div>
          <form className="cellform">
            <select onChange={(e) => setId(e.target.value)} value={id}>
              {celldata.map((cellid) => (
                <option key={cellid.id}>{cellid.id}</option>
              ))}
            </select>
          </form>
        </div>
        <ul className="w-full flex flex-row flex-wrap justify-center">
          <li className="w-11/12 md:w-2/5 flex flex-col justify-center rounded-lg shadow-[0_0_35px_rgba(0,0,0,0.25)] p-1 m-3">
            <div className="item-title">Cell Voltage</div>
            <div className="h-80 w-full">
              <MyResponsiveLine
                data={data[0].data.CellVoltage}
                toggle={toggleModel}
              />
            </div>
          </li>
          <li className="w-11/12 md:w-2/5 flex flex-col justify-center rounded-lg shadow-[0_0_35px_rgba(0,0,0,0.25)] p-1 m-3" >
            <div className="item-title">Cell Current</div>
            <div className="h-80 w-full">
              <Histogram
                data={data[0].data.CellCurrent}
                toggle={toggleModel}
              />
            </div>
          </li>
          <li className="w-11/12 md:w-2/5 flex flex-col justify-center rounded-lg shadow-[0_0_35px_rgba(0,0,0,0.25)] p-1 m-3" >
            <div className="item-title">Cell Temperature</div>
            <div className="h-80 w-full">
              <MyResponsiveLine
                data={data[0].data.CellTemperature}
                toggle={toggleModel}
              />
            </div>
          </li>
          <li className="w-11/12 md:w-2/5 flex flex-col justify-center rounded-lg shadow-[0_0_35px_rgba(0,0,0,0.25)] p-1 m-3" >
            <div className="item-title">Cell DOD</div>
            <div className="h-80 w-full">
              <Histogram data={data[0].data.CellDOD} toggle={toggleModel} />
            </div>
          </li>
          <li className="w-11/12 md:w-2/5 flex flex-col justify-center rounded-lg shadow-[0_0_35px_rgba(0,0,0,0.25)] p-1 m-3" >
            <div className="item-title">Cell SOC</div>
            <div className="h-80 w-full">
              <MyResponsivePie
                data={data[0].data.CellSOC}
                toggle={toggleModel}
              />
            </div>
          </li>
          <li className="w-11/12 md:w-2/5 flex flex-col justify-center rounded-lg shadow-[0_0_35px_rgba(0,0,0,0.25)] p-1 m-3" >
            <div className="item-title">Cell SOH</div>
            <div className="h-80 w-full">
              <MyResponsivePie
                data={data[0].data.CellSOH}
                toggle={toggleModel}
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
