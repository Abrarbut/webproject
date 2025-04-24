import React, { useEffect, useRef, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import FilterSideBar from '../components/Product/FilterSideBar'
import SortOptions from '../components/Product/SortOptions'
import ProductGrid from '../components/Product/ProductGrid'

const CollectionPage = () => {
    const [products, setProducts] = useState([])
    const SideBarRef = useRef(null)
    const [isSidebaropen, setIsSidebaropen] = useState(false)

    const togglesideBar = () => {
        setIsSidebaropen(!isSidebaropen)
    }

    const handleClickoutside = (e) => {
        if (SideBarRef.current && !SideBarRef.current.contains(e.target)) {
            setIsSidebaropen(false)
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickoutside)
        return () => {
            document.removeEventListener("mousedown", handleClickoutside)
        }
    }, [])

    useEffect(() => {
        setTimeout(() => {
            const fetchedProducts = [
                { _id: 1, name: "Product 1", price: 100, images: [{ url: "https://picsum.photos/500/500?random=3" }] },
                { _id: 2, name: "Product 2", price: 100, images: [{ url: "https://picsum.photos/500/500?random=4" }] },
                { _id: 3, name: "Product 3", price: 100, images: [{ url: "https://picsum.photos/500/500?random=5" }] },
                { _id: 4, name: "Product 4", price: 100, images: [{ url: "https://picsum.photos/500/500?random=6" }] },
                { _id: 5, name: "Product 1", price: 100, images: [{ url: "https://picsum.photos/500/500?random=7" }] },
                { _id: 6, name: "Product 2", price: 100, images: [{ url: "https://picsum.photos/500/500?random=8" }] },
                { _id: 7, name: "Product 3", price: 100, images: [{ url: "https://picsum.photos/500/500?random=9" }] },
                { _id: 8, name: "Product 4", price: 100, images: [{ url: "https://picsum.photos/500/500?random=1" }] }
            ]
            setProducts(fetchedProducts)
        }, 1000)
    }, [])

    return (
        <div className='flex flex-col lg:flex-row'>
            <button
                className="flex items-center justify-center p-2 border lg:hidden"
                onClick={togglesideBar}
            >
                <FaFilter className='mr-2' /> Filters
            </button>

            {/* Sidebar */}
            <div
                ref={SideBarRef}
                className={`lg:block ${isSidebaropen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
            >
                <FilterSideBar />
            </div>

            {/* Product Section */}
            <div className="flex-grow p-4">
                <h2 className="mb-4 text-2xl uppercase">All collection</h2>
                <SortOptions />
                <ProductGrid products={products} />
            </div>
        </div>
    )
}

export default CollectionPage
