import React from 'react'
import { Link } from 'react-router-dom'
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";

const FaultButton = ({ show, label }) => {
    return (
        show ? (
            // <div className={`px-2 py-4 w-full md:w-1/2 md:px-8 `}>
            //     <div className="relative">
            //         <Link to={`/fault-details/${label}`}>
            //         <button className="shadow bg-white border border-gray-200 hover:bg-blue-500 hover:text-white font-bold  hover:border-transparent py-2 px-4 rounded w-full" type="button">
            //             {label}
            //         </button>
            //         </Link>
            //     </div>
            // </div>
            <Link className="widget hover:bg-[#2691d9]" to={`/fault-details/${label}`}>
                <div className="left">
                    <span className="title">Fault</span>
                    <p className="num">{label}</p>
                </div>
                <div className="right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff0000" className="w-6 h-6">
                        <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                    </svg>
                </div>
            </Link>

        ) :
            (<></>)
    )
}

export default FaultButton