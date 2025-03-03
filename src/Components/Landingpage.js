import { useState } from "react";
import { Home, BarChart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import LynkifyLogo from "../Images/lynkifyLogo.png";

export default function LandingPage() {
    const [isSignUp, setIsSignUp] = useState(true);

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
            {/* Header Section */}
            <div className="flex items-center p-4 bg-white shadow-md w-full">
                <img src={LynkifyLogo} alt="Lynkify Logo" className="h-10 mr-2" />
                <h1 className="text-2xl font-bold text-blue-600">Lynkify</h1>
            </div>

            <div className="flex flex-grow flex-col md:flex-row">
                {/* Left Section */}
                <div className="md:w-2/3 flex flex-col justify-center items-center p-6 md:p-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-center">
                        Take Your Business to the Next Level with <span className="text-blue-600">Lynkify</span>
                    </h1>
                    <p className="mt-4 text-md md:text-lg text-gray-600 text-center">
                        Unlock growth with referrals and smart marketing solutions.
                    </p>
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 p-6 md:p-8">
                        <div className="bg-white shadow-md p-4 md:p-6 rounded-lg text-center">
                            <Home size={30} className="mx-auto text-blue-600" />
                            <h3 className="text-lg md:text-xl font-bold mt-3">Boost Sales</h3>
                            <p className="text-gray-600 text-sm md:text-base">Increase your revenue through seamless referrals.</p>
                        </div>
                        <div className="bg-white shadow-md p-4 md:p-6 rounded-lg text-center">
                            <Users size={30} className="mx-auto text-blue-600" />
                            <h3 className="text-lg md:text-xl font-bold mt-3">Expand Network</h3>
                            <p className="text-gray-600 text-sm md:text-base">Connect with top marketers and affiliates.</p>
                        </div>
                        <div className="bg-white shadow-md p-4 md:p-6 rounded-lg text-center">
                            <BarChart size={30} className="mx-auto text-blue-600" />
                            <h3 className="text-lg md:text-xl font-bold mt-3">Maximize Profit</h3>
                            <p className="text-gray-600 text-sm md:text-base">Grow your earnings with optimized commissions.</p>
                        </div>
                    </section>
                </div>

                {/* Right Section - Sign In / Sign Up */}
                <div className="md:w-1/3 flex flex-col justify-center items-center p-6 md:p-10">
                    <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-xs md:w-80">
                        {isSignUp ? (
                            <>
                                <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Sign Up</h2>
                                <input type="text" placeholder="Full Name" className="w-full p-2 border rounded mb-2" />
                                <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-2" />
                                <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-4" />
                                <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Sign Up</button>
                                <p className="text-center mt-4 text-gray-600 text-sm md:text-base">
                                    Already have an account? <button onClick={() => setIsSignUp(false)} className="text-blue-600 hover:underline">Sign In</button>
                                </p>
                            </>
                        ) : (
                            <>
                                <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Sign In</h2>
                                <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-2" />
                                <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-4" />
                                <Link to="/dashboard">
                                    <button className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700">Login </button>
                                </Link>
                                <p className="text-center mt-4 text-gray-600 text-sm md:text-base">
                                    Don't have an account? <button onClick={() => setIsSignUp(true)} className="text-blue-600 hover:underline">Sign Up</button>
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
