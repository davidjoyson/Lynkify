import { Link } from "react-router-dom";
import { useState } from "react";
import { Home, BarChart, Users, Settings, LogOut, User, Menu } from "lucide-react";

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState("home");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Sidebar */}
            <div className={`bg-blue-600 text-white p-5 flex flex-col space-y-6 transition-transform duration-300 ${isSidebarOpen ? "w-64" : "w-16"} md:w-64`}>
                <div className="flex justify-between items-center">
                    <h1 className={`text-2xl font-bold transition-opacity duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0 hidden"}`}>Lynkify</h1>
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden">
                        <Menu size={24} />
                    </button>
                </div>
                <nav className="flex flex-col space-y-4">
                    <button onClick={() => setActiveTab("home")} className="flex items-center space-x-2 p-2 rounded hover:bg-blue-700">
                        <Home size={20} />
                        <span className={`${isSidebarOpen ? "block" : "hidden"} md:block`}>Home</span>
                    </button>
                    <button onClick={() => setActiveTab("analytics")} className="flex items-center space-x-2 p-2 rounded hover:bg-blue-700">
                        <BarChart size={20} />
                        <span className={`${isSidebarOpen ? "block" : "hidden"} md:block`}>Analytics</span>
                    </button>
                    <button onClick={() => setActiveTab("users")} className="flex items-center space-x-2 p-2 rounded hover:bg-blue-700">
                        <Users size={20} />
                        <span className={`${isSidebarOpen ? "block" : "hidden"} md:block`}>Users</span>
                    </button>
                    <button onClick={() => setActiveTab("profiles")} className="flex items-center space-x-2 p-2 rounded hover:bg-blue-700">
                        <User size={20} />
                        <span className={`${isSidebarOpen ? "block" : "hidden"} md:block`}>Profile</span>
                    </button>
                    <button onClick={() => setActiveTab("settings")} className="flex items-center space-x-2 p-2 rounded hover:bg-blue-700">
                        <Settings size={20} />
                        <span className={`${isSidebarOpen ? "block" : "hidden"} md:block`}>Settings</span>
                    </button>
                </nav>
                <button className="mt-auto flex items-center space-x-2 p-2 rounded hover:bg-blue-700">
                    <LogOut size={20} />
                    <Link to="/">
                        <span className={`${isSidebarOpen ? "block" : "hidden"} md:block`}>Logout</span>
                    </Link>
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                {activeTab === "home" && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
                        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                            <thead className="bg-blue-600 text-white">
                                <tr>
                                    <th className="p-3 text-left">Sl No</th>
                                    <th className="p-3 text-left">Business Name</th>
                                    <th className="p-3 text-left">Rewards</th>
                                    <th className="p-3 text-left">Unique Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="p-3">1</td>
                                    <td className="p-3">Example Business</td>
                                    <td className="p-3">₹100</td>
                                    <td className="p-3 text-blue-500 cursor-pointer">https://lynkify.com/ref123</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3">2</td>
                                    <td className="p-3">Another Business</td>
                                    <td className="p-3">₹50</td>
                                    <td className="p-3 text-blue-500 cursor-pointer">https://lynkify.com/ref456</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
                {activeTab === "analytics" && <h2 className="text-2xl font-bold">Analytics Overview</h2>}
                {activeTab === "users" && <h2 className="text-2xl font-bold">User Management</h2>}
                {activeTab === "profiles" && <h2 className="text-2xl font-bold">Profile</h2>}
                {activeTab === "settings" && <h2 className="text-2xl font-bold">Settings</h2>}
            </div>
        </div>
    );
}
