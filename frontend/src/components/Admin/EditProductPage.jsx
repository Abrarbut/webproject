import React, { useState } from 'react';

const EditProductPage = () => {
    const [productData, setProductData] = useState({
        name: "",
        description: "",
        price: 0,
        countInStock: 0,
        sku: "",
        category: "",
        brand: "",
        sizes: [],
        colors: [],
        collections: [],
        material: "",
        gender: "",
        images: [
            {
                url: "https://picsum.photos/150?random=1",
            },
            {
                url: "https://picsum.photos/150?random=2",
            },
        ],
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({ ...prevData, [name]: value }));

    }
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        console.log(file);

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(productData);
        
    }
    return (
        <div className="max-w-5xl p-6 mx-auto rounded-md shadow-md">
            <h2 className="mb-6 text-3xl font-bold">Edit Product</h2>
            <form onSubmit={handleSubmit}>
                {/* Product Name */}
                <div className="mb-6">
                    <label className="block mb-2 font-semibold">Product Name</label>
                    <input
                        type="text"
                        name="name"
                        value={productData.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-500 rounded-md"
                        required
                    />
                </div>

                {/* Description */}
                <div className="mb-6">
                    <label className="block mb-2 font-semibold">Dscription</label>
                    <textarea name="description" value={productData.description} className='w-full p-2 border border-gray-500 rounded-md' rows={4} onChange={handleChange} required></textarea>
                </div>
                {/* Price */}
                <div className="mb-6">
                    <label className="block mb-2 font-semibold">Dscription</label>
                    <input type="number" className="p-2 border-gray-500 rounded-md w-full-border" name='price' value={productData.price} onChange={handleChange} />
                </div>
                {/* coont in stock */}
                <div className="mb-6">
                    <label className="block mb-2 font-semibold">Count in stock</label>
                    <input type="number" className="p-2 border-gray-500 rounded-md w-full-border" name='countInStock' value={productData.countInStock} onChange={handleChange} />
                </div>
                {/* SKU */}
                <div className="mb-6">
                    <label className="block mb-2 font-semibold">SKU</label>
                    <input type="text" className="p-2 border-gray-500 rounded-md w-full-border" name='sku' value={productData.sku} onChange={handleChange} />
                </div>

                {/* Sizes */}
                <div className="mb-6">
                    <label className="block mb-2 font-semibold">Sizes (comma-seperated)</label>
                    <input type="text"
                        className="p-2 border-gray-500 rounded-md w-full-border"
                        name='sizes'
                        value={productData.sizes.join(", ")}
                        onChange={(e) => {
                            setProductData({
                                ...productData,
                                sizes: e.target.value.split(",").map((size) => size.trim())
                            })
                        }} />
                </div>
                {/* Colors */}
                <div className="mb-6">
                    <label className="block mb-2 font-semibold">colors (comma-seperated)</label>
                    <input type="text"
                        className="p-2 border-gray-500 rounded-md w-full-border"
                        name='colors'
                        value={productData.colors.join(" ,")}
                        onChange={(e) => {
                            setProductData({
                                ...productData,
                                colors: e.target.value.split(",").map((colors) => colors.trim())
                            })
                        }} />
                </div>
                {/* Image upload */}
                <div className="mb-6">
                    <label className="block mb-2 font-semibold">Upload Image</label>
                    <input type="file" onChange={handleImageUpload} />
                    <div className="flex gap-4 mt-4">
                        {productData.images.map((image, index) => {
                            <div key={index}>
                                <img src={image.url} alt={image.altText || "product Image"}
                                    className='object-cover w-20 h-20 rounded-md shadow-md' />
                            </div>
                        })}
                    </div>
                </div>
                <button className="w-full py-2 text-white bg-green-500 rounded-md transistion-colors hover:bg-green-500" type='submit'>
                    Update product
                </button>
            </form>
        </div>
    );
}

export default EditProductPage;

