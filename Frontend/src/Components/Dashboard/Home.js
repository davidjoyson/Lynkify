
import { useState, useEffect } from "react";
import ApprovalTable from "../Admin Dashboard/ApprovalTable";
import SellerTable from "../Seller Dashboard/SellerTable";
import SellerStats from "../Seller Dashboard/SellerStats";

export default function HomeComponent() {
    const [role, setRole] = useState(null);

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
            {
                role === "seller" &&
                <SellerStats />
            }
            {/* Referral Table */}
            {
                role === "seller" &&
                <SellerTable />
            }
            {/* Approval Table */}
            {
                role === "admin" &&
                <ApprovalTable />
            }
        </div>
    );
};