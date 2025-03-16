import BlogCard from "@/elements/BlogCard";
import BlogDetailsPage from "@/template/BlogDetailsPage";
import blogs_data from "@/utils/data/blogs.json"


const page = ({params : { blogsId }}) => {

    const blog = blogs_data.blogs.filter(bg => bg.id === blogsId)[0] 
    

    return (<BlogDetailsPage blog={blog } />);
};

export default page;