import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["admin", "business", "seller"],
            default: "seller",
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
        referralCode: {
            type: String,
            unique: true,
            sparse: true, // Allows null values to be ignored for uniqueness
        },
        referredBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", // References another user
            default: null,
        },
        earnings: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const User = mongoose.model("User", userSchema);
export default User;