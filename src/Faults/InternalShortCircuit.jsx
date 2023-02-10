import React from 'react'
import { Link } from 'react-router-dom'
import FaultButton from '../components/FaultButton'

const InternalShortCircuit = () => {

    return (
        <div className="w-full">
            <div className="home">

                <div className="w-full relative h-auto overflow-hidden bg-white border-0  flex items-center flex-col justify-center">
                    {/* <img src="/images/landscape/6.svg" className="absolute object-cover w-full h-full" /> */}
                    <div className="container relative z-10 flex items-center">
                        <div className="relative z-10 flex flex-col items-center w-full">
                            <h1 className="font-bold leading-tight text-center text-black text-7xl">
                                Internal short circuits
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="mx-auto bg-gray-100 rounded-lg shadow p-6">
                    <div className="container">
                        <FaultButton show={true} label={'Manufacturing defects'} />
                        <FaultButton show={true} label={'Overheating'} />
                        <FaultButton show={true} label={'Mechanical collisions'} />
                        <FaultButton show={true} label={'Penetration by metal dendrites'} />
                        <FaultButton show={true} label={'Mechanical punctures'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InternalShortCircuit

