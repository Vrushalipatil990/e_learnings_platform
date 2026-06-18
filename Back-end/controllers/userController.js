const User = require("../models/User");

// GET Profile
const getUserProfile = async (req, res) => {

    res.status(200).json(req.user);

};
const updateUserProfile = async (req, res) => {

    try {

        const user = await User.findById(req.user._id);

        if (!user) {

            return res.status(404).json({
                message: "User not found"
            });

        }

        user.fullName = req.body.fullName || user.fullName;
        user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
        user.address = req.body.address || user.address;
        user.gender = req.body.gender || user.gender;
        user.dateOfBirth = req.body.dateOfBirth || user.dateOfBirth;
        user.qualification = req.body.qualification || user.qualification;
        user.organizationName = req.body.organizationName || user.organizationName;

        user.profilePic = req.body.profilePic || user.profilePic;
        const updatedUser = await user.save();
       

        res.status(200).json(updatedUser);

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
module.exports = {
    getUserProfile,
    updateUserProfile
};