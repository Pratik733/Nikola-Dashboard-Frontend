import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Popup from './Popup';
import toast from "react-hot-toast"

export default function VoltProtection() {
  const { id } = useParams();
  const notifyEdit = () => {
    toast('Battery Characteristics Updated', {
      icon: '📝',
    })
  }
  const [form1, setform1] = useState(false);
  const [form2, setform2] = useState(false);
  const [form3, setform3] = useState(false);
  const [form4, setform4] = useState(false);
  const [form5, setform5] = useState(false);
  const [form6, setform6] = useState(false);

  const [data, setData] = useState({});

  const getData = async () => {
    const response = await fetch(`http://13.233.23.198/`, {
      method: "GET",
    });
    const tempdata = await response.json();
    setData({ ...tempdata.data.find(obj => obj.Batt_ID === id) });
    console.log(tempdata);
  };

  useEffect(() => {
    getData();
  }, []);

  const sendData = async (values) => {
    const response = await fetch(`http://13.233.23.198/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    console.log("Response : ", data);
    notifyEdit();
  }

  const handlesubmit = (e) => {
    const form = document.getElementById("myForm");
    e.preventDefault();
    const data = new FormData(form);
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
    // console.log(json);
    sendData(json)
  }

  return (
    <form className="text-gray-600 body-font relative" onSubmit={handlesubmit} id='myForm'>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Battery Voltage Protection</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto bg-[#2691d92b] rounded-lg shadow-xl p-6">
          <div className="flex flex-wrap -m-2">
            <div className="px-2 py-4 w-full md:w-1/2 md:px-8">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm md:text-base font-semibold text-gray-600">Rated cell voltage</label>
                <input type="number" step={0.001} id="name" defaultValue={data.r_cell_vol} name="r_cell_vol" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="px-2 py-4 w-full md:w-1/2 md:px-8">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm md:text-base font-semibold text-gray-600">cell Balance start voltage</label>
                <input type="number" step={0.001} id="email" defaultValue={data.cel_bal_st_vol} name="cel_bal_st_vol" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="px-2 py-4 w-full md:w-1/2 md:px-8">
              <div className="relative">
                <label htmlFor="soc_h" className="leading-7 text-sm md:text-base font-semibold text-gray-600">Cell OverVoltage</label>
                <button onClick={() => setform1(true)} className="shadow bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 font-normal  hover:border-transparent py-2 px-4 rounded w-full" type="button">
                  Set Cell OverVoltage
                </button>
              </div>
            </div>
            <Popup step={0.001} show={form1} setshow={setform1} stage_1_name={"cvh"} stage_2_name={"Cell_OverVoltage_2nd"} value1={data.cvh} value2={""} />


            <div className="px-2 py-4 w-full md:w-1/2 md:px-8">
              <div className="relative">
                <label htmlFor="soc_h" className="leading-7 text-sm md:text-base font-semibold text-gray-600">Cell UnderVoltage</label>
                <button onClick={() => setform2(true)} className="shadow bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 font-normal  hover:border-transparent py-2 px-4 rounded w-full" type="button">
                  Set Cell UnderVoltage
                </button>
              </div>
            </div>
            <Popup step={0.001} show={form2} setshow={setform2} stage_1_name={"cvl"} stage_2_name={"Cell_UnderVoltage_2nd"} value1={data.cvl} value2={""} />


            <div className="px-2 py-4 w-full md:w-1/2 md:px-8">
              <div className="relative">
                <label htmlFor="soc_h" className="leading-7 text-sm md:text-base font-semibold text-gray-600">Battery Pack OverVoltage</label>
                <button onClick={() => setform3(true)} className="shadow bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 font-normal  hover:border-transparent py-2 px-4 rounded w-full" type="button">
                  Set Battery Pack OverVoltage
                </button>
              </div>
            </div>
            <Popup step={0.001} show={form3} setshow={setform3} stage_1_name={"svh"} stage_2_name={"Battery_Pack_OverVoltage_2nd"} value1={data.svh} value2={""} />

            <div className="px-2 py-4 w-full md:w-1/2 md:px-8">
              <div className="relative">
                <label htmlFor="soc_h" className="leading-7 text-sm md:text-base font-semibold text-gray-600">Power Off Voltage</label>
                <button onClick={() => setform4(true)} className="shadow bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 font-normal  hover:border-transparent py-2 px-4 rounded w-full" type="button">
                  Set Power Off Voltage
                </button>
              </div>
            </div>
            <Popup step={0.001} show={form4} setshow={setform4} stage_1_name={"Power_Off_Voltage_1st"} stage_2_name={"Power_Off_Voltage_2nd"} value1={""} value2={""} />


            <div className="px-2 py-4 w-full md:w-1/2 md:px-8">
              <div className="relative">
                <label htmlFor="soc_h" className="leading-7 text-sm md:text-base font-semibold text-gray-600">Battery Pack UnderVoltage</label>
                <button onClick={() => setform5(true)} className="shadow bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 font-normal  hover:border-transparent py-2 px-4 rounded w-full" type="button">
                  Set Battery Pack UnderVoltage
                </button>
              </div>
            </div>
            <Popup step={0.001} show={form5} setshow={setform5} stage_1_name={"svl"} stage_2_name={"Battery_Pack_UnderVoltage_2nd"} value1={data.svl} value2={""} />


            <div className="px-2 py-4 w-full md:w-1/2 md:px-8">
              <div className="relative">
                <label htmlFor="soc_h" className="leading-7 text-sm md:text-base font-semibold text-gray-600">Voltage Difference between Cells</label>
                <button onClick={() => setform6(true)} className="shadow bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 font-normal  hover:border-transparent py-2 px-4 rounded w-full" type="button">
                  Voltage Difference between Cells
                </button>
              </div>
            </div>
            <Popup step={0.001} show={form6} setshow={setform6} stage_1_name={"Voltage_Difference_between_Cells_1st"} stage_2_name={"Voltage_Difference_between_Cells_2nd"} value1={""} value2={""} />


            <div className="p-2 w-full">
              <button type='submit' className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Update</button>
            </div>

          </div>
        </div>
      </div>
    </form>
  )
}
