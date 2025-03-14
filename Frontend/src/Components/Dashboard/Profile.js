import { useState } from "react";
import ProfilePic from "../../Images/ProfilePic.png";

export default function ProfileComponent() {
    const [user, setUser] = useState({
        name: "John Doe",
        email: "johndoe@email.com",
        phone: "123-456-7890",
        role: "Marketer",
        profilePic: "https://via.placeholder.com/150",
    });

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(user);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        setUser(formData);
        setIsEditing(false);
    };
    return (
        <div className="flex-1 flex flex-col items-center p-6">
            <div className="w-full max-w-md bg-gray-800 p-6 text-center rounded-xl shadow-lg">
                <img
                    src={ProfilePic}
                    alt="Profile"
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white"
                />
                {isEditing ? (
                    <div className="space-y-3">
                        <input
                            className="w-full p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-purple-500"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                        />
                        <input
                            className="w-full p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-purple-500"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                        <input
                            className="w-full p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-purple-500"
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                        />
                        <button className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600 transition" onClick={handleSubmit}>Save</button>
                    </div>
                ) : (
                    <>
                        <h2 className="text-2xl font-bold text-white mb-1">John Doe</h2>
                        <p className="text-white mb-3">{user.email}</p>
                        <div className="grid grid-cols-2 gap-4 text-white text-sm">
                            <p><span className="font-semibold text-purple-300">Phone:</span> {user.phone}</p>
                            <p><span className="font-semibold text-purple-300">Role:</span> {user.role}</p>
                        </div>
                        <button className="w-full mt-3 p-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition" onClick={() => setIsEditing(true)}>Edit Profile</button>
                    </>
                )}
            </div>
        </div>
    );
};