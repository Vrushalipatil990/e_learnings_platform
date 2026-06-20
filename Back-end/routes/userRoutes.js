const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
    getUserProfile,
    updateUserProfile,
    deleteUserProfile
} = require("../controllers/userController");
router.delete("/profile",protect, deleteUserProfile);

router.get("/profile", protect, getUserProfile);

router.put("/profile", protect, updateUserProfile);

module.exports = router;