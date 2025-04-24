import { SiMeta } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="text-gray-700 bg-white border-t">
            {/* Top Section */}
            <div className="container flex flex-col items-center justify-between gap-6 py-6 mx-auto text-center md:flex-row md:text-left">
                <div className="flex flex-col items-center md:items-start">
                    <span className="text-xl">🔒</span>
                    <h4 className="font-semibold">FREE INTERNATIONAL SHIPPING</h4>
                    <p className="text-sm">On all orders over $100.00</p>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <span className="text-xl">🔄</span>
                    <h4 className="font-semibold">45 DAYS RETURN</h4>
                    <p className="text-sm">Money back guarantee</p>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <span className="text-xl">✅</span>
                    <h4 className="font-semibold">SECURE CHECKOUT</h4>
                    <p className="text-sm">100% secured checkout process</p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="container grid grid-cols-1 gap-6 py-10 mx-auto border-t md:grid-cols-4">
                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold">Newsletter</h3>
                    <p className="mt-2 text-sm">Be the first to hear about new products, exclusive events, and online offers.</p>
                    <p className="mt-1 text-sm">Sign up and get 10% off your first order.</p>
                    <div className="flex mt-3">
                        <input type="email" placeholder="Enter your email" className="flex-1 p-2 border" />
                        <button className="px-4 py-2 text-white bg-black">Subscribe</button>
                    </div>
                </div>

                {/* Shop Links */}
                <div>
                    <h3 className="text-lg font-semibold">Shop</h3>
                    <ul className="mt-2 space-y-1">
                        <li><a href="#" className="hover:underline">Men's Top Wear</a></li>
                        <li><a href="#" className="hover:underline">Women's Top Wear</a></li>
                        <li><a href="#" className="hover:underline">Men's Bottom Wear</a></li>
                        <li><a href="#" className="hover:underline">Women's Bottom Wear</a></li>
                    </ul>
                </div>

                {/* Support Links */}
                <div>
                    <h3 className="text-lg font-semibold">Support</h3>
                    <ul className="mt-2 space-y-1">
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">FAQs</a></li>
                        <li><a href="#" className="hover:underline">Features</a></li>
                    </ul>
                </div>

                {/* Follow Us */}
                <div>
                    <h3 className="text-lg font-semibold">Follow Us</h3>
                    <div className="flex items-center mt-2 space-x-4">
                        <a href="#" className='hover:text-gray-500'>
                            <SiMeta className='h-7 w-7' />
                        </a>
                        <a href="#" className='hover:text-gray-500'>
                            <FaInstagram className='h-7 w-7' />
                        </a>
                        <a href="#" className='hover:text-gray-500'>
                            <RiTwitterXFill className='h-7 w-7' />
                        </a>
                    </div>
                    <p className="mt-4 font-semibold">Call Us</p>
                    <p className="text-lg font-bold">📞 0123-456-789</p>
                </div>
            </div>

            {/* Copyright */}
            <div className="py-4 text-sm text-center border-t">
                © 2025,Product.All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
