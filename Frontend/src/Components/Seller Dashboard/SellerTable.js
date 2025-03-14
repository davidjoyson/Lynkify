import { useNavigate } from "react-router-dom";

export default function SellerTable() {
    const navigate = useNavigate();

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
    const handleClick = () => {
        navigate("/addreferral");
    };

    return (
        <div className="mt-6">
            <div className="flex items-center justify-between p-4 rounded-lg shadow-md w-full">
                <h2 className="text-lg font-semibold mb-2">Referral Links & Rewards</h2>
                <button onClick={() => handleClick()} className="px-4 py-2 bg-purple-800 text-white rounded-xl hover:bg-purple-400 transition">
                    New Referral
                </button>
            </div>
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
    )
}