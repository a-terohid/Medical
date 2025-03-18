import FAQ_Section from "@/elements/Homepage/FAQ_Section";
import PricingList from "@/elements/Homepage/PricingList";
import Testimonials from "@/elements/Homepage/Testimonials";
import { IoIosArrowRoundForward } from "react-icons/io";

const FeaturesData = [
    {
        img: "/img/Feature/f01.png",
        title : "Analytics and Reporting",
        text: "Access comprehensive analytics and reporting tools to derive insights from patient data, appointment trends, and overall system usage. "
    },
    {
        img: "/img/Feature/f02.png",
        title :"User Permissions and Security",
        text: "The admin dashboard should allow customization of access levels for different roles within the healthcare organization, safeguarding sensitive patient info."
    },
    {
        img: "/img/Feature/f03.png",
        title : "Appointment  and Calendar",
        text: "Enable seamless appointment scheduling for healthcare providers and staff."
    },
    {
        img: "/img/Feature/f04.png",
        title : "Billing and Invoicing",
        text: "Facilitate efficient financial management with features for billing and invoicing."
    },
    {
        img: "/img/Feature/f05.png",
        title : "Integration with EHR Systems",
        text: "Ensure seamless integration with Electronic Health Records (EHR) systems."
    },
]

const FeaturesPage = () => {
    return (
        <div>
            <div className="bg-primary-900" >
                <div className=" container py-14 lg:py-20 flex flex-col items-center text-center" >
                    <p className="text-Medium-14 text-primary-100 bg-[#224450] py-1 px-4 rounded-full w-fit">Future-Ready Healthcare</p>
                    <h3 className="text-Bold-32 -mx-2 md:mx-0 mt-3 lg:text-Bold-56 text-primary-0">Redefining Healthcare Accessibility</h3>
                    <p className="text-Regular-14 text-Secondinary-200 lg:text-Regular-16 mt-6 mb-8 lg:mx-48 ">Our user-friendly medical dashboard streamlines the complexities of healthcare, making well-being management a breeze.</p>
                    <button className="flex gap-x-2 text-primary-0 text-Bold-14 py-4 px-6 bg-primary-500 rounded-[10px] items-center justify-center w-full md:w-fit">Get Started<IoIosArrowRoundForward className="text-3xl"/></button>
                </div>
            </div>
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
            <div className=" container py-14 lg:py-20" >
                <div className="flex flex-col lg:flex-row lg:gap-x-20 items-end" >
                    <div>
                        <p className="text-Medium-14 text-primary-800 bg-primary-100 py-1 px-4 rounded-full w-fit">Key Features</p>
                        <h3 className="text-Bold-24 mt-3 lg:text-Bold-40">Explore the Power of Our Feature-Loaded</h3>
                    </div>
                    <p className="text-Secondinary-400 text-Regular-14 lg:text-Regular-16 my-5">Optimize workflows, enhance communication, and deliver exceptional patient care with our feature-loaded medical dashboard.</p>
                    <button className="min-w-32 h-fit py-4 px-5 text-primary-500 text-Bold-14 hover:text-primary-0 hover:bg-primary-500 hover:border-primary-500 border-Secondinary-200 border-2 rounded-[10px]">Learn more</button>
                </div>
                <div className="grid grid-cols-1 gap-y-10 lg:gap-12  mt-10 lg:mt-20 lg:grid-cols-6 lg:grid-rows-2">
                    {FeaturesData.map((fe, index) => (
                        <div 
                            key={index} 
                            className={`border border-gray-200 rounded-3xl overflow-hidden shadow-md bg-white w-full h-fit ${index < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}`}>
                            <img src={fe.img} alt={fe.title} className="w-full h-auto object-cover" />
                            <div className="p-4">
                                <h5 className="text-xl font-semibold mb-3">{fe.title}</h5>
                                <p className="text-gray-500 text-sm">{fe.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Testimonials />
            <FAQ_Section/>
            <PricingList />
        </div>
    );
};

export default FeaturesPage;
