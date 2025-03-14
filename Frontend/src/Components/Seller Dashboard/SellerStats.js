import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function SellerStats() {
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
    return (
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
    )
}