import React from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import { CiHospital1 } from "react-icons/ci";
import { IoFlagSharp } from "react-icons/io5";
import PricingList from '@/elements/Homepage/PricingList';
import FAQ_Section from '@/elements/Homepage/FAQ_Section';


const UseCase_page = () => {
    return (
        <div>
            <div className='bg-primary-900'>
                <div className=' container py-14 flex flex-col items-center justify-center text-center lg:px-20' >
                    <p className='text-Medium-14 text-primary-100 bg-[#224450] py-1 px-4 rounded-full w-fit"'>Use Case</p>
                    <h1 className='text-Bold-32 mt-2 mb-6 text-primary-0 lg:text-Bold-56' >Enhancing Hospital Efficiency and Patient Care</h1>
                    <p className="text-Regular-14 text-Secondinary-200 lg:text-Regular-16 lg:mx-48 ">Witness the transformation of healthcare facilities into smart, efficient spaces where our technology optimizes hospital operations, resulting in better resource utilization and elevated patient care standards.</p>
                </div>
            </div>
            <div className=' container py-14 lg:py-20'>
                <div className="flex items-center justify-center flex-col text-center" >
                    <p className="text-Medium-14 text-primary-800 bg-primary-100 py-1 px-4 rounded-full w-fit">Use Case</p>
                    <h3 className="text-Bold-24 -mx-2 md:mx-0 mt-3 lg:text-Bold-40">A Comprehensive Overview</h3>
                </div>
                <div className='mt-10 lg:mt-20 flex flex-col gap-y-20 lg:gap-y-32'>
                    <div className='flex flex-col gap-y-10 lg:flex-row lg:gap-x-44 lg:items-center' >
                        <div>
                            <div className=' border-b border-b-Secondinary-300'>
                                <p className="text-Medium-14 text-primary-800 bg-primary-100 py-1 px-4 rounded-full w-fit">Use cases 1</p>
                                <h3 className="text-Bold-20 lg:text-Bold-32 mt-2 mb-4 lg:mb-6">Unified Patient Data</h3>
                                <p className="text-Regular-14 text-Secondinary-400 lg:text-Regular-16 mb-4 lg:mb-6">Our Medical Dashboard aggregates and organizes patient data from various sources, including electronic health records (EHR), diagnostic imaging, and laboratory results.</p>
                            </div>
                            <ul className="text-Medium-14 lg:text-Medium-16 flex flex-col gap-y-4 mt-4 lg:mt-6">
                                <li className="flex items-center gap-x-3"><FaCircleCheck className='text-primary-400' />Patient Data Management</li>
                                <li className="flex items-center gap-x-3"><FaCircleCheck className='text-primary-400' />Appointment Scheduling</li>
                                <li className="flex items-center gap-x-3"><FaCircleCheck className='text-primary-400' />Data Security & HIPAA Compliance</li>
                                <li className="flex items-center gap-x-3"><FaCircleCheck className='text-primary-400' />Basic Billing and Claims Processing</li>
                            </ul>
                        </div>
                        <img src='/img/useCase/Graphics_01.png' className='lg:w-1/2'/>
                    </div>
                    <div className='flex flex-col gap-y-10 lg:flex-row-reverse lg:gap-x-44 lg:items-center' >
                        <div>
                            <div className=' border-b border-b-Secondinary-300'>
                                <p className="text-Medium-14 text-primary-800 bg-primary-100 py-1 px-4 rounded-full w-fit">Use cases 2</p>
                                <h3 className="text-Bold-20 lg:text-Bold-32 mt-2 mb-4 lg:mb-6">Real-time Monitoring</h3>
                                <p className="text-Regular-14 text-Secondinary-400 lg:text-Regular-16 mb-4 lg:mb-6">Vital signs, medication adherence, and other critical data points are continuously updated, enabling healthcare providers to respond promptly to any changes in a patient's condition.</p>
                            </div>
                            <div className='mt-4 lg:mt-6 text-Medium-14 lg:text-Medium-16 flex justify-between'>
                                    <div className='flex items-center gap-x-1 lg:gap-x-2'>
                                        <p className='text-Semibold-18 lg:text-Semibold-24' >99%</p>
                                        <p>User Satisfied</p>
                                    </div>
                                    <div className='flex items-center gap-x-1 lg:gap-x-2'>
                                        <p className='text-Semibold-18 lg:text-Semibold-24' >32+</p>
                                        <p>Features</p>
                                    </div>
                            </div>
                        </div>
                        <img src='/img/useCase/Graphics_02.png' className='lg:w-1/2'/>
                    </div>
                    <div className='flex flex-col gap-y-10 lg:flex-row lg:gap-x-44 lg:items-center w-full' >
                        <div>
                            <div className=' border-b border-b-Secondinary-300'>
                                <p className="text-Medium-14 text-primary-800 bg-primary-100 py-1 px-4 rounded-full w-fit">Use cases 3</p>
                                <h3 className="text-Bold-20 lg:text-Bold-32 mt-2 mb-4 lg:mb-6">Telemedicine Integration</h3>
                                <p className="text-Regular-14 text-Secondinary-400 lg:text-Regular-16 mb-4 lg:mb-6"> With secure communication channels, healthcare professionals can connect with patients, review vital data, and provide timely guidance, enhancing the overall patient experience.</p>
                            </div>
                            <div className='mt-4 lg:mt-6 text-Regular-12 flex justify-between gap-y-8 flex-wrap'>
                                    <div className='flex items-center gap-x-4'>
                                        <CiHospital1 className='text-primary-0 bg-primary-600 p-3 rounded-full text-5xl'/>
                                        <div>
                                            <p className='text-Bold-18' >500k+ Corp</p>
                                            <p>Subscribed hospital/clinic</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-x-4'>
                                        <IoFlagSharp className='text-primary-0 bg-primary-600 p-3 rounded-full text-5xl'/>
                                        <div>
                                            <p className='text-Bold-18' >32+ Countries</p>
                                            <p>Countries supports</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <img src='/img/useCase/Graphics_03.png' className='lg:w-1/2'/>
                    </div>
                </div>
            </div>
            <FAQ_Section />
            <PricingList />
        </div>
    );
};

export default UseCase_page;