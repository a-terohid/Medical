"use client";

import CrossMenue from "@/public/svg/Icon/CrossMenue";
import HamMenue from "@/public/svg/Icon/HamMenue";
import LogoـRow from "@/public/svg/Logo/LogoـRow";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
    // State to manage the menu open/close state
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // Get the current route path

    // Navigation items array
    const navItems = [
        { name: "Features", href: "/features" },
        { name: "Use Case", href: "/use-case" },
        { name: "Pricing", href: "/pricing" },
        { name: "Blogs", href: "/blogs" },
        { name: "Support", href: "/support" },
    ];

    // Toggle menu handler
    const handler = () => setIsOpen(!isOpen);

    return (
        <header className="z-30 fixed w-screen bg-primary-0">
            <div className="container flex items-center justify-between lg:justify-start py-5">
                {/* Logo */}
                <LogoـRow className="w-24 md:w-24 lg:w-28" />
                
                {/* Desktop Navigation */}
                <div className="hidden lg:flex w-full ml-10 text-Semibold-14 justify-between items-center">
                    <div>
                        <ul className="flex gap-x-3 xl:gap-x-5">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} 
                                        className={`py-3 px-4 ${ pathname === item.href ? "text-primary-500 border-b border-primary-500" : "text-Secondinary-500"}`}> 
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Authentication Buttons */}
                    <div className="flex gap-x-3">
                        <button className="w-32 py-4 px-5 text-primary-500 hover:text-primary-0 hover:bg-primary-500 hover:border-primary-500 border-Secondinary-200 border-2 rounded-[10px]">
                            Log in
                        </button>
                        <button className="w-32 py-4 px-5 bg-primary-500 hover:text-primary-500 hover:bg-primary-0 Hover:border-Secondinary-200 hover:border-2 text-primary-0 rounded-[10px]">
                            Get Started
                        </button>
                    </div>
                </div>
                
                {/* Mobile Navigation Toggle Button */}
                <div className="lg:hidden">
                    <p className="w-6" onClick={handler}>
                        {isOpen ? <CrossMenue /> : <HamMenue />}
                    </p>
                </div>
            </div>
            
            {/* Mobile Navigation Menu */}
            <div>
                {isOpen ? (
                    <div className="container">
                        <ul className="flex flex-col gap-y-5 mt-4 mb-8">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} 
                                        className={`py-3 px-4 ${ pathname === item.href ? "text-primary-500 border rounded-lg border-primary-500" : "text-Secondinary-500"}`}> 
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : null}
            </div>
        </header>
    );
};

export default Navbar;
