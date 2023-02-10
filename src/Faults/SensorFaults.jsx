import React from 'react'
import FaultButton from '../components/FaultButton'

export const SensorFaults = () => {
    const data = {
        vols_mo_fl: true,
        cur_sen_mo_fl: true,
        tmps_mo_fl: true
    }
    return (
        <div className="w-full">
            <div className="home">
                <div className="w-full relative h-auto overflow-hidden bg-white border-0  flex items-center flex-col justify-center">
                    {/* <img src="/images/landscape/6.svg" className="absolute object-cover w-full h-full" /> */}
                    <div className="container relative z-10 flex items-center">
                        <div className="relative z-10 flex flex-col items-center w-full">
                            <h1 className="font-bold leading-tight text-center text-black text-7xl">
                                Sensor Faults
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="mx-auto bg-gray-100 rounded-lg shadow p-6">
                    <div className="container">
                        <FaultButton show={data.vols_mo_fl} label={'Voltage sensor faults'} />
                        <FaultButton show={data.cur_sen_mo_fl} label={'Current sensor faults'} />
                        <FaultButton show={data.tmps_mo_fl} label={'temperature sensor faults.'} />
                        <FaultButton show={true} label={'Gas Sensor Faults'} />
                    </div>
                </div>
            </div>
        </div>
    )
}
