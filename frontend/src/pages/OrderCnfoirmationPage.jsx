const checkout = {
    _id: "12323",
    createdAt: new Date(),
    checkoutItems: [
        {
            productId: "1",
            name: "Jacket",
            color: "black",
            size: "M",
            price: 150,
            quantity: 1,
            image: "https://picsum.photos/150?random=1",
        },
        {
            productId: "1",
            name: "Jacket",
            color: "black",
            size: "M",
            price: 150,
            quantity: 1,
            image: "https://picsum.photos/150?random=1",
        },
    ],
    shippingAddress: {
        address: "123 Main St",
        city: "New York",
        state: "NY",
        country: "USA",

    },
}

const OrderCnfoirmationPage = () => {
    const calculatEstimatedDelivery = (createdAt) => {
        const orderDate = new Date(createdAt)
        orderDate.setDate(orderDate.getDate() + 10);
        return orderDate.toLocaleDateString()
    }
    return (
        <div className="p-6 px-4 py-10 mx-auto bg-white max-w-7xl">
            <h1 className="mb-8 text-4xl font-bold text-center text-emerald-700">
                Thank you for your order!
            </h1>
            {checkout && (
                <div className="p-6 bg-white border rounded-lg shadow-sm">
                    <div className="flex justify-between mb-20">
                        {/*order id and date  */}
                        <div>
                            <h2 className="text-xl font-semibold">
                                Order ID: {checkout._id}
                            </h2>
                            <p className="bg-gray-500 text">
                                Order Date: {new Date(checkout.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                        {/* Estimate Delivery */}
                        <div>
                            <p className="text-sm text-emerald-500">
                                Estimated-Delivery:  {calculatEstimatedDelivery(checkout.createdAt)}
                            </p>
                        </div>

                    </div>
                    {/* ordered items */}
                    <div className="mb-20">
                        {checkout.checkoutItems.map((item)=>{
                            <div key={item.productId} className="flex items-center mb4">
                                <img src={item.image} alt={item.name} 
                                className="object-cover w-16 h-16 mr-4 rounded-md"
                                />
                                <div>
                                    <h4 className="font-semibold text-md">{item.name}</h4>
                                    <p className="text-sm text-gray-500">{item.color}|{item.size}</p>
                                </div>
                                <div className="ml-auto text-right">
                                    <p className="text-md">${item.price}</p>
                                    <p className="text-sm text-gray-600">Qty:{item.quantity}</p>
                                    
                                </div>
                            </div>
                        })}
                        
                    </div>
                    {/* Payment and Delivery info */}
                    <div className="grid grid-cols-2 gap-8">
                        {/* payment info */}
                        <div>
                            <div className="mb-2 text-lg font-semibold">Payment</div>
                            <p className="text-gray-600">Paypal</p>
                        </div>
                        <div>
                            <h4 className="mb-2 font-semibold">Delivery</h4>
                            <p className="text-gray-600">{checkout.shippingAddress.address}</p>
                            <p className="text-gray-600">{checkout.shippingAddress.city},{""}{checkout.shippingAddress.country}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default OrderCnfoirmationPage
