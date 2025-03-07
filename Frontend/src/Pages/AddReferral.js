import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ArrowLeft } from "lucide-react";

export default function AddReferralLink() {
  const [business, setBusiness] = useState("");
  const [referralLink, setReferralLink] = useState("");
  const businesses = ["Business A", "Business B", "Business C"]; // Example business list

  const generateReferralLink = () => {
    if (!business) {
      alert("Please select a business first.");
      return;
    }
    setReferralLink(`https://linkyfy.com/ref/${business.replace(/\s+/g, "-").toLowerCase()}-${uuidv4()}`);
  };

  const handleSave = () => {
    console.log("Saved Referral Link:", { business, referralLink });
    alert("Referral link saved successfully!");
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white relative p-6 w-full">
      <button 
        type="button" 
        className="absolute top-4 left-4 flex items-center text-white hover:text-gray-200"
        onClick={handleBack}
      >
        <ArrowLeft className="w-6 h-6 mr-2" /> Back
      </button>
      <div className="w-full max-w-md bg-gray-800 p-6 text-center rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Add New Referral Link</h2>
        <div className="flex flex-col gap-4">
          <label className="block">
            <span className="text-white">Select Business:</span>
            <select 
              className="mt-1 block w-full p-2 border rounded-lg bg-gray-700 text-white" 
              value={business} 
              onChange={(e) => setBusiness(e.target.value)}
              required
            >
              <option value="">Choose a business</option>
              {businesses.map((biz, index) => (
                <option key={index} value={biz}>{biz}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-white">Generated Referral Link:</span>
            <input 
              type="text" 
              className="mt-1 block w-full p-2 border rounded-lg bg-gray-700 text-white" 
              value={referralLink} 
              readOnly
            />
          </label>
          <button 
            type="button" 
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={generateReferralLink}
          >
            Generate Referral Link
          </button>
          <button 
            type="button" 
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            onClick={handleSave}
            disabled={!referralLink}
          >
            Save Referral Link
          </button>
        </div>
      </div>
    </div>
  );
}