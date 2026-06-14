const User = require("../models/User");

// GET Profile
const getUserProfile = async (req, res) => {

    res.status(200).json(req.user);

};

module.exports = {
    getUserProfile
};