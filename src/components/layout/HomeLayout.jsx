"use client";

import Footer from "@/elements/Footer";
import Navbar from "@/elements/Navbar";
import { usePathname } from "next/navigation";

const HomeLayout = ({ children }) => {
    const pathname = usePathname();
    const hideLayout = ["/login", "/signup"].includes(pathname); 

    return (
        <body>
            {!hideLayout && <Navbar />}
            <div className={ !hideLayout && `md:pt-[68px] lg:pt-24`}>{children}</div>
            {!hideLayout && <Footer />}
        </body>
    );
};

export default HomeLayout;