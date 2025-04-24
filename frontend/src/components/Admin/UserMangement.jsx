import { useState } from "react";

const UserManagement = () => {
    const users = [
        {
            _id: 12345,
            name: "John Doe",
            email: "john@example.com",
            role: "admin",
        },
    ];

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "customer", // Default role
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        setFormData({
            name: "",
            email: "",
            password: "",
            role: "customer"
        })
    }
    const handleRoleChange = (userId, newRole) => {
        console.log({ id: userId, role: newRole });

    }
/**
 * Handles the deletion of a user.
 * This function is triggered when a user deletion action is performed.
 * Add the necessary logic to delete a user from the system.
 */
const handleDeleteUser = (userId) => {
    if(window.confirm("Are you sure wnat ti delete"))
    console.log(`Deleting user with ID: ${userId}`);
    // Add logic to delete the user from the system
};
 

    return (
        <div className="p-6 mx-auto max-w-7xl">
            <h2 className="mb-6 text-2xl font-bold">User Management</h2>
            {/* Add New User Form */}
            <div className="p-6 mb-6 rounded-lg">
                <h3 className="mb-4 text-lg font-bold">Add New User</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded "
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded "
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border rounded "
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Role</label>
                        <select name="role" value={formData.role}
                            className="w-full p-2 border rounded"
                        >
                            <option value="customer">Customer</option>
                            <option value="admin">Admin</option>

                        </select>
                    </div>
                    <button type="submit" className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">Add User</button>
                </form>
            </div>
            {/* User List Management */}
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="min-w-full text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Email</th>
                            <th className="px-4 py-3">Role</th>
                            <th className="px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id} className="border-b hover:bg-gray-50">
                                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                                    {user.name}
                                </td>
                                <td className="p-4">{user.email}</td>
                                <td className="p-4">
                                    <select
                                        value={user.role}
                                        onChange={(e) => handleRoleChange(user._id, e.target.value)}
                                        className="p-2 border rounded"
                                    >
                                        <option value="customer">Customer</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </td>
                                <td className="p-4">
                                    <button onClick={() => handleDeleteUser(user._id)}
                                        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </div>
    );

};

export default UserManagement;
