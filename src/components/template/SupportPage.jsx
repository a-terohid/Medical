import FAQ_Section from '@/elements/Homepage/FAQ_Section';
import { BsSearch } from "react-icons/bs";
import { FaHeadphones } from "react-icons/fa6";
import { PiWarningCircleFill } from "react-icons/pi";
import { PiNewspaperFill } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";





const SupportPage = () => {
    return (
        <div>
            <div className='bg-primary-900'>
                <div className=' container py-14 flex flex-col items-center text-center'>
                    <p className="text-Medium-14 text-primary-100 bg-[#224450] py-1 px-4 rounded-full w-fit">Help & Center</p>
                    <h3 className="text-Bold-32 -mx-2 md:mx-0 mt-3 lg:text-Bold-56 text-primary-0">Explore Our Support Center</h3>
                    <p className="text-Regular-14 text-Secondinary-200 lg:text-Regular-16 mt-6 mb-8 lg:mx-48 ">Discover a wealth of resources and personalized assistance designed to empower you on your journey. Our Help & Support Center is your go-to destination for answers, and a helping hand whenever you need it.</p>
                    <div className="mt-10 flex gap-x-3">
                        <input className="py-4  px-5 lg:flex-1 lg:w-72 text-Semibold-14 border-Secondinary-200 border focus:ring-primary-500 focus:ring-2 focus:outline-none rounded-[10px]" placeholder="Search Keywoard" />
                        <button className=" p-4 flex gap-x-3 items-center bg-primary-500 text-Bold-14 hover:text-primary-500 hover:bg-primary-0 Hover:border-Secondinary-200 hover:border-2 text-primary-0 rounded-[10px]" ><BsSearch className='text-2xl' /><span className=' hidden lg:block'>Search</span></button>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16'>
                        <div className='bg-primary-800 h-80 flex flex-col items-center justify-center text-center p-6 rounded-3xl'>
                            <FaHeadphones className='text-7xl text-[#54A6FF]' />
                            <h4 className='text-Bold-24 text-primary-0 my-6'>Speak to a member of our CS team</h4>
                            <p className='text-Regular-14 text-Secondinary-100 mb-6'>We will help you find the answer for your questions.</p>
                            <button className='bg-primary-500 rounded-xl text-primary-0 py-4 w-full text-Bold-14' >Contact Customer Service</button>
                        </div>
                        <div className='bg-primary-800 h-80 flex flex-col items-center justify-center text-center p-6 rounded-3xl'>
                            <PiWarningCircleFill className='text-7xl text-[#98CC23]' />
                            <h4 className='text-Bold-24 text-primary-0 my-6'>Support and help with your account</h4>
                            <p className='text-Regular-14 text-Secondinary-100 mb-6'>Our help center is accessible 24 hours a day. </p>
                            <button className='bg-primary-500 rounded-xl text-primary-0 py-4 w-full text-Bold-14' >Visit Our Help Center</button>
                        </div>
                        <div className='bg-primary-800 h-80 flex flex-col items-center justify-center text-center p-6 rounded-3xl'>
                            <PiNewspaperFill className='text-7xl text-[#F9D169]' />
                            <h4 className='text-Bold-24 text-primary-0 my-6'>Help support with Documentation</h4>
                            <p className='text-Regular-14 text-Secondinary-100 mb-6'>Get more details with our guide book </p>
                            <button className='bg-primary-500 rounded-xl text-primary-0 py-4 w-full text-Bold-14' >Download Guide book</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' container py-14 lg:py-20'>
                <div className="flex flex-col justify-center items-center text-center lg:mx-52" >
                    <p className="text-Medium-14 text-primary-800 bg-primary-100 py-1 px-4 rounded-full" >Our Social Media</p>
                    <h3 className="text-Bold-24 lg:text-Bold-40 mt-2" >Follow our social media</h3>
                    <p className='text-Regular-14 text-Secondinary-400 mt-6 lg:text-Regular-16'>Follow our social media accounts to get the latest updates about our software and community</p>
                </div>
                <div className=' grid grid-cols-1 lg:grid-cols-4 mt-10 gap-6 md:grid-cols-2' >
                    <div className=' border-Secondinary-300 border rounded-xl p-8 '>
                        <div className=' text-Secondinary-400 flex items-start justify-between'>
                            <FaInstagram className='text-5xl'/>
                            <IoIosArrowForward className='text-3xl' />
                        </div>
                        <p className=' text-Semibold-32 mt-8'>Instagram</p>
                    </div>
                    <div className=' border-Secondinary-300 border rounded-xl p-8 '>
                        <div className=' text-Secondinary-400 flex items-start justify-between'>
                            <FaLinkedinIn className='text-5xl'/>
                            <IoIosArrowForward className='text-3xl' />
                        </div>
                        <p className=' text-Semibold-32 mt-8'>Linkedin</p>
                    </div>
                    <div className=' border-Secondinary-300 border rounded-xl p-8 '>
                        <div className=' text-Secondinary-400 flex items-start justify-between'>
                            <FaFacebookF className='text-5xl'/>
                            <IoIosArrowForward className='text-3xl' />
                        </div>
                        <p className=' text-Semibold-32 mt-8'>Facebook</p>
                    </div>
                    <div className=' border-Secondinary-300 border rounded-xl p-8 '>
                        <div className=' text-Secondinary-400 flex items-start justify-between'>
                            <FaTwitter className='text-5xl'/>
                            <IoIosArrowForward className='text-3xl' />
                        </div>
                        <p className=' text-Semibold-32 mt-8'>Twitter</p>
                    </div>
                </div>
            </div>
            <FAQ_Section />
        </div>
    );
};

export default SupportPage;