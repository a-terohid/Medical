import FAQ_Section from "@/elements/Homepage/FAQ_Section";
import { FaCircleCheck } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";
import Planes from "@/elements/Planes";


const Pricing_page = () => {
    return (
        <div>
            <div className="bg-primary-900">
                <div className=' container py-14 flex flex-col items-center justify-center text-center lg:px-28' >
                    <p className='text-Medium-14 text-primary-100 bg-[#224450] py-1 px-4 rounded-full w-fit"'>Future-Ready Healthcare</p>
                    <h1 className='text-Bold-32 mt-2 mb-6 text-primary-0 lg:text-Bold-56' >Revolutionize Your Budgeting with Smart Healthcare Pricing</h1>
                    <p className="text-Regular-14 text-Secondinary-200 lg:text-Regular-16 lg:mx-48 ">Our medical dashboard pricing page puts you in control, ensuring your healthcare expenses align seamlessly with your financial plan.</p>
                    <div className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row md:gap-x-10 items-center md:items-start text-primary-0 lg:mt-20 mt-16">               
                        {/* Standard Plan Card */}
                        <div className="p-6 bg-primary-800 rounded-3xl w-80">
                            {/* Plan Title and Price */}
                            <div className="pb-8 border-primary-700 border-b">
                                <h3 className="text-Medium-24">Standard plan</h3>
                                <p className="text-Regular-14 mt-1 mb-6">
                                    Best for small healthcare practices
                                </p>
                                <div className="flex items-end">
                                    <p className="text-Bold-48">$29</p>
                                    <p className="text-Regular-16">/Month</p>
                                </div>
                            </div>
    
                            {/* Features List */}
                            <div className="mt-8">
                                <ul className="text-Regular-14 flex flex-col gap-y-5 mb-8">
                                    <li className="flex items-center gap-x-3"><FaCircleCheck />Patient Data Management</li>
                                    <li className="flex items-center gap-x-3"><FaCircleCheck />Appointment Scheduling</li>
                                    <li className="flex items-center gap-x-3"><FaCircleCheck />Data Security & HIPAA Compliance</li>
                                    <li className="flex items-center gap-x-3"><FaCircleCheck />Basic Billing and Claims Processing</li>
                                </ul>
    
                                {/* Call-to-Action Button */}
                                <button className="w-full py-4 px-5 text-Bold-14 bg-primary-500 hover:text-primary-500 hover:bg-primary-0 text-primary-0 rounded-[10px]">
                                    Try for Free
                                </button>
                            </div>
                        </div>
    
                        {/* Enterprise Plan Card */}
                        <div className="p-6 bg-primary-500 rounded-3xl w-80">
                            {/* Plan Title and Price */}
                            <div className="pb-8 border-primary-400 border-b">
                                <h3 className="text-Medium-24">Enterprise plan</h3>
                                <p className="text-Regular-14 mt-1 mb-6">
                                    Best for large practices or hospitals
                                </p>
                                <div className="flex items-end">
                                    <p className="text-Bold-48">$199</p>
                                    <p className="text-Regular-16">/Month</p>
                                </div>
                            </div>
    
                            {/* Features List */}
                            <div className="mt-8">
                                <ul className="text-Regular-14 flex flex-col gap-y-5 mb-8">
                                    <li className="flex items-center gap-x-3"><FaCircleCheck />All features from the Standard Plan</li>
                                    <li className="flex items-center gap-x-3"><FaCircleCheck />Enhanced Data Visualization Tools</li>
                                    <li className="flex items-center gap-x-3"><FaCircleCheck />Tailored Solutions for Specific Needs</li>
                                    <li className="flex items-center gap-x-3"><FaCircleCheck />Custom Workflow Automation</li>
                                </ul>
    
                                {/* Call-to-Action Button */}
                                <button className="w-full flex gap-x-2 items-center justify-center py-4 px-5 text-Bold-14 bg-primary-0 text-primary-500 hover:text-primary-0 hover:bg-primary-500 hover:border-primary-50 rounded-[10px]">
                                    Get Started <IoArrowForward className="text-Bold-16 mt-[2px]"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Planes />
            <div className=" container py-14 lg:py-20 ">
                <div className="flex items-center justify-center flex-col text-center" >
                    <p className="text-Medium-14 text-primary-800 bg-primary-100 py-1 px-4 rounded-full w-fit">Our Partner</p>
                    <h3 className="text-Bold-24 -mx-2 md:mx-0 mt-3 lg:text-Bold-40">Our Innovation Through Company Partnerships</h3>
                    <p className="text-Regular-14 text-Secondinary-400 lg:text-Regular-16 mt-6">Together, we navigate challenges and celebrate triumphs on a global scale.</p>
                </div>
                <div className="py-14 gap-x-10 lg:gap-x-28 flex overflow-auto items-center justify-center border-b-2 border-Secondinary-200">
                    <img className="w-1/4 lg:w-1/12 md:w-1/6" src="/img/Feature/cp01.png" alt="opendoor" />
                    <img className="w-1/4 lg:w-1/12 md:w-1/6" src="/img/Feature/cp02.png" alt="airbnb" />
                    <img className="w-1/4 lg:w-1/12 md:w-1/6" src="/img/Feature/cp03.png" alt="atlassian" />
                    <img className="w-1/4 lg:w-1/12 md:w-1/6" src="/img/Feature/cp04.png" alt="google" />
                    <img className="w-1/4 lg:w-1/12 md:w-1/6" src="/img/Feature/cp05.png" alt="segment" />
                </div>
                <div className="mt-14">
                    <ul className=" grid grid-cols-2 gap-y-6 lg:grid-cols-4">
                        <li className="flex flex-col items-center justify-center gap-y-3"><p className="text-Bold-14 md:text-Bold-24 lg:text-Bold-40" >72%</p><span className="text-Secondinary-400 text-Regular-12 lg:text-Regular-16">User Adoption Rate</span></li>
                        <li className="flex flex-col items-center justify-center gap-y-3"><p className="text-Bold-14 md:text-Bold-24 lg:text-Bold-40" >99.9%</p><span className="text-Secondinary-400 text-Regular-12 lg:text-Regular-16">System Uptime</span></li>
                        <li className="flex flex-col items-center justify-center gap-y-3"><p className="text-Bold-14 md:text-Bold-24 lg:text-Bold-40" >$1,200</p><span className="text-Secondinary-400 text-Regular-12 lg:text-Regular-16">Customer Lifetime Value</span></li>
                        <li className="flex flex-col items-center justify-center gap-y-3"><p className="text-Bold-14 md:text-Bold-24 lg:text-Bold-40" >15.000+</p><span className="text-Secondinary-400 text-Regular-12 lg:text-Regular-16">Monthly Active Users</span></li>
                    </ul>
                </div>
            </div>
            <FAQ_Section />
        </div>
    );
};

export default Pricing_page;