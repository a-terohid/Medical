"use client";
import Link from "next/link";
import { IoArrowForwardSharp } from "react-icons/io5";
import { useEffect, useState } from "react";

const BlogCard = ({ blog }) => {
    const [strippedContent, setStrippedContent] = useState("");

    useEffect(() => {
        if (blog.content) {
            const doc = new DOMParser().parseFromString(blog.content, "text/html");
            setStrippedContent(doc.body.textContent || "");
        }
    }, [blog.content]);

    return (
        <div className="p-3 bg-primary-0 rounded-3xl">
            <img src={blog.image || "/default.jpg"} alt={blog.title || "No Title"} className="rounded-2xl mb-3"/>
            <div className="p-3">
                <div className="flex justify-between items-center mb-2">
                    <p className="text-Medium-12 py-1 px-3 rounded-full bg-slate-200">Insights</p>
                    <p className="text-Secondinary-400 text-Regular-12">{blog.date || "No Date"}</p>
                </div>
                <h4 className="text-Bold-20 lg:text-Bold-24 mb-4">{blog.title || "Untitled"}</h4>
                <p className="text-Regular-12 mb-4 lg:text-Regular-14 text-ellipsis line-clamp-2 lg:line-clamp-3 overflow-hidden">
                    {strippedContent}
                </p>
                <Link className="flex items-center gap-x-1 text-primary-500 text-Bold-14" href={`/blogs/${blog.id || "#"}`}>
                    Read more <IoArrowForwardSharp className="text-lg mt-[2px]" />
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
