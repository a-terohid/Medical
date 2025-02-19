import Feature_data from "@/utils/data/Feature.json";
const Feature = () => {
    return (
        <div className=" container py-14 lg:py-20">
            <div className=" md:flex md:flex-col md:justify-center md:items-center md:text-center">
                <p className="text-Medium-14 text-primary-800 bg-primary-100 py-1 px-4 rounded-full w-fit">key Features</p>
                <h3 className="text-Bold-24 lg:text-Bold-40 mt-2 mb-5">Explore the Power of Our Feature-Loaded</h3>
                <p className="text-Regular-14 text-Secondinary-400 lg:w-1/2">Optimize workflows, enhance communication, and deliver exceptional patient care with our feature-loaded medical dashboard.</p>
            </div>
            <div className="mt-10 lg:mt-20 flex flex-wrap lg:grid-cols-3 justify-center gap-x-14 gap-y-12">
                {
                    Feature_data.feature.map((fea , index)=> <div key={index} className="flex flex-col gap-y-8 justify-center text-center w-80" >
                        <img src={fea.image} alt={fea.title}/>
                        <div>
                            <h2 className="text-Bold-20 mb-3">{fea.title}</h2>
                            <p className="text-Regular-14 text-Secondinary-400">{fea.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Feature;