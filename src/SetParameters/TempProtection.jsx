import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import toast from "react-hot-toast"
import Popup from './Popup';
export default function TempProtection() {
  const { id } = useParams();

  const [form1, setform1] = useState(false);
  const [form2, setform2] = useState(false);
  const [form3, setform3] = useState(false);
  const [form4, setform4] = useState(false);
  const [form5, setform5] = useState(false);
  const [form6, setform6] = useState(false);

  const [data, setData] = useState({});
  const notifyEdit = () => {
    toast('Temperature Protection Updated', {
      icon: '📝',
    })
  }
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
    <form className="text-gray-600 body-font relative" onSubmit={handlesubmit} id="myForm">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Temperature Protection</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto bg-[#2691d92b] rounded-lg shadow-xl p-6">
          <div className="flex flex-wrap -m-2">
            <div className="px-2 py-4 w-full md:w-1/2 md:px-8">
              <div className="relative">
                <label className="leading-7 text-sm md:text-base font-semibold text-gray-600">Charge Overtemp</label>
                <button onClick={() => setform1(true)} className="shadow bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 font-normal  hover:border-transparent py-2 px-4 rounded w-full" type="button">
                  Set Charge Overtemp
                </button>
              </div>
            </div>

            <Popup step={0.001} show={form1} setshow={setform1} stage_1_name={"ch_tmp_h"} stage_2_name={"Charge_Overtemp_2nd"} value1={data.ch_tmp_h} value2={""}/>



            <div className="px-2 py-4 w-full md:w-1/2 md:px-8">
              <div className="relative">
                <label className="leading-7 text-sm md:text-base font-semibold text-gray-600">Discharge Overtemp</label>
                <button onClick={() => setform2(true)} className="shadow bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 font-normal  hover:border-transparent py-2 px-4 rounded w-full" type="button">
                  Set Discharge Overtemp
                </button>
              </div>
            </div>

            <Popup step={0.001} show={form2} setshow={setform2} stage_1_name={"di_tmp_h"} stage_2_name={"Discharge_Overtemp_2nd"} value1={data.di_tmp_h} value2={""} />



            <div className="px-2 py-4 w-full md:w-1/2 md:px-8">
              <div className="relative">
                <label className="leading-7 text-sm md:text-base font-semibold text-gray-600">Charge Undertemp</label>
                <button onClick={() => setform3(true)} className="shadow bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 font-normal  hover:border-transparent py-2 px-4 rounded w-full" type="button">
                  Set Charge Undertemp
                </button>
              </div>
            </div>

            <Popup step={0.001} show={form3} setshow={setform3} stage_1_name={"ch_tmp_l"} stage_2_name={"Charge_Undertemp_2nd"} value1={data.ch_tmp_l} value2={""}/>



            <div className="px-2 py-4 w-full md:w-1/2 md:px-8">
              <div className="relative">
                <label className="leading-7 text-sm md:text-base font-semibold text-gray-600">Discharge Undertemp</label>
                <button onClick={() => setform4(true)} className="shadow bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 font-normal  hover:border-transparent py-2 px-4 rounded w-full" type="button">
                  Set Discharge Undertemp
                </button>
              </div>
            </div>

            <Popup step={0.001} show={form4} setshow={setform4} stage_1_name={"di_tmp_l"} stage_2_name={"Discharge_Undertemp_2nd"} value1={data.di_tmp_l} value2={""} />


            <div className="px-2 py-4 w-full md:w-1/2 md:px-8">
              <div className="relative">
                <label className="leading-7 text-sm md:text-base font-semibold text-gray-600">Max Temp Difference</label>
                <button onClick={() => setform5(true)} className="shadow bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 font-normal  hover:border-transparent py-2 px-4 rounded w-full" type="button">
                  Set Max Temp Difference
                </button>
              </div>
            </div>

            <Popup step={0.001} show={form5} setshow={setform5} stage_1_name={"tmp_difff_h"} stage_2_name={"Max_Temp_Difference_2nd"} value1={data.tmp_difff_h} value2={""} />



            <div className="px-2 py-4 w-full md:w-1/2 md:px-8">
              <div className="relative">
                <label className="leading-7 text-sm md:text-base font-semibold text-gray-600">MOSFET Temp Protect</label>
                <button onClick={() => setform6(true)} className="shadow bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 font-normal  hover:border-transparent py-2 px-4 rounded w-full" type="button">
                  Set MOSFET Temp Protect
                </button>
              </div>
            </div>

            <Popup step={0.001} show={form6} setshow={setform6} stage_1_name={"MOSFET_Temp_Protect_1st"} stage_2_name={"MOSFET_Temp_Protect_2nd"} value1={""} value2={""} />

            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Update</button>
            </div>

          </div>
        </div>
      </div>
    </form>
  )
}
