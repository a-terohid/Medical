import Footer from "@/elements/Footer";
import Navbar from "@/elements/Navbar";


const HomeLayout = ({ children }) => {
    return (
        <body>
            <Navbar />
            <div className="md: pt-[68px] h-96 lg:pt-24 bg-red-700" >{ children }</div>
            <Footer />
        </body>
    )
};

export default HomeLayout;