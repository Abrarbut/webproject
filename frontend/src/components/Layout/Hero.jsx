import { Link } from "react-router-dom";
import heroImg from "../../assets/hero.webp";

const Hero = () => {
    return (
        <section className="relative">
            <img
                src={heroImg}
                alt="Rabbit"
                className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="p-6 text-center text-white">
                    <h1 className="mb-4 text-4xl font-bold tracking-tighter uppercase md:text-9xl">
                        Vacation <br /> Ready
                    </h1>
                    <p className="mb-6 text-sm tracking-tighter md:text-lg">
                        Explore our vacation-ready outfits with fast worldwide shipping.
                    </p>
                    <Link to="#" className="px-6 py-2 text-lg text-gray-600 bg-white rounded-md">
                        Shop now

                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
