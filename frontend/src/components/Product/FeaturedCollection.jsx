import React from 'react'
import { Link } from 'react-router-dom'
import featured from "../../assets/featured.webp"

const FeaturedCollection = () => {
    return (
        <section className='px-4 py-16 lg:px-0'>
            <div className="container flex flex-col-reverse items-center mx-auto rounded-3xl lg:flex-row bg-green-50">

                <div className="text-center lg:w-1/2 lg:text-left">
                    <h2 className="text-lg font-semibold text-gray-700">Comfort and Style</h2>
                    <h2 className="mb-6 text-4xl font-bold lg:text-5xl">Apparel Made for EveryDay Life</h2>
                    <p className="mb-6 text-gray-600 text-large">
                        Discover high-quality, comfortable clothing  that effortlessly blends fashion and function. Designed to make you look and feel great every day.
                    </p>
                    <Link to="/collection/all" className='px-6 py-3 text-lg text-white bg-black rounded-lg hover:bg-gray-800 '>Shop Now
                    </Link>               
                </div>
                <div className="lg:w-1/2">
                <img src={featured} alt="Feautured collection" className='w-full h-full oject-cover lg:rounded-tr-3xl lg:rounded-br-3xl' />
                </div>
            </div>
        </section>
    )
}

export default FeaturedCollection
