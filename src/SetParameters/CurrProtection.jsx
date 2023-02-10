import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Popup from './Popup';
import toast from "react-hot-toast"
export default function CurrProtection() {
  const { id } = useParams();
  const notifyEdit = () => {
    toast('Battery Characteristics Updated', {
      icon: '📝',
    })
  }
  const [form1, setform1] = useState(false);
  const [form2, setform2] = useState(false);

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
    json["email"] = "test@gmail.com";
    json["password"] = "admin";
    // console.log(json);
    sendData(json)
  }

  return (
    <form className="text-gray-600 body-font relative" id='myForm' onSubmit={handlesubmit}>
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Current Protection</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto bg-[#2691d92b] rounded-lg shadow-xl p-6">
          <div className="flex flex-wrap -m-2">
            <div className="px-2 py-4 w-full md:w-1/2 md:px-8">
              <div className="relative">
                <label htmlFor="ChargeOvercurrent" className="leading-7 text-sm md:text-base font-semibold text-gray-600">Charge overcurrent</label>
                <button onClick={() => setform1(true)} className="shadow bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 font-normal  hover:border-transparent py-2 px-4 rounded w-full" type="button">
                  Set Charge overcurrent
                </button>
              </div>
            </div>
            <Popup show={form1} setshow={setform1} stage_1_name={"ch_cur_h"} stage_2_name={"Charge_overcurrent_2nd"} value1={data.ch_cur_h} value2={""} />

            <div className="px-2 py-4 w-full md:w-1/2 md:px-8">
              <div className="relative">
                <label htmlFor="DischargeOvercurrent" className="leading-7 text-sm md:text-base font-semibold text-gray-600">Discharge Overcurrent</label>
                <button onClick={() => setform2(true)} className="shadow bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 font-normal  hover:border-transparent py-2 px-4 rounded w-full" type="button">
                  Set Discharge Overcurrent
                </button>
              </div>
            </div>
            <Popup show={form2} setshow={setform2} stage_1_name={"di_cur_h"} stage_2_name={"Discharge_Overcurrent_2nd"} value1={data.di_cur_h} value2={""} />


            <div className="px-2 py-4 w-full md:w-1/2 md:px-8">
              <div className="relative">
                <label htmlFor="ChargeUndertemp" className="leading-7 text-sm md:text-base font-semibold text-gray-600">Short Circuit Current </label>
                <input type="number" step={0.001} id="email" name="sc" defaultValue={data.sc} className="w-full bg-white border border-gray-300 rounded focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="px-2 py-4 w-full md:w-1/2 md:px-8">
              <div className="relative">
                <label htmlFor="DischargeUndertemp" className="leading-7 text-sm md:text-base font-semibold text-gray-600">Balance Current</label>
                <input type="number" step={0.001} id="email" name="Balance_Current" className="w-full bg-white border border-gray-300 rounded focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>

            <div className="p-2 w-full">
              <button type='submit' className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Update</button>
            </div>

          </div>
        </div>
      </div>
    </form>
  )
}
