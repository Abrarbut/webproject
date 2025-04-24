import React, { useState } from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSearch = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchTerm);
        setIsOpen(false);
    };

    return (
        <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ?
            "absolute top-0 left-0 w-full bg-white h-24 z-50 shadow-md flex" : "w-auto"}`}>

            {isOpen ? (
                <form onSubmit={handleSubmit} className="w-full flex items-center justify-center relative">
                    <div className="relative w-1/2">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="outline-none px-4 py-2 pr-10 pl-2 text-gray-700 w-full placeholder-gray-500 rounded-lg border border-gray-100 focus:ring-2 focus:ring-gray-400"
                        />
                        <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black transition duration-200">
                            <FaMagnifyingGlass className="h-5 w-5" />
                        </button>
                    </div>
                    <button type="button" onClick={handleSearch} className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black transition duration-200">
                        <IoClose className="h-5 w-5" />
                    </button>
                </form>
            ) : (
                <button
                    onClick={handleSearch}
                    className="bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300 shadow-sm"
                >
                    <FaMagnifyingGlass className="h-5 w-5 text-gray-700" />
                </button>
            )}
        </div>
    );
};

export default SearchBar;
