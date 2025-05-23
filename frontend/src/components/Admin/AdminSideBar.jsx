import { FaBoxOpen, FaClipboardList, FaSignOutAlt, FaStore, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {logoutUser} from "../../redux/slices/authSlices"
import {clearCart} from "../../redux/slices/cartSlices"

const AdminSidebar = () => {
    const navigate = useNavigate();
    const dispatch=useDispatch()

    const handleLogout = () => {
        dispatch(logoutUser())
        navigate("/");
        dispatch(clearCart())
    };

    return (
        <div className="min-h-screen p-6 text-white bg-gray-900 w-50">
            <div className="mb-6">
                <Link to="/admin" className="text-2xl font-medium text-white">
                    Shop.com
                </Link>
            </div>

            <h2 className="mb-6 text-xl font-medium text-center">
                Admin Dashboard
            </h2>

            <nav className="flex flex-col space-y-2">
                <NavLink
                    to="/admin/users"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
                    }
                >
                    <FaUser />
                    <span>Users</span>
                </NavLink>

                <NavLink
                    to="/admin/products"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
                    }
                >
                    <FaBoxOpen />
                    <span>Products</span>
                </NavLink>

                <NavLink
                    to="/admin/orders"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
                    }
                >
                    <FaClipboardList />
                    <span>Orders</span>
                </NavLink>

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
                    }
                >
                    <FaStore />
                    <span>Shop</span>
                </NavLink>
            </nav>

            <div className="mt-6">
                <button
                    onClick={handleLogout}
                    className="flex items-center justify-center w-full px-4 py-2 space-x-2 text-white bg-red-500 rounded hover:bg-red-600"
                >
                    <FaSignOutAlt />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
};


export default AdminSidebar;