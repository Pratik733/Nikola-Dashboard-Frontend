import React from 'react'
import { Link } from 'react-router-dom'
import FaultButton from '../components/FaultButton'

const BatteryFaults = () => {
    const data = {
        pk_vol_h_1: true,
        pk_vol_l_1: true,
        ch_tmp_h_al_1: true,
        di_tmp_h_al_1: true,
        ch_fet_tmp_h: true,
        ch_fet_ad_fl: true,
        di_fet_ad_fl: true,
        ch_fet_br_fl: true,
        di_fet_br_fl: true
    }

    return (
        <div className="w-full">
            <div className="home">
                <div className="w-full relative h-auto overflow-hidden bg-white border-0  flex items-center flex-col justify-center">
                    {/* <img src="/images/landscape/6.svg" className="absolute object-cover w-full h-full" /> */}
                    <div className="container relative z-10 flex items-center">
                        <div className="relative z-10 flex flex-col items-center w-full">
                            <h1 className="font-bold leading-tight text-center text-black text-7xl">
                                Battery Faults
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="mx-auto bg-gray-100 rounded-lg shadow p-6">
                    <div className="container">
                        <FaultButton show={data.pk_vol_h_1} label={'Overcharging'} />
                        <FaultButton show={data.pk_vol_l_1} label={'Overdischarging'} />
                        <FaultButton show={data.ch_tmp_h_al_1 || data.di_tmp_h_al_1 || data.ch_fet_tmp_h} label={'Overheating'} />
                        <FaultButton show={true} label={'External short circuits'} />
                        {
                            true ? (
                                <Link className="widget hover:bg-[#2691d9]" to={'/Battery-faults/internal-short-circuits'}>
                                    <div className="left">
                                        <span className="title">Fault</span>
                                        <p className="num">Internal short circuits</p>
                                    </div>
                                    <div className="right">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff0000" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </Link>
                            ) :
                                (<></>)
                        }
                        <FaultButton show={true} label={'Electrolyte leakage'} />
                        <FaultButton show={true} label={'Swelling'} />
                        <FaultButton show={true} label={'Accelerated'} />
                        <FaultButton show={true} label={'Degradation'} />
                        <FaultButton show={true} label={'thermal runaway'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BatteryFaults