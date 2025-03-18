"use client"

const BlogsPage = dynamic(() => import('@/template/Blogspage'), { ssr: false });

import React from 'react';

const page = () => {
    return ( <Blogspage/> );
};

export default page;
