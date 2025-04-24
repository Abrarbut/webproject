import { Link } from "react-router-dom";
import mensCollectionImage from "../../assets/mens-collection.svg";
import womensCollectionImage from "../../assets/womens-collection.svg";
import KidsCollectionImage from "../../assets/Kids.svg";

const GenderCollectionSection = () => {
    return (
        <section className="px-4 py-16 lg:px-0">
            <div className="container flex flex-col gap-8 mx-auto md:flex-row">
                {/* Women's Collection */}
                <div className="relative flex-1">
                    <img src={womensCollectionImage} className="w-full h-[600px] md:h-[700px] lg:h-[800px] object-cover" alt="Women's Collection" />
                    <div className="absolute p-4 bg-white rounded-lg shadow-lg md:p-6 lg:p-8 bottom-4 md:bottom-8 left-4 md:left-8 bg-opacity-90">
                        <h2 className="mb-2 text-lg font-extrabold tracking-wider text-orange-600 uppercase md:mb-3 md:text-2xl lg:text-3xl">
                            Women's Collection
                        </h2>
                        <Link 
                            to="/collections/all?gender=Women" 
                            className="text-base font-medium text-orange-600 underline transition duration-300 md:text-lg lg:text-xl hover:text-orange-500"
                        >
                            Shop Now →
                        </Link>
                    </div>
                </div>

                {/* Men's Collection */}
                <div className="relative flex-1">
                    <img src={mensCollectionImage} className="w-full h-[600px] md:h-[700px] lg:h-[800px] object-cover" alt="Men's Collection" />
                    <div className="absolute p-4 bg-white rounded-lg shadow-lg md:p-6 lg:p-8 bottom-4 md:bottom-8 left-4 md:left-8 bg-opacity-90">
                        <h2 className="mb-2 text-lg font-extrabold tracking-wider text-orange-600 uppercase md:mb-3 md:text-2xl lg:text-3xl">
                            Men's Collection
                        </h2>
                        <Link 
                            to="/collections/all?gender=Men" 
                            className="text-base font-medium text-orange-600 underline transition duration-300 md:text-lg lg:text-xl hover:text-orange-500"
                        >
                            Shop Now →
                        </Link>
                    </div>
                </div>

                {/* Kids Collection */}
                {/* <div className="relative flex-1">
                    <img src={KidsCollectionImage} className="w-full h-[600px] md:h-[700px] lg:h-[800px] object-cover" alt="Kids' Collection" />
                    <div className="absolute p-4 bg-white rounded-lg shadow-lg md:p-6 lg:p-8 bottom-4 md:bottom-8 left-4 md:left-8 bg-opacity-90">
                        <h2 className="mb-2 text-lg font-extrabold tracking-wider text-orange-600 uppercase md:mb-3 md:text-2xl lg:text-3xl">
                            Kids' Collection
                        </h2>
                        <Link 
                            to="/collections/all?gender=Kids" 
                            className="text-base font-medium text-orange-600 underline transition duration-300 md:text-lg lg:text-xl hover:text-orange-500"
                        >
                            Shop Now →
                        </Link>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default GenderCollectionSection;
