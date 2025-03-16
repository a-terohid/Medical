import RelatedBlogs from "@/elements/RelatedBlogs";


const BlogDetailsPage = ({blog}) => {

    return (
        <div>
            <div className="bg-primary-900">
                <div className=" container py-14 flex flex-col items-center text-center">
                    <p className="text-Medium-14 text-primary-100 bg-[#224450] py-1 px-4 rounded-full w-fit">Insights</p>
                    <h3 className="text-Bold-32 -mx-2 md:mx-0 mt-3 lg:text-Bold-56 text-primary-0">{blog.title}</h3>
                    <img src={blog.image} alt={blog.title} className="mt-12 rounded-xl" />
                </div>
            </div>
            <div className="container py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-[2fr_1fr]  gap-x-14 gap-y-10 ">
                <div dangerouslySetInnerHTML={{ __html: blog.content }} className="prose-headings:text-Bold-18 lg:prose-headings:text-Bold-24 prose-headings:mb-4 prose-p:text-Medium-14 lg:prose-p:text-Medium-16 prose-p:text-Secondinary-400 prose-p:mb-8 lg:prose-p:mb-12" />
                <div>
                    <p className="text-Semibold-20 mb-6">Related Blogs</p>
                    <div className=" border border-Secondinary-200 rounded-3xl">
                        <RelatedBlogs title={blog.related_blog.title} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailsPage;