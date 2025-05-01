import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineUser, HiOutlineShoppingBag } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import SearchBar from './SearchBar';
import Cart from '../Layout/Cart';
import { IoClose } from "react-icons/io5";
import {useSelector} from 'react-redux';

const Navbar = () => {
  const {user}=useSelector((state)=>state.auth)
  const [draweropen, setDrawerOpen] = useState(false); // Initially set to false
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); // State to store cart items
  const {cart}=useSelector((state)=>state.cart)
  
   const cartItemcount=cart?.products?.reduce((total,product)=>total+product.quantity,0)|| 0; 
   
  // Toggle functions
  const toggleNavdrawer = () => {
    setNavDrawerOpen((prev) => !prev);
  };

  const toggleCartDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <nav className='container flex items-center justify-between px-6 py-4 mx-auto'>
        {/* Logo */}
        <div>
          <Link to="/" className="text-2xl font-bold text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text">
            Shop<span className="text-red-500">.com</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className='hidden space-x-6 md:flex'>
          <Link to="/collection/all/?gender=Men" className='text-sm font-medium text-gray-700 uppercase hover:text-black'>Mens</Link>
          <Link to="/collection/all/?gender=Women" className='text-sm font-medium text-gray-700 uppercase hover:text-black'>Womens</Link>
          <Link to="/collection/all/?category=Top wear" className='text-sm font-medium text-gray-700 uppercase hover:text-black'>Top Wear</Link>
          <Link to="/collection/all/?category=Bottom wear" className='text-sm font-medium text-gray-700 uppercase hover:text-black'>Bottom Wear</Link>
        </div>

        {/* Icons Section */}
        <div className='flex items-center space-x-4'>
          {user && user.role==="admin" && <Link to="/admin" className='block px-2 text-sm text-white bg-black rounded'>Admin</Link>}
          {/* User Icon */}
          <Link to="/profile" className='hover:text-black'>
            <HiOutlineUser className="w-6 h-6 text-gray-700" />
          </Link>

          {/* Cart Button */}
          <button onClick={toggleCartDrawer} className='relative hover:text-black' aria-label="Open Cart">
            <HiOutlineShoppingBag className="w-6 h-6 text-gray-700" />
            {cartItemcount > 0 && (
              <span className='absolute -top-2 -right-2 bg-[#ff625c] text-white text-xs rounded-full px-2 py-0.5'>
                {cartItemcount}
              </span>
            )}
          </button>

          {/* Search Bar */}
          <SearchBar />

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleNavdrawer} aria-label="Open Menu">
            <HiBars3BottomRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Cart Drawer */}
      <Cart draweropen={draweropen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Navigation Drawer */}
      <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleNavdrawer} aria-label="Close Menu">
            <IoClose className='w-6 h-6 text-gray-600' />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div className='p-4'>
          <h2 className='mb-4 text-xl font-semibold'>MENU</h2>
          <nav className="p-4 space-y-4">
            <Link to="/collection/all/?gender=Men" onClick={toggleNavdrawer} className="block text-lg text-gray-700 hover:text-black">Mens</Link>
            <Link to="/collection/all/?gender=Women" onClick={toggleNavdrawer} className="block text-lg text-gray-700 hover:text-black">Womens</Link>
            <Link to="/collection/all/?category=Top wear" onClick={toggleNavdrawer} className="block text-lg text-gray-700 hover:text-black">Top Wear</Link>
            <Link to="/collection/all/?category=Bottom wear" onClick={toggleNavdrawer} className="block text-lg text-gray-700 hover:text-black">Bottom Wear</Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
