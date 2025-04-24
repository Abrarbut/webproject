import React from "react";
import MyOrdersPage from "./MyOrdersPage";

const Profile = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container flex-grow p-4 mx-auto md:p-6">
        <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
          {/* Left Section */}
          <div className="w-full p-6 rounded-lg shadow-md md:w-1/4">
            <h1 className="mb-4 text-2xl font-bold md:text-3xl">John Doe</h1>
            <p className="mb-4 text-lg text-gray-600">John@example.com</p>
            <button className="w-full px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">
              Logout
            </button>
          </div>
          {/* Right Section: Orders table */}
          <div className="w-full md:w-2/3">
          <MyOrdersPage/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;