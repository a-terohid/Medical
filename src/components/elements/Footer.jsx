import Call from "@/public/svg/Icon/Call";
import Gamil from "@/public/svg/Icon/Gmail";
import Location from "@/public/svg/Icon/Location";
import LogoـRow from "@/public/svg/Logo/LogoـRow";
import Link from "next/link";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaGoogle , FaTiktok } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";




const Footer = () => {
    return (
        <footer>
            <div className=' container py-14 lg:flex items-center justify-center'>
                {/* CTA */}
                <div className="">
                    <div>
                        <p className=" text-Medium-14 text-primary-800 py-1 px-4 bg-primary-100 w-fit rounded-full" >Get Started Now</p>
                        <h3 className="text-Bold-24 lg:text-Bold-32 text-Secondinary-500 mt-2 mb-6">Discover a new era of efficiency in healthcare.</h3>
                        <p className="text-Regular-14 lg:text-Regular-16 text-Secondinary-400" >Our Medical Dashboard Platform is designed to make healthcare management intuitive and efficient. </p>
                    </div>
                    <div className="my-10 flex flex-col gap-y-3 lg:flex-row lg:gap-x-3">
                        <input className="py-4  px-5 lg:flex-1 text-Semibold-14 border-Secondinary-200 border focus:ring-primary-500 focus:ring-2 focus:outline-none rounded-[10px]" placeholder="s.aliterohid@gmail" />
                        <button className=" py-4 lg:px-7 bg-primary-500 text-Bold-14 hover:text-primary-500 hover:bg-primary-0 Hover:border-Secondinary-200 hover:border-2 text-primary-0 rounded-[10px]" >Get Started</button>
                    </div>
                </div>
                <div className="relative lg:w-3/4 lg:ml-20 ">
                    <div className="bg-primary-500 mb-[1.5px] md:mb-[3px] w-full h-2/3  absolute bottom-0 z-0 rounded-[10px]"></div>
                    <img className="relative z-20 " src="/img/FooterPC.png" alt="display"/>
                </div>
            </div>
            {/* Footer */}
            <div className=" bg-primary-1000" >
                 <div className="container py-16" >
                    <div className="flex flex-col lg:flex-row gap-y-14 lg:gap-y-0 lg:gap-x-28 mb-14" >
                        <div className="lg:w-96">
                            <LogoـRow className="w-44 md:w-24 lg:w-28" color={true}/>
                            <p className="text-Medium-14 text-Secondinary-300 mt-8" >Streamline your administrative tasks, access critical patient data, and enhance collaboration among your healthcare team effortlessly.</p>
                        </div>
                        <div className="flex flex-wrap gap-x-10 lg:gap-x-24 gap-y-8 text-Medium-14" >
                            <ul className="flex flex-col gap-y-4 text-Secondinary-300 lg:max-w-64" >
                                <li className=" text-Semibold-18 mb-2  text-primary-0">Services</li>
                                <li className="hover:text-Secondinary-400"><Link href="/features" className="cursor-pointer" >Features</Link></li>
                                <li className="hover:text-Secondinary-400"><Link href="/pricing" className="cursor-pointer" >Pricing</Link></li>
                                <li className="hover:text-Secondinary-400"><Link href="/" className="cursor-pointer" >About us</Link></li>
                                <li className="hover:text-Secondinary-400"><Link href="/" className="cursor-pointer" >Resources</Link></li>
                            </ul>
                            <ul className="flex flex-col gap-y-4 text-Secondinary-300 lg:max-w-64" >
                                <li className=" text-Semibold-18 mb-2  text-primary-0">Policy</li>
                                <li className="hover:text-Secondinary-400"><Link href="/" className="cursor-pointer" >Privacy Policy</Link></li>
                                <li className="hover:text-Secondinary-400"><Link href="/" className="cursor-pointer" >Proven Sub processors</Link></li>
                                <li className="hover:text-Secondinary-400"><Link href="/" className="cursor-pointer" >Risk Assessment Policy</Link></li>
                                <li className="hover:text-Secondinary-400"><Link href="/" className="cursor-pointer" >Acceptable Use Policy</Link></li>
                                <li className="hover:text-Secondinary-400"><Link href="/" className="cursor-pointer" >Cookie Policy</Link></li>
                            </ul>
                            <ul className="flex flex-col gap-y-4 text-Secondinary-300 lg:max-w-64" >
                                <li className=" text-Semibold-18 mb-2  text-primary-0">Contact</li>
                                <li className="flex items-start gap-x-2 hover:text-Secondinary-400"><Call className="w-5" />(406) 555-0120</li>
                                <li className="flex items-start gap-x-2 hover:text-Secondinary-400"><Gamil className="w-5"/> wecare@mail.com</li>
                                <li className="flex items-start gap-x-2 hover:text-Secondinary-400"><Location className="w-5 h-5" /> 2972 Westheimer Rd. Santa Ana, Illinois 85486 </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-Secondinary-1000  py-4 lg:py-7 px-8 lg:px-9 rounded-3xl lg:rounded-[30px] flex flex-col items-center gap-y-3 lg:flex-row" >
                        <p className="text-Regular-14 text-primary-0 lg:flex-1" >Copyright ©2023 Wecare</p>
                        <div>
                            <ul className="flex gap-x-2 text-primary-0" >
                                <li className="p-3 bg-Secondinary-1100 hover:bg-Secondinary-1000 rounded-full" ><TiSocialFacebook /></li>
                                <li className="p-3 bg-Secondinary-1100 hover:bg-Secondinary-1000 rounded-full" ><FaTwitter/></li>
                                <li className="p-3 bg-Secondinary-1100 hover:bg-Secondinary-1000 rounded-full" ><IoLogoYoutube/></li>
                                <li className="p-3 bg-Secondinary-1100 hover:bg-Secondinary-1000 rounded-full" ><FaGoogle/></li>
                                <li className="p-3 bg-Secondinary-1100 hover:bg-Secondinary-1000 rounded-full" ><FaTiktok /></li>
                                <li className="p-3 bg-Secondinary-1100 hover:bg-Secondinary-1000 rounded-full" ><FiInstagram /></li>
                            </ul>
                        </div>
                    </div>
                 </div>
            </div>
        </footer>
    );
};

export default Footer;