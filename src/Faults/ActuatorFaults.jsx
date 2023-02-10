import React from 'react'
import FaultButton from '../components/FaultButton'

const ActuatorFaults = () => {
    return (
        <div className="w-full">
            <div className="home">
                <div className="w-full relative h-auto overflow-hidden bg-white border-0  flex items-center flex-col justify-center">
                    {/* <img src="/images/landscape/6.svg" className="absolute object-cover w-full h-full" /> */}
                    <div className="container relative z-10 flex items-center">
                        <div className="relative z-10 flex flex-col items-center w-full">
                            <h1 className="font-bold leading-tight text-center text-black text-7xl">
                                Actuator Faults
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="mx-auto bg-gray-100 rounded-lg shadow p-6">
                    <div className="container">
                        <FaultButton show={true} label={'Terminal connector '} />
                        <FaultButton show={true} label={'cooling system faults '} />
                        <FaultButton show={true} label={'Controller area network bus faults '} />
                        <FaultButton show={true} label={'High voltage contactor faults '} />
                        <FaultButton show={true} label={'Fuse faults '} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActuatorFaults