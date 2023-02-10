import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Popup from './Popup';
import toast from "react-hot-toast"

export default function BattCharacteristics() {
  const { id } = useParams();
  const [soch, setSoch] = useState(false);
  const [socl, setSocl] = useState(false);
  const [date, setDate] = useState("");
  const [data, setData] = useState({});
  const [isChecked, setIsChecked] = useState(false);

  const notifyEdit = () => {
    toast('Battery Characteristics Updated', {
      icon: '📝',
    })
  }

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`http://13.233.23.198/`, {
        method: "GET",
      });
      const tempdata = await response.json();
      setData({ ...tempdata.data.find(obj => obj.Batt_ID === id) });
      console.log(tempdata);
    };
    getData();
  }, []);

  useEffect(() => {
    setDate(getDate(data.bpd));
    console.log(date);
    setIsChecked(data.bom == 1);
  }, [data])
  // setData({...tempdata.data.find(obj => obj.Batt_ID === id)});
  // console.log(data);



  const sendData = async (values) => {
    const response = await fetch(`http://13.233.23.198/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    notifyEdit();
    console.log("Response : ", data);
  }

  const handlesubmit = (e) => {
    const form = document.getElementById("myForm");
    e.preventDefault();
    const data = new FormData(form);
    // console.log(data);
    const json = { Batt_ID: id };
    for (const [key, value] of data.entries()) {
      if (value != "") {
        try {
          json[key] = JSON.parse(value);
        } catch (error) {
          json[key] = value;
        }
      }
    }
    json["email"] = "test@gmail.com";
    json["password"] = "admin";
    // console.log(json['bom']);
    json["bom"] = json["bom"] == 'on' ? 1 : 0;
    // let date = new Date(json["bpd"]);
    // date = date.toString();
    // json["bpd"] = date.slice(0,date.search('GMT')+3);
    console.log(json)
    sendData(json)
  }

  const getDate = (date) => {
    var newdate = new Date(date);
    var formattedDate =
      newdate.getFullYear() +
      "-" +
      ("0" + (newdate.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + newdate.getDate()).slice(-2);
    return formattedDate;
  }



  return data ? (
    <form className="text-gray-600 body-font relative " onSubmit={handlesubmit} id="myForm">
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-col text-center w-full mb-12 ">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Battery Characteristics</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto bg-[#2691d92b] rounded-lg shadow-xl p-6">
          <div className="flex flex-wrap -m-2">
            <div className="px-2 py-2 w-full md:w-1/2  md:px-8">
              <div className="relative">
                <label htmlFor="b_type" className="leading-7 text-sm md:text-base font-semibold text-gray-600">Type of Battery</label>
                <select className="block px-2 py-2 md:px-8 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-28 md:w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="bty_typ">
                  <option >
                    Select an option
                  </option>
                  <option value="LI-ION" selected={data.bty_typ == 'LI-ION'}>
                    LI-ION
                  </option>
                  <option value="LIFEPO4" selected={data.bty_typ == 'LIFEPO4'}>
                    LIFEPO4
                  </option>
                  <option value="LTO" selected={data.bty_typ == 'LTO'}>
                    LTO
                  </option>
                </select>
              </div>
            </div>
            <div className="px-2 py-2 w-full md:w-1/2 md:px-8">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm md:text-base font-semibold text-gray-600">Battery Manufacturing Date </label>

                <div className="relative max-w-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                  </div>
                  <input type="date" name="bpd" value={date} onChange={(e) => setDate(e.target.value)} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 " />
                </div>
              </div>
            </div>
            <div className="px-2 py-2 w-full md:w-1/2 md:px-8">
              <div className="relative">
                <label htmlFor="r_capacity" className="leading-7 text-sm md:text-base font-semibold text-gray-600 ">Rated capacity</label>
                <input type="number" step={1} defaultValue={data.r_cap} name="r_cap" className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="px-2 py-2 w-full md:w-1/2 md:px-8">
              <div className="relative">
                <label htmlFor="soc_h" className="leading-7 text-sm md:text-base font-semibold text-gray-600">SOC High</label>
                <button onClick={() => setSoch(true)} className="shadow bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 font-normal  hover:border-transparent py-2 px-4 rounded w-full" type="button">
                  Set SOC High
                </button>
              </div>
            </div>

            <Popup show={soch} setshow={setSoch} stage_1_name={"soc_h"} stage_2_name={"soc_h_2nd"} value1={data.soc_h} value2={""} step={1} />

            <div className="px-2 py-2 w-full md:w-1/2 md:px-8">
              <div className="relative">
                <label htmlFor="cell_count" className="leading-7 text-sm md:text-base font-semibold text-gray-600">Cell Count</label>
                <input type="number" step={1} name="b13_cel_no" defaultValue={data.b13_cel_no} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="px-2 py-2 w-full md:w-1/2 md:px-8">
              <div className="relative">
                <label htmlFor="soc_h" className="leading-7 text-sm md:text-base font-semibold text-gray-600">SOC Low</label>
                <button onClick={() => setSocl(true)} className="shadow bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 font-normal  hover:border-transparent py-2 px-4 rounded w-full" type="button">
                  Set SOC Low
                </button>
              </div>
            </div>

            <Popup show={socl} setshow={setSocl} stage_1_name={"soc_l"} stage_2_name={"soc_l_2nd"} value1={data.soc_l} value2={""} step={1} />

            <div className="px-2 py-2 w-full md:w-1/2 md:px-8">
              <div className="relative">
                <label htmlFor="batt_cell_dim" className="leading-7 text-sm md:text-base font-semibold text-gray-600">Battery Cell Dimension</label>
                <input type="text" name="batt_cell_dim" defaultValue={""} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="px-2 py-2 w-full md:w-1/2 md:px-8">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm md:text-base font-semibold text-gray-600">battery operation mode</label>
                <div className="mb-3">
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} name="bom" className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                    <label htmlFor="Blue" className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer">
                    </label>
                  </div>
                  <span className="font-medium text-gray-400">

                  </span>
                </div>
              </div>
            </div>
            <div className="px-2 py-2 w-full md:w-1/2 md:px-8">
              <div className="relative">
                <label htmlFor="trig_volt" className="leading-7 text-sm md:text-base font-semibold text-gray-600">Balance Trig Voltage </label>
                <input type="number" step={1} defaultValue={data.cel_bal_st_diff_vol} name="cel_bal_st_diff_vol" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="px-2 py-2 w-full md:w-1/2 md:px-8">
              <div className="relative">
                <label htmlFor="slp_time" className="leading-7 text-sm md:text-base font-semibold text-gray-600">sleep time</label>
                <input type="number" step={0.001} name="sl_ti" defaultValue={data.sl_ti} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>

            <div className="p-2 w-full">
              <button type='submit' className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Update</button>
            </div>

          </div>
        </div>
      </div>
    </form>
  ) : (<div>loading</div>)
}
