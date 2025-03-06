import { Home, Settings, LogOut, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import HomeComponent from "./Home";
import ProfileComponent from "./Profile";
import ProfilePic from "../../Images/ProfilePic.png";

export default function Sidebar() {
    const [activeTab, setActiveTab] = useState("home");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <>
            <div className={`bg-gradient-to-b from-gray-800 to-gray-900 p-5 flex flex-col space-y-6 transition-transform duration-300 ${isSidebarOpen ? "w-64" : "w-16"} md:w-64`}>
                <div className="flex justify-between items-center">
                    <h1 className={`text-2xl font-bold transition-opacity duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0 hidden"}`}>Lynkify</h1>
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden">
                        <Menu size={24} />
                    </button>
                </div>
                {/* Profile Section */}
                <div className="flex flex-col items-center space-y-2 border-b border-gray-700 pb-4">
                    <img
                        src={ProfilePic}
                        alt="Profile"
                        className="w-16 h-16 rounded-full border-2 border-white"
                    />
                    <h2 className={`text-lg font-semibold ${isSidebarOpen ? "block" : "hidden"}`}>John Doe</h2>
                    <p className={`text-sm text-gray-400 ${isSidebarOpen ? "block" : "hidden"}`}>johndoe@email.com</p>
                </div>
                <nav className="flex flex-col space-y-4 ">
                    <button onClick={() => setActiveTab("home")} className="flex items-center space-x-2 p-2 rounded-xl hover:bg-purple-700">
                        <Home size={20} />
                        <span className={`${isSidebarOpen ? "block" : "hidden"} md:block`}>Home</span>
                    </button>
                    <button onClick={() => setActiveTab("profile")} className="flex items-center space-x-2 p-2 rounded-xl hover:bg-purple-700">
                        <User size={20} />
                        <span className={`${isSidebarOpen ? "block" : "hidden"} md:block`}>Profile</span>
                    </button>
                    <button onClick={() => setActiveTab("settings")} className="flex items-center space-x-2 p-2 rounded-xl hover:bg-purple-700">
                        <Settings size={20} />
                        <span className={`${isSidebarOpen ? "block" : "hidden"} md:block`}>Settings</span>
                    </button>
                </nav>
                <button className="flex items-center space-x-2 p-2 rounded-xl hover:bg-purple-700">
                    <LogOut size={20} />
                    <Link to="/">
                        <span className={`${isSidebarOpen ? "block" : "hidden"} md:block`}>Logout</span>
                    </Link>
                </button>
            </div>
            <div className="flex-1 p-6">
                {(() => {
                    switch (activeTab) {
                        case "home":
                            return <HomeComponent />;

                        case "profile":
                            return <ProfileComponent />;

                        case "settings":
                            return <></>;

                        default:
                            return <></>;
                    }
                })()}
            </div>
        </>
    );
};