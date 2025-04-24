import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyOrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const navigate=useNavigate()

    useEffect(() => {
        // Simulate fetching orders
        setTimeout(() => {
            const mockOrders = [
                {
                    _id: "12345",
                    createdAt: new Date(),
                    shippingAddress: { city: "New York", country: "USA" },
                    orderItems: [
                        {
                            name: "Product 1",
                            image: "https://picsum.photos/500/500?random=1",

                        },
                    ],
                    totalPrice: 100,
                    isPaid: true
                },
                {
                    _id: "123456",
                    createdAt: new Date(),
                    shippingAddress: { city: "New York", country: "USA" },
                    orderItems: [
                        {
                            name: "Product 2",
                            image: "https://picsum.photos/500/500?random=2",

                        },
                    ],
                    totalPrice: 500,
                    isPaid: true
                },
            ];
            setOrders(mockOrders);
        }, 1000);
    }, []);
 const handlerowclick=(id) => {
    navigate(`/order/${id}`)
 }
    return (
        <div className="p-4 mx-auto max-w-7xl sm:p-6">
            <h2 className="mb-6 text-xl font-bold sm:text-2xl">My Orders</h2>
            <div className="relative overflow-hidden shadow-md sm:rounded-lg">
                <table className="min-w-full text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 sm:py-3">Image</th>
                            <th className="px-4 py-2 sm:py-3">Order ID</th>
                            <th className="px-4 py-2 sm:py-3">Date</th>
                            <th className="px-4 py-2 sm:py-3">City</th>
                            <th className="px-4 py-2 sm:py-3">Country</th>
                            <th className="px-4 py-2 sm:py-3">Status</th>
                            <th className="px-4 py-2 sm:py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <tr key={order._id} onClick={()=>handlerowclick(order._id)} className="border-b cursor-pointer hover:border-gray-50">
                                    <td className="px-2 py-2 sm:py-4 sm:px-4">
                                        <img src={order.orderItems[0].image} alt={order.orderItems[0].name} className="object-cover w-10 h-10 rounded-lg sm:w-12 sm:h-12" />
                                    </td>
                                    <td className="px-2 py-2 font-medium text-gray-900 sm:py-4 sm:px-4 whitespace-nowrap">
                                        {order._id}
                                    </td>
                                    <td className="px-2 py-2 sm:py-4 sm:px-4">
                                        {new Date(order.createdAt).toLocaleDateString()} {" "}
                                        {new Date(order.createdAt).toLocaleTimeString()}
                                    </td>
                                    <td className="px-2 py-2 sm:py-4 sm:px-4">
                                        {order.shippingAddress
                                            ? `${order.shippingAddress.city}, ${order.shippingAddress.country}`
                                            : "N/A"}
                                    </td>
                                    <td className="px-2 py-2 sm:py-4 sm:px-4">
                                        {order.orderItems.length}
                                    </td>
                                    <td className="px-2 py-2 sm:py-4 sm:px-4">
                                        {order.totalPrice}
                                    </td>
                                    <td className="px-2 py-2 sm:py-4 sm:px-4">
                                        <span className={`${order.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                            } px-2 py-1 rounded-full text-xs sm:text-sm font-medium`} >
                                        {order.isPaid ? "Paid" : "Pending"}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <td colSpan={7} className="px-4 py-4 text-center text-gray-500">
                                you have no Orders
                            </td>
                        )}
                    </tbody>
                </table>
            </div>
        </div>

    )
};

export default MyOrdersPage;
