import { CheckCircle, XCircle } from "lucide-react";

export default function ApprovalTable() {
    const approvalData = [
        { id: 1, business: "NextGen Tech", status: "Pending" },
        { id: 2, business: "Urban Eats", status: "Pending" },
    ];
    return (
        <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md text-white">
            <h3 className="text-xl font-semibold mb-4 text-left">Approvals</h3>
            <div className="space-y-3">
                {approvalData.map((business) => (
                    <div key={business.id} className="flex items-center justify-between border-b border-gray-600 py-2">
                        <span className="text-lg">{business.business}</span>
                        <div className="flex space-x-2">
                            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 flex items-center gap-1">
                                <CheckCircle size={16} /> Approve
                            </button>
                            <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 flex items-center gap-1">
                                <XCircle size={16} /> Reject
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}