import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// const values = {
//   Batt_ID: "Batt1",//varchar
//   cel_bal_st_vol: "", //int
//   cel_bal_st_diff_vol: "", //float
//   r_cap: "", //int
//   r_cell_vol: "", //float
//   sc: "", //int
//   curr_sam_res: "", //int
//   t_ch: "", //float
//   t_di: "", //float
//   no_of_aq_bod: "", //int
//   b13_cel_no: "", //int
//   b13_ntc_no: "", //int
//   fiw_in_no: "", //int
//   bty_code: "", //text
//   ip: "", //text
//   soc: "", //int
//   sl_ti: "", //int
//   cw: "", //int
//   bpd: "", //date
//   bty_typ: "", //text
//   bom: "", //int
//   cvh: "", //float
//   cvl: "", //float
//   svh: "", //float
//   svl: "", //float
//   di_cur_h: "2321.22", //float
//   ch_cur_h: "44.55", //float
//   vol_diff_h: "", //float
//   tmp_difff_h: "",//int
//   soc_h: "", //int
//   soc_l: "", //int
//   ch_tmp_h: "", //int 
//   ch_tmp_l: "", //int
//   di_tmp_h: "", //int 
//   di_tmp_l: "", //int
// }

export default function SetParameters() {
  const BatteryId = "Batt1";

  const [user, setUser] = useState({});
  const getData = async () => {
    const response = await fetch(`http://13.233.23.198`, {
      method: "GET",
    });
    const data = await response.json();
    setUser(data);
    console.log(data.data);
  };

  const sendData = async (values) => {
    const response = await fetch(`http://13.233.23.198/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    console.log(data);
  }



  // useEffect(() => {
  //   getData();
  //   sendData(values)
  // }, []);
  return (
    <section className="text-gray-600 body-font ">
      <div className="container w-[70%] px-5 py-24 mx-auto ">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Set Parameters</h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, dignissimos</p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="md:w-1/2 p-4 ">
            <div className="border border-gray-200 p-6 rounded-lg bg-white shadow-xl">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M.75 9.75a3 3 0 013-3h15a3 3 0 013 3v.038c.856.173 1.5.93 1.5 1.837v2.25c0 .907-.644 1.664-1.5 1.838v.037a3 3 0 01-3 3h-15a3 3 0 01-3-3v-6zm19.5 0a1.5 1.5 0 00-1.5-1.5h-15a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5v-6z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2"><Link to={`/Battery-Characteristics/${BatteryId}`}>Battery Characteristics</Link></h2>
              <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
            </div>
          </div>
          <div className="md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg bg-white shadow-xl">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2"> <Link to={`/temperature-protection/${BatteryId}`}> Temperature Protection </Link> </h2>
              <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
            </div>
          </div>
          <div className="md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg bg-white shadow-xl">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2"><Link to={`/voltage-protection/${BatteryId}`}>Battery Voltage Protection</Link></h2>
              <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
            </div>
          </div>
          <div className="md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg bg-white shadow-xl">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2"><Link to={`/current-protection/${BatteryId}`}>Current Protection</Link></h2>
              <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
