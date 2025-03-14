import { CheckCircle, XCircle } from "lucide-react";

export default function ApprovalTable() {
    const businesses = [
        { id: 1, name: "ABC Corp", status: "Pending" },
        { id: 2, name: "XYZ Ltd", status: "Pending" },
    ];
    return (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md text-black">
            <h3 className="text-xl font-semibold mb-4 text-center">Approve Businesses</h3>
            <div className="space-y-3">
                {businesses.map((business) => (
                    <div key={business.id} className="flex items-center justify-between border-b py-2">
                        <span className="text-lg">{business.name}</span>
                        <div className="flex space-x-2">
                            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center gap-1">
                                <CheckCircle size={16} /> Approve
                            </button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex items-center gap-1">
                                <XCircle size={16} /> Reject
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}