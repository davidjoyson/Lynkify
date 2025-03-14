
import { useState, useEffect } from "react";
import ApprovalTable from "../Admin Dashboard/ApprovalTable";
import { DataTable } from "../Common/Table";
import SellerStats from "../Seller Dashboard/SellerStats";
import { useNavigate } from "react-router-dom";

export default function HomeComponent() {
    const [role, setRole] = useState(null);
    const navigate = useNavigate();

    const referralData = [
        { business: "Tech Solutions", link: "https://lynkify.com/tech-solutions", reward: "₹500" },
        { business: "Health & Wellness", link: "https://lynkify.com/health-wellness", reward: "₹300" },
        { business: "E-commerce Hub", link: "https://lynkify.com/ecommerce-hub", reward: "₹450" },
        { business: "Digital Marketing", link: "https://lynkify.com/digital-marketing", reward: "₹350" },
        { business: "Auto Parts Store", link: "https://lynkify.com/auto-parts", reward: "₹600" },
    ];

    const referralColumns = [
        { header: "Sl No", key: "index", render: (_, index) => index + 1 },
        { header: "Business Name", key: "business" },
        { header: "Referral Link", key: "link", render: (row) => <a href={row.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">{row.link}</a> },
        { header: "Reward", key: "reward" }
    ];

    const businessColumns = [
        { header: "Sl No", key: "index", render: (_, index) => index + 1 },
        { header: "Business", key: "business" },
        { header: "Status", key: "status" }
    ];
    const businessData = [
        { business: "Tech Solutions", status: "Active" },
        { business: "Health & Wellness", status: "Pending" },
        { business: "E-commerce Hub", status: "Active" },
        { business: "Digital Marketing", status: "Inactive" },
        { business: "Auto Parts Store", status: "Active" },
    ];
    useEffect(() => {
        const storedRole = localStorage.getItem("userRole");
        if (storedRole) {
            setRole(storedRole);
        } else {
            localStorage.setItem("userRole", "admin");
            setRole("admin");
        }
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            {/* Seller */}
            {
                role === "seller" &&
                <div>
                    <SellerStats />
                    <div className="mt-6">
                        <div className="flex items-center justify-between p-4 rounded-lg shadow-md w-full">
                            <h2 className="text-lg font-semibold mb-2">Referral Links & Rewards</h2>
                            <button onClick={() => navigate("/addreferral")} className="px-4 py-2 bg-purple-800 text-white rounded-xl hover:bg-purple-400 transition">
                                New Referral
                            </button>
                        </div>
                        <DataTable columns={referralColumns} data={referralData} />
                    </div>
                </div>
            }
            {/* Admin */}
            {
                role === "admin" &&
                <div>
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold mb-2">Businesses</h2>
                        <DataTable columns={businessColumns} data={businessData} />
                    </div>
                    <ApprovalTable />
                </div>
            }
        </div>
    );
};