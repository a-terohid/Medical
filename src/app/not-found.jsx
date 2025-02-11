import Link from "next/link";


export const metadata = {
    title: '404 | Page Not Found | WeCare - Medical SaaS Website UI Kit',
};

const notFound = () => {
    return (
        <div className="bg-Secondinary-900 py-20 " >
            <div className=" container  flex flex-col items-center justify-center text-center" >
                <div className="text-primary-0" >
                    <h1 className="font-bold text-[100px] lg:text-[140px] lg:-mt-12" >404!</h1>
                    <p className="text-Bold-32 lg:text-Bold-40 -mt-7" >Page not found</p>
                </div>
                <div className="mt-8 text-Regular-14 lg:text-Regular-16 mb-8" >
                    <p className=" text-Secondinary-200 mb-8 lg:max-w-96">The page you are looking for might have been removed had its name changed or is temporarily unavailable</p>
                    <Link href='/' className="w-32 py-4 px-5 bg-primary-500 hover:text-primary-500 hover:bg-primary-0 Hover:border-primary-500 hover:border-2 text-primary-0 rounded-[10px]" >Back to home</Link >
                </div>
            </div>
        </div>
    );
};

export default notFound