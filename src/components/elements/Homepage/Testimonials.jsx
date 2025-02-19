"use client";

import testimonials_data from "@/utils/data/testimonials.json";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { BiSolidQuoteRight } from "react-icons/bi";
import { useState } from "react";

const Testimonials = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(0);

    const [sliderRef, instanceRef] = useKeenSlider({
        slides: {
            perView: 1,
            spacing: 16,
        },
        breakpoints: {
            "(min-width: 1024px)": {
                slides: { perView: 3, spacing: 24 },
            },
        },
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created(slider) {
            setTotalSlides(slider.track.details.maxIdx); 
        }
    });


    return (
        <div className="bg-primary-800">
            <div className=" container py-14 lg:py-20" >
                <div className="text-primary-0 lg:flex justify-between items-center lg:gap-x-24">
                    <div className="">
                        <p className="text-Medium-14 text-primary-100 py-1 px-5 w-fit bg-primary-1050 rounded-full" >Testimonials</p>
                        <h3 className="text-Bold-24 lg:text-Bold-40 mt-2 mb-5" >Our Platform's Impact in Their Own Words</h3>
                    </div>
                    <div>
                        <p className="text-Regular-14 lg:text-Regular-16">Dive into inspiring success stories that showcase how our platform has empowered healthcare practices, improved efficiency, and elevated patient satisfaction.</p>
                    </div>
                    <div className="lg:flex hidden items-center justify-center gap-x-5 text-primary-0 text-Bold-14">
                        <button onClick={() => instanceRef.current?.prev()} className={`p-4 ${currentSlide=== 0 ? " border-primary-0" : "bg-primary-600 border-primary-600" } border rounded-full`}> <HiChevronLeft/></button>
                        <p>0{currentSlide+1}<span className=" opacity-50" >/0{totalSlides+1}</span></p>
                        <button onClick={() => instanceRef.current?.next()} className={`p-4 ${currentSlide=== totalSlides ? " border-primary-0" : "bg-primary-600 border-primary-600" } border  rounded-full`} ><HiChevronRight/></button>
                    </div>
                </div>
                <div className="relative mt-10">
                    <div ref={sliderRef} className="keen-slider">
                        {testimonials_data.testimonials.map((testimonial, index) => (
                            <div key={index} className="keen-slider__slide w-40  text-primary-0 p-6 even:bg-primary-500 rounded-2xl odd:border-primary-700 odd:border flex flex-col">
                              <div className="flex-1 mb-10" >
                                <p className="text-Semibold-16" >{testimonial.feedback}</p>
                              </div>
                              <div className="flex ">
                                <div className="flex gap-x-3 items-center flex-1" >
                                    <img src={testimonial.image} alt={testimonial.name}  className="w-10 h-10 rounded-full"/>
                                    <div>
                                        <p className="text-Bold-16" >{testimonial.name}</p>
                                        <p className="text-Medium-14" >{testimonial.job}</p>
                                    </div>
                                </div>
                                <BiSolidQuoteRight className="text-5xl text-white opacity-20"/>
                              </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 flex items-center justify-center gap-x-5 text-primary-0 text-Bold-14 lg:hidden">
                        <button onClick={() => instanceRef.current?.prev()} className={`p-4 ${currentSlide=== 0 ? " border-primary-0" : "bg-primary-600 border-primary-600" } border rounded-full`}> <HiChevronLeft/></button>
                        <p>0{currentSlide+1}<span className=" opacity-50" >/0{totalSlides+1}</span></p>
                        <button onClick={() => instanceRef.current?.next()} className={`p-4 ${currentSlide=== totalSlides ? " border-primary-0" : "bg-primary-600 border-primary-600" } border  rounded-full`} ><HiChevronRight/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;