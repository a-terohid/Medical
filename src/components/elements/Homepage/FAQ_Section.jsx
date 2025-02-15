import FAQ_data from "@/utils/data/FAQS.json"
import { HiPlusSm } from "react-icons/hi";

const FAQ_Section = () => {
    return (
        <div className=" container py-14">
            <div className="flex flex-col justify-center items-center text-center lg:mx-52" >
                <p className="text-Medium-14 text-primary-800 bg-primary-100 py-1 px-4 rounded-full" >Questions & Answer</p>
                <h3 className="text-Bold-24 lg:text-Bold-40 mt-2" >Learn more about our platform by user questions</h3>
            </div>
            <div className="mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:gap-x-16 gap-4">
                {FAQ_data.faqs.map((faq, index) => (
                    <div key={index} className="">
                        <details className="group p-4 md:px-7 bg-Secondinary-350 open:bg-primary-50 rounded-xl">
                            <summary className="flex items-center justify-between cursor-pointer">
                                <p className="text-Semibold-14 group-open:text-primary-500">{faq.question}</p>
                                <span className="text-2xl lg:text-3xl ml-3 text-primary-500 transition-transform duration-500 group-open:rotate-45"><HiPlusSm /></span>
                            </summary>
                            <div className="text-Medium-14 text-Secondinary-500 mt-4 transition-all duration-500">
                                {faq.answer}
                            </div>
                        </details>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ_Section;