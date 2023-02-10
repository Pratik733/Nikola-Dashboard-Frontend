import React, { useState } from 'react'
import toast from "react-hot-toast"


export default function Popup({ show, stage_1_name, stage_2_name, setshow, value1, value2, step }) {
    const [stage1, setStage1] = useState(null);
    const [stage2, setStage2] = useState(null);
    const notifyEditErr = (err) => toast.error(err);
    const handlesave = () => {
        if (String(stage1).split(".")[1] && String(stage1).split(".")[1].length > 3) {
            notifyEditErr("First Stage must have at most 3 decimal points.");
            return;
        }
        if (String(stage1).split(".")[1] && String(stage1).split(".")[1].length > 0 && step == 1) {
            notifyEditErr("no decimals allowed in numeric");
            return;
        }
        if (String(stage2).split(".")[1] && String(stage2).split(".")[1].length > 3) {
            notifyEditErr("Second Stage must have at most 3 decimal points.");
            return;
        }
        if (String(stage2).split(".")[1] && String(stage2).split(".")[1].length > 0 && step == 1) {
            notifyEditErr("no decimals allowed in numeric");
            return;
        }
        setshow(false);
    }
    return (
        <div className={`${show ? 'flex' : 'hidden'} fixed w-full h-full z-50 top-0 left-0 bg-black/50`}>
            <div className="fixed inset-0 h-72 md:h-56 top-[50%] left-[50%] transform -translate-y-1/2 -translate-x-1/2  w-full flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow sm:px-6 md:px-8 lg:px-10" >
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                            First Stage
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input name={stage_1_name} type="number" step={step} onChange={(e) => setStage1(e.target.value)} defaultValue={value1} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                            Second Stage
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input name={stage_2_name} type="number" step={step} onChange={(e) => setStage2(e.target.value)} defaultValue={value2} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" />
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button onClick={handlesave} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
