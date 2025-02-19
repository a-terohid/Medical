import { FaCircleCheck } from "react-icons/fa6"; // Import checkmark icon from react-icons
import { IoArrowForward } from "react-icons/io5"; // Import arrow icon from react-icons

// PricingList Component: Displays pricing plans for a healthcare-related service
const PricingList = () => {
    return (
        <div className="bg-primary-900"> {/* Background color for the pricing section */}
            <div className="container py-14 lg:py-20 text-primary-0 flex flex-col lg:flex-row gap-y-14 lg:items-center lg:gap-x-28">
                
                {/* Left Section: Header and description */}
                <div className="flex-1">
                    <p className="text-Medium-14 py-1 px-5 bg-primary-1100 rounded-full w-fit">
                        Pricing plans
                    </p>
                    <h1 className="text-Bold-24 lg:text-Bold-40 mt-1">
                        Explore Our Pricing Plan Solutions
                    </h1>
                    <p className="text-Regular-14 lg:text-Regular-16 mt-4 lg:mt-6">
                        Discover pricing options designed to accommodate practices of all sizes.
                    </p>
                </div>

                {/* Right Section: Pricing Cards */}
                <div className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row md:gap-x-10 items-center md:items-start">
                    
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
    );
};

export default PricingList;