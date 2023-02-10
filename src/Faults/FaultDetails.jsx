import React from 'react'
import { useParams } from 'react-router-dom'

const FaultDetails = () => {
    const { type } = useParams();
    return (
        <div className='w-full h-[100vh] flex items-center justify-center'>
            <div className='font-bold text-5xl'>
                {type} Fault details
            </div>
        </div>
    )
}

export default FaultDetails