import { useState } from "react";
import { Home, BarChart, Users } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../Images/lynkifyLogo.png";
import { useNavigate } from "react-router-dom";
import { ApiUrl } from "../Urls";

export default function LandingPage() {
    const [isSignUp, setIsSignUp] = useState(true);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const loginData = {
            userName,
            password,
        };
        try {
            const response = await fetch(`${ApiUrl}/signin`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });
            const result = await response.json();
            if (response.ok) {
                localStorage.setItem("token", result.token);
                localStorage.setItem("userRole", result?.user?.role);
                navigate("/dashboard")
            } else {
                alert(result.message || "Login failed!");
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("An error occurred. Please try again.");
        }
    };

    const handleSubmitSignup = async () => {
        setMessage("");
        const loginData = {
            "userName": userName,
            "email": email,
            "password": password,
            "role": "seller"
        };
        try {
            const response = await fetch(`${ApiUrl}/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });
            const result = await response.json();
            if (response.ok) {
                alert(result.message || "Signup Successful");
                setUserName("");
                setEmail("");
                setPassword("");
            } else {
                alert(result.message || "Signup failed!");
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-gray-900 flex flex-col">
            {/* Header Section */}
            <div className="flex items-center p-4 bg-white shadow-md w-full">
                <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
                <h1 className="text-2xl font-bold text-blue-600">Lynkify</h1>
            </div>

            <div className="flex flex-grow flex-col md:flex-row">
                {/* Left Section */}
                <div className="md:w-2/3 flex flex-col justify-center items-center p-6 md:p-10">
                    <motion.h1
                        className="text-3xl md:text-4xl font-bold text-center text-white"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Take Your Business to the Next Level with <span className="text-yellow-300">Lynkify</span>
                    </motion.h1>
                    <p className="mt-4 text-md md:text-lg text-gray-200 text-center">
                        Unlock growth with referrals and smart marketing solutions.
                    </p>
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 p-6 md:p-8">
                        <motion.div
                            className="bg-white shadow-md p-4 md:p-6 rounded-lg text-center"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Home size={30} className="mx-auto text-blue-600" />
                            <h3 className="text-lg md:text-xl font-bold mt-3">Boost Sales</h3>
                            <p className="text-gray-600 text-sm md:text-base">Increase your revenue through seamless referrals.</p>
                        </motion.div>
                        <motion.div
                            className="bg-white shadow-md p-4 md:p-6 rounded-lg text-center"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Users size={30} className="mx-auto text-blue-600" />
                            <h3 className="text-lg md:text-xl font-bold mt-3">Expand Network</h3>
                            <p className="text-gray-600 text-sm md:text-base">Connect with top marketers and affiliates.</p>
                        </motion.div>
                        <motion.div
                            className="bg-white shadow-md p-4 md:p-6 rounded-lg text-center"
                            whileHover={{ scale: 1.05 }}
                        >
                            <BarChart size={30} className="mx-auto text-blue-600" />
                            <h3 className="text-lg md:text-xl font-bold mt-3">Maximize Profit</h3>
                            <p className="text-gray-600 text-sm md:text-base">Unlock your earning potential with Lynkify.</p>
                        </motion.div>
                    </section>
                </div>

                {/* Right Section - Sign In / Sign Up */}
                <div className="md:w-1/3 flex flex-col justify-center items-center p-6 md:p-10">
                    <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-xs md:w-80">
                        {isSignUp ? (
                            <>
                                <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Sign Up</h2>
                                <input type="text" placeholder="Full Name" value={userName} onChange={(e) => setUserName(e.target.value)} className="w-full p-2 border rounded mb-2" />
                                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded mb-2" />
                                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded mb-4" />
                                <button onClick={() => handleSubmitSignup()} className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Sign Up</button>
                                <p className="text-center mt-4 text-gray-600 text-sm md:text-base">
                                    Already have an account? <button onClick={() => setIsSignUp(false)} className="text-blue-600 hover:underline">Sign In</button>
                                </p>
                            </>
                        ) : (
                            <>
                                <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Sign In</h2>
                                <input type="email" placeholder="Email" value={userName} onChange={(e) => setUserName(e.target.value)} className="w-full p-2 border rounded mb-2" />
                                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded mb-4" />
                                <button onClick={() => handleSubmit()} className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700">Login</button>
                                {message && <p className="text-center mt-2 text-red-600">{message}</p>}
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
