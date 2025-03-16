"use client"

import FAQ_Section from '@/elements/Homepage/FAQ_Section';
import blogs_data from "@/utils/data/blogs.json"
import BlogCard from "@/elements/BlogCard";

const Blogspage = () => {

    const blogs = blogs_data.blogs;
    
    return (
        <div>
            <div className='bg-primary-900 py-14 '>
                <div className=' container flex flex-col items-center text-center'>
                    <p className="text-Medium-14 text-primary-100 bg-[#224450] py-1 px-4 rounded-full w-fit">Our Blogs</p>
                    <h3 className="text-Bold-32 -mx-2 md:mx-0 mt-3 lg:text-Bold-56 text-primary-0">Exploring Breakthroughs in Medical Research</h3>
                    <p className="text-Regular-14 text-Secondinary-200 lg:text-Regular-16 mt-6 mb-8 lg:mx-48 ">Our medical dashboard pricing page puts you in control, ensuring your healthcare expenses align seamlessly with your financial plan.</p>
                </div>
                <div className=" container mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-7">
                        <BlogCard blog={blogs[0]} />
                        <BlogCard blog={blogs[1]} />
                    </div>
                </div>
            </div>
            <div className=' container py-20'>
                <div className="flex flex-col justify-center items-center text-center lg:mx-52" >
                    <p className="text-Medium-14 text-primary-800 bg-primary-100 py-1 px-4 rounded-full" >List Blogs</p>
                    <h3 className="text-Bold-24 lg:text-Bold-40 mt-2" >Our Latest Blogs</h3>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-5'>
                    {
                        blogs.map((bg, index) => <BlogCard blog={bg} key={index}/> )
                    }
                </div>
            </div>
            <FAQ_Section />
        </div>
    );
};

export default Blogspage;