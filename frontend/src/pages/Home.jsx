// Home.jsx
import React, { useEffect, useState } from 'react';
import Hero from '../components/Layout/Hero';
import GenderCollection from '../components/Product/GenderCollection';
import NewArrival from '../components/Product/NewArrival';
import ProductDetails from '../components/Product/ProductDetails';
import ProductGrid from '../components/Product/ProductGrid';
import FeaturedCollection from '../components/Product/FeaturedCollection';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByFilters } from './../redux/slices/productSlice';
import axios from 'axios';

const Home = () => {
const dispatch=useDispatch()
const {products,loading,error}=useSelector((state)=>state.products)
const [bestSellerProduct,setbestSellerproduct]=useState(null)
useEffect(()=>{
    dispatch(fetchProductsByFilters({
        gender:"Women",
        category:"Bottom wear",
        limit:8,
    })
) 
const fetchBestSeller=async()=>{
    try {
        const response=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`)
        setbestSellerproduct(response.data)
    } catch (error) {
        console.error(error);
        
    }
}
fetchBestSeller()
 },[dispatch]) 

    return (
        <div>
            <Hero />
            <GenderCollection />
            <NewArrival />

            {/* Best Seller */} 
            <h2 className='mb-4 text-3xl font-bold text-center'>Best-Seller product</h2>
            {bestSellerProduct ? (<ProductDetails productId={bestSellerProduct._id}  />):(
                <p className='text-mb-center'>Loading Beat Seller product.....</p>
            )}
            <div className='container mx-auto'>
                <h2 className='mb-4 text-3xl font-bold text-center'>
                    Top Wears for Women
                </h2>
                <ProductGrid products={products} loading={loading} error={error} />
            </div>

            <FeaturedCollection />
        </div>
    );
};

export default Home;