import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductManagement = () => {
    const products = [
        {
            _id: 123123,
            name: "Shirt",
            price: 110,
            sku: "123123213",
        },
    ];
    const handleDelete = (id) => {
        if (window.confirm("Are you sure wnat ti delete"))
            console.log(`Deleting user with ID: ${id}`);
    }

    return (
        <div className="p-6 mx-auto max-w-7xl">
            <h2 className="mb-6 text-2xl font-bold">Product Management</h2>
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="min-w-full text-left text-gray-500">
                    <thead className="text-xs text-gray-700 bg-gray-100 uppercasr">
                        <tr>
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Price</th>
                            <th className="px-4 py-3">SKU</th>
                            <th className="px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? (
                            products.map((product) => (
                                <tr key={product._id} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-3">{product.name}</td>
                                    <td className="px-4 py-3">${product.price}</td>
                                    <td className="px-4 py-3">{product.sku}</td>
                                    <td className="flex gap-4 p-4">
                                        <Link to={`/admin/products/${product._id}/edit`}
                                            className="px-4 py-2 text-white transition duration-200 bg-yellow-500 rounded hover:bg-yellow-600"
                                        >
                                            Edit</Link>
                                        <button onClick={() => handleDelete(product._id)} className="gap-10 px-3 py-2 text-white transition duration-200 bg-red-700 rounded">Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="py-4 text-center">No products found</td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default ProductManagement;
