import LogoـRow from '@/public/svg/Logo/LogoـRow';
import Link from 'next/link';

const Signuppage = () => {
    return (
        <div className='flex lg:flex-row-reverse flex-col lg:justify-between items-center gap-y-6'>
            <div className='flex flex-col gap-y-12 mx-auto mt-8 lg:mt-0' >
                <div className=''>
                    <LogoـRow className="w-32" />
                    <h1 className='my-6 lg:my-8 text-Bold-24 lg:text-Bold-32'>Let’s create your account first</h1>
                    <div className='flex flex-col gap-y-6'>
                        <input className="lg:flex-1 px-5 py-4 border border-Secondinary-200 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary-500 w-full text-Semibold-14" placeholder="ُYour Name" />
                        <input className="lg:flex-1 px-5 py-4 border border-Secondinary-200 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary-500 w-full text-Semibold-14" placeholder="Email" />
                        <input className="lg:flex-1 px-5 py-4 border border-Secondinary-200 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary-500 w-full text-Semibold-14" placeholder="Password" />
                        <input className="lg:flex-1 px-5 py-4 border border-Secondinary-200 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary-500 w-full text-Semibold-14" placeholder="Repeat Password" />
                    </div>
                    <button className='bg-pr bg-primary-500 my-6 lg:my-8 py-4 rounded-xl w-full text-Bold-14 text-primary-0'>Register</button>
                    <p className='w-full text-Medium-14 text-Secondinary-400 lg:text-Medium-16 text-center'>Already have an account?  <Link href="signup" className='text-primary-400 text-Semibold-14 hover:text-primary-600'>Login Here</Link></p>
                </div>
                <div className='flex flex-col justify-center items-center gap-y-3 text-Medium-12 lg:text-Semibold-12'>
                    <p className='text-Secondinary-400'>© 2022 Wecare. All rights reserved.</p>
                    <p className='text-primary-400'>Term & Condition <span className='text-Secondinary-400'>|</span> Privacy & Policy</p>
                </div>
            </div>
            <div className='lg:w-1/2 lg:max-h-screen'>
                <div className='flex justify-end items-end bg-primary-600 pt-7 pl-4'>
                    <img className='w-f w-full lg:max-h-[67vh]' src='/img/sign.png'/>
                </div>
                <div className='bg-primary-900 p-8'>
                    <h2 className='mb-4 lg:mb-6 text-primary-0 text-Semibold-20 lg:text-Bold-40'>Revolutionize Healthcare Management with Wecare</h2>
                    <p className='text-Medium-14 text-Secondinary-300 lg:text-Medium-18'>The one-stop platform for all financial management of small and medium-sized business.</p>
                </div>
            </div>
        </div>
    );
};

export default Signuppage;