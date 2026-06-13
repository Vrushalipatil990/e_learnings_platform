// models/User.js

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
{
    fullName: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true
    },

    phoneNumber: {
        type: String
    },

    profilePic: {
        type: String,
        default: "/default-avatar.png"
    },

    address: {
        type: String
    },

    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },

    dateOfBirth: {
        type: Date
    },

    qualification: {
        type: String
    },

    organizationName: {
        type: String
    },

    role: {
        type: String,
        enum: ["student", "admin"],
        default: "student"
    }

},
{
    timestamps: true
}
);

// Hash password before saving

userSchema.pre("save", async function () {

    if (!this.isModified("password")) {
        return;
    }

    const salt = await bcrypt.genSalt(10);

    this.password = await bcrypt.hash(this.password, salt);

});

// Compare entered password with hashed password
userSchema.methods.matchPassword = async function(enteredPassword) {

    return await bcrypt.compare(
        enteredPassword,
        this.password
    );

};

module.exports = mongoose.model("User", userSchema);