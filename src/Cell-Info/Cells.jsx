import React from 'react'
import { Link } from 'react-router-dom'

const Cells = () => {
    return (
        <div className='w-full h-[100vh] flex flex-col flex-wrap justify-center items-center'>
            <div className='w-1/2 flex flex-row flex-wrap gap-10 justify-center'>
                <Link to="/cell" className="flex justify-center items-center rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.25)] p-12 font-extrabold text-2xl text-red-500 hover:shadow-red-500">
                    Cell 1
                </Link>
                <Link to="/cell" className="flex justify-center items-center rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.25)] p-12 font-extrabold text-2xl text-red-500 hover:shadow-red-500">
                    Cell 1
                </Link>
                <Link to="/cell" className="flex justify-center items-center rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.25)] p-12 font-extrabold text-2xl text-orange-500 hover:shadow-orange-500">
                    Cell 1
                </Link>
                <Link to="/cell" className="flex justify-center items-center rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.25)] p-12 font-extrabold text-2xl text-orange-500 hover:shadow-orange-500">
                    Cell 1
                </Link>
                <Link to="/cell" className="flex justify-center items-center rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.25)] p-12 font-extrabold text-2xl text-green-500 hover:shadow-green-500">
                    Cell 1
                </Link>
                <Link to="/cell" className="flex justify-center items-center rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.25)] p-12 font-extrabold text-2xl text-green-500 hover:shadow-green-500">
                    Cell 1
                </Link>
            </div>
        </div>
    )
}

export default Cells