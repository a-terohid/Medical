"use client"

import blogs_data from "@/utils/data/blogs.json"
import BlogCard from "./BlogCard";

const RelatedBlogs = ({title}) => {

    const blog = blogs_data.blogs.filter(bg => bg.title === title)[0]

    return (<BlogCard blog={blog}/>);
};

export default RelatedBlogs;