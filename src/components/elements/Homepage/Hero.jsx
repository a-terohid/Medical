import { IoIosArrowRoundForward } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6"; 

const NEWS = [
    "Breakthrough Treatment Offers Hope for Previously Incurable Disease",
    "AI-Powered Diagnostic Tool Outperforms Human Doctors",
    "Global Collaboration Leads to Successful Vaccine ",
    "Personalized Therapies Show Remarkable Success Rates"
]

const Hero = () => {
    return (
        <div>
            <div className="bg-Secondinary-900">
                <div className="container text-primary-0 py-8 lg:py-24 flex items-center gap-x-20">
                    <div className="lg:mr-20">
                        <p className="text-Medium-14 text-primary-100 bg-Secondinary-500 py-1 px-4 rounded-full w-fit">1# Product Hunt 2024</p>
                        <h1 className="text-Bold-32 mt-3 lg:text-Bold-56">Experience the Next Level of Healthcare Management</h1>
                        <p className="text-Regular-14 text-Secondinary-200 lg:text-Regular-16 my-6 lg:my-8">Discover a cutting-edge solution designed to streamline medical operations, enhance collaboration, and elevate patient care</p>
                        <div className="my-10 flex flex-col gap-y-3 lg:flex-row lg:gap-x-3">
                            <input className="py-4  px-5 lg:flex-1 text-Semibold-14 border-Secondinary-200 border focus:ring-primary-500 focus:ring-2 focus:outline-none rounded-[10px]" placeholder="s.aliterohid@gmail" />
                            <button className=" py-4 lg:px-7 bg-primary-500 text-Bold-14 hover:text-primary-500 hover:bg-primary-0 Hover:border-Secondinary-200 hover:border-2 text-primary-0 rounded-[10px]" >Get Started</button>
                        </div>
                        <div className="text-Secondinary-200 text-Regular-12 flex gap-x-5">
                            <p className="flex gap-x-2 items-start"><FaCircleCheck className="text-primary-300 mt-[2px]"/>Get free trial for 7 days</p>
                            <p className="flex gap-x-2 items-start"><FaCircleCheck className="text-primary-300 mt-[2px]"/>Competitive Pricing plan</p>
                        </div>
                    </div>
                    <div className=" hidden lg:block w-[170%]">
                        <img src="/img/Mac Studio 1.png" />
                    </div>
                </div>
            </div>
            <div className="bg-Secondinary-100">
                <div className=" container flex  gap-x-14 lg:gap-x-16 py-5 overflow-auto" >
                    {
                        NEWS.map( (nw, index) => <div key={index}>
                            <div className="flex items-center min-w-52">
                                <p className="text-Secondinary-400 text-Medium-12 lg:text-Medium-14 flex-1">NEWS</p>
                                <IoIosArrowRoundForward className="text-primary-500 text-3xl"/>
                            </div>
                            <p className="text-Semibold-14 mt-3 lg:text-Semibold-16" >{nw}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Hero;
