import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function HomeComponent() {

    const lineData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Income Rate",
                data: [30, 45, 40, 60, 20, 70],
                borderColor: "#FF6B6B",
                backgroundColor: "rgba(255, 107, 107, 0.2)",
                tension: 0.4,
            },
        ],
    };

    const referralData = [
        { business: "Tech Solutions", link: "https://lynkify.com/tech-solutions", reward: "₹500" },
        { business: "Health & Wellness", link: "https://lynkify.com/health-wellness", reward: "₹300" },
        { business: "E-commerce Hub", link: "https://lynkify.com/ecommerce-hub", reward: "₹450" },
        { business: "Digital Marketing", link: "https://lynkify.com/digital-marketing", reward: "₹350" },
        { business: "Auto Parts Store", link: "https://lynkify.com/auto-parts", reward: "₹600" },
        { business: "Fitness Gear", link: "https://lynkify.com/fitness-gear", reward: "₹400" },
        { business: "Online Courses", link: "https://lynkify.com/online-courses", reward: "₹550" },
        { business: "Home Decor", link: "https://lynkify.com/home-decor", reward: "₹250" },
        { business: "Pet Supplies", link: "https://lynkify.com/pet-supplies", reward: "₹500" },
        { business: "Gourmet Foods", link: "https://lynkify.com/gourmet-foods", reward: "₹350" }
    ];
    
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <div className="flex gap-6">
                {/* Graph */}
                <div className="w-1/2 bg-white text-black shadow-lg rounded-lg p-6">
                    <h2 className="text-lg font-semibold mb-2">Income Growth</h2>
                    <Line data={lineData} height={80} />
                </div>
                {/* Boxes */}
                <div className="w-1/2 grid grid-cols-2 gap-4">
                    {[
                        "Active Referral Links",
                        "Total Referrals",
                        "Total Rewards",
                        "New Users",
                    ].map((title, index) => (
                        <div key={index} className="p-6 bg-gray-800 text-white rounded-lg shadow-md flex flex-col items-center justify-center">
                            <h2 className="text-lg font-semibold">{title}</h2>
                            <p className="text-2xl font-bold mt-1">{(title === "Total Rewards" ? "₹" : "")}{Math.floor(Math.random() * 500)}</p>
                            <p className="mt-1 text-sm text-green-500">+{(Math.random() * 10).toFixed(2)}%</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-lg font-semibold mb-2">Referral Links & Rewards</h2>
                <table className="w-full text-left border-collapse border border-gray-700 bg-gray-800 bg-opacity-80 text-white">
                    <thead>
                        <tr className="bg-gray-900 bg-opacity-90">
                            <th className="p-2 border border-gray-700">Sl No</th>
                            <th className="p-2 border border-gray-700">Business Name</th>
                            <th className="p-2 border border-gray-700">Referral Link</th>
                            <th className="p-2 border border-gray-700">Reward</th>
                        </tr>
                    </thead>
                    <tbody>
                        {referralData.map((referral, index) => (
                            <tr key={index} className="border border-gray-700 hover:bg-gray-700 hover:bg-opacity-50">
                                <td className="p-2 border border-gray-700">{index + 1}</td>
                                <td className="p-2 border border-gray-700">{referral.business}</td>
                                <td className="p-2 border border-gray-700">
                                    <a href={referral.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                                        {referral.link}
                                    </a>
                                </td>
                                <td className="p-2 border border-gray-700">{referral.reward}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};