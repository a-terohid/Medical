"use client"

import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";


const Planes = () => {

    const [ plan , setPlan] = useState("Annual")

    const planHandler = (Plan) =>  setPlan(Plan)

    return (
        <div className=" container hidden lg:flex flex-col py-20" >
                <div className="flex justify-between items-center">
                    <div className="" >
                        <p className="text-Medium-14 text-primary-800 bg-primary-100 py-1 px-4 rounded-full w-fit">What you’ll get</p>
                        <h3 className="text-Bold-40 mt-3">Compare all features</h3>
                    </div>
                    <p className="text-Regular-16 text-Secondinary-400 w-1/2">Experience transparent and tailored pricing solutions with our cutting-edge medical dashboard. Your path to cost-effective healthcare starts here.</p>
                </div>
                <div className="mt-20 grid grid-cols-3 w-full border border-Secondinary-200 rounded-2xl overflow-hidden" >
                    <div className=" p-6">
                        <div className="mb-8 border-b border-b-Secondinary-200 h-64">
                            <h3 className="text-Medium-24 mb-6">Select you plan</h3>  
                            <div className="bg-Secondinary-100 p-3 rounded-xl flex items-center text-Bold-14">
                                <button onClick={() => planHandler("Annual")} className={` w-1/2 py-3 px-4 ${plan === "Annual" ? "bg-primary-500 text-primary-0 rounded-lg" : null}`} >Annual (20% OFF)</button>
                                <button onClick={() => planHandler("Monthly")} className={` w-1/2 py-3 px-4 ${plan === "Monthly" ? "bg-primary-500 text-primary-0 rounded-lg" : null}`} >Monthly</button>
                            </div>  
                        </div>                        
                        <div>
                            <ul className="text-Semibold-18 flex flex-col gap-y-6">
                                <li>Patient Overview</li>
                                <li>Appointment Management</li>
                                <li>Billing and Invoicing</li>
                                <li>Health Records</li>
                                <li>Prescription Management</li>
                                <li>Telemedicine Integration</li>
                                <li>Health and Wellness Tracking</li>
                                <li>Secure Messaging</li>
                                <li>Analytics and Reporting</li>
                                <li>Care Plan and Treatment Management</li>
                                <li>Emergency and Critical Information</li>
                                <li>Integration with External Systems</li>
                                <li>Customizable Dashboard</li>
                                <li>Security and Privacy</li>
                                <li>Educational Resources</li>
                                <li>Educational Resources</li>
                                <li>Multi-Language Support</li>
                                <li>Administrator and User Roles</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-x p-6" >
                        <div className="mb-8 border-b border-b-Secondinary-200 h-64">
                            <h3 className="text-Medium-24 mb-2">Standard plan</h3>
                            <p className="text-Regular-16 mb-6">Best for small healtcare practices</p> 
                            <div className="flex items-end mb-8">
                                <span className="text-Bold-48">$29</span>
                                <p>/Month</p>
                            </div> 
                            <button className="flex items-center py-4 gap-x-1 w-full bg-primary-500 justify-center rounded-xl text-primary-0 hover:text-Secondinary-500">Get Started <IoIosArrowRoundForward className="text-2xl" /></button>  
                        </div>                        
                        <div>
                            <ul className=" text-2xl text-primary-500 flex flex-col items-center gap-y-[25px]">
                                <li><FaCircleCheck /></li>
                                <li><FaCircleCheck /></li>
                                <li><FaCircleCheck /></li>
                                <li><FaCircleCheck /></li>
                                <li><FaCircleCheck /></li>
                                <li><FaCircleCheck /></li>
                                <li><FaCircleCheck /></li>
                                <li><FaCircleCheck /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-primary-500 text-primary-0 p-6">
                        <div className="mb-8 border-b border-b-Secondinary-200 h-64">
                            <h3 className="text-Medium-24 mb-2">Enterprise plan</h3>
                            <p className="text-Regular-16 mb-6">Best for large practices or hospitals </p> 
                            <div className="flex items-end mb-8">
                                <span className="text-Bold-48">$199</span>
                                <p>/Month</p>
                            </div> 
                            <button className="flex items-center py-4 gap-x-1 w-full bg-primary-0 justify-center rounded-xl text-Secondinary-500  hover:text-primary-500">Get Started <IoIosArrowRoundForward className="text-2xl" /></button>  
                        </div>                        
                        <div>
                            <ul className=" text-2xl text-primary-0 flex flex-col items-center gap-y-[25px]">
                                <li><FaCircleCheck /></li>
                                <li><FaCircleCheck /></li>
                                <li><FaCircleCheck /></li>
                                <li><FaCircleCheck /></li>
                                <li><FaCircleCheck /></li>
                                <li><FaCircleCheck /></li>
                                <li><FaCircleCheck /></li>
                                <li><FaCircleCheck /></li>
                                <li><FaCircleCheck /></li>
                                <li><FaCircleCheck /></li>
                                <li><FaCircleCheck /></li>
                                <li><FaCircleCheck /></li>
                                <li><FaCircleCheck /></li>
                                <li><FaCircleCheck /></li>
                                <li><FaCircleCheck /></li>
                                <li><FaCircleCheck /></li>
                                <li><FaCircleCheck /></li>
                                <li><FaCircleCheck /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Planes;