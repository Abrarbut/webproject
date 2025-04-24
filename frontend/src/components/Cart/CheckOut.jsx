import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Paypal from './Paypal'

const cart = {
    items: [
        {
            name: "Product 1",
            size: "M",
            color: "Red",
            price: 120,
            image: "https://picsum.photos/500/500?random=3g"
        },
        {
            name: "Product 2",
            size: "L",
            color: "Blue",
            price: 75,
            image: "https://picsum.photos/500/500?random=4"
        }
    ],
    totalPrice: 195,
    shipping: 10
}

const CheckOut = () => {
    const navigate = useNavigate()
    const [checkOutId, setCheckOutId] = useState(null)
    const [shippingAddress, setShippingAddress] = useState({
        firstName: "",
        lastName: "",
        Email: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        phone: "",
    })

    useEffect(() => {
        if (checkOutId) {
            console.log("CheckOutId:", checkOutId)
            console.log("Shipping Address:", shippingAddress)
        }
    }, [checkOutId])

    const handleCreateCheckOut = (e) => {
        e.preventDefault()
        setCheckOutId(123)
    }

    const handlePaymentSuccess = (details) => {
        console.log("Payment successful with ID:", details)
        alert("Payment successful!")
        navigate("/order-confirmation")
    }

    return (
        <div className="grid grid-cols-1 gap-8 px-6 py-10 mx-auto tracking-tight lg:grid-cols-2 max-w-7xl">

            {/* LEFT SECTION: Form */}
            <div className="flex flex-col gap-4 p-6 bg-white border rounded-lg shadow-sm">
                <h2 className='mb-6 text-2xl uppercase'>Checkout</h2>
                <form onSubmit={handleCreateCheckOut}>
                    <h3 className='mb-4 text-lg'>Contact Details</h3>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700">E-mail</label>
                        <input type='email' value="user@example.com" className='w-full p-2 border rounded' disabled />
                    </div>

                    <h3 className='mb-4 text-lg'>Delivery</h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">First Name</label>
                            <input type='text' value={shippingAddress.firstName} onChange={(e) => setShippingAddress({ ...shippingAddress, firstName: e.target.value })} className='w-full p-2 border rounded' placeholder='Enter your first name' />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Last Name</label>
                            <input type='text' value={shippingAddress.lastName} onChange={(e) => setShippingAddress({ ...shippingAddress, lastName: e.target.value })} className='w-full p-2 border rounded' placeholder='Enter your last name' />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700">Address</label>
                        <input type='text' value={shippingAddress.address} onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })} className='w-full p-2 border rounded' placeholder='Enter your address' />
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">City</label>
                            <input type='text' value={shippingAddress.city} onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })} className='w-full p-2 border rounded' placeholder='City' />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Postal Code</label>
                            <input type='text' value={shippingAddress.postalCode} onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })} className='w-full p-2 border rounded' placeholder='Postal Code' />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Country</label>
                            <input type='text' value={shippingAddress.country} onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })} className='w-full p-2 border rounded' placeholder='Country' />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700">Phone No</label>
                        <input type='tel' value={shippingAddress.phone} onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value })} className='w-full p-2 border rounded' placeholder='Phone number' />
                    </div>

                    <div className="mt-6">
                        {!checkOutId ? (
                            <button type='submit' className="w-full py-3 text-white bg-black rounded">Continue to Payment</button>
                        ) : (
                            <div>
                                <h3 className='mb-4 text-lg'>Pay with PayPal</h3>
                                <Paypal
                                    amount={cart.totalPrice + cart.shipping}
                                    onSuccess={handlePaymentSuccess}
                                    onError={(err) => alert("Payment failed. Please try again.")}
                                />
                            </div>
                        )}
                    </div>
                </form>
            </div>

            {/* RIGHT SECTION: Order Summary */}
            <div className="p-6 border rounded-lg shadow-sm bg-gray-50 h-fit lg:sticky top-6">
                <h3 className="mb-4 text-lg font-semibold">Order Summary</h3>
                <div className="py-4 mb-4 border-t">
                    {cart.items.map((product, index) => (
                        <div key={index} className="flex items-start justify-between py-2 border-b">
                            <div className="flex items-start gap-4">
                                <img src={product.image} alt={product.name} className="object-cover w-20 h-24 mr-4" />
                                <div>
                                    <h3 className="font-semibold text-md">{product.name}</h3>
                                    <p className="text-sm text-gray-500">Size: {product.size}</p>
                                    <p className="text-sm text-gray-500">Color: {product.color}</p>
                                </div>
                            </div>
                            <p className="text-sm text-zinc-800">${product.price?.toLocaleString()}</p>
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-sm font-semibold">Subtotal</span>
                    <span className="text-sm">${cart.totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-sm">Shipping</span>
                    <span className="text-sm">${cart.shipping}</span>
                </div>
                <div className="flex items-center justify-between py-2 mt-4 text-lg font-semibold border-t">
                    <span>Total</span>
                    <span>${(cart.totalPrice + cart.shipping).toLocaleString()}</span>
                </div>
            </div>

        </div>
    )
}

export default CheckOut
