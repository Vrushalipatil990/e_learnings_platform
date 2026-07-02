const express = require("express");

const router = express.Router();

const upload = require("../middleware/uploadMiddleware");

router.post(
  "/",
  (req, res, next) => {
    console.log("Reached upload route");
    next();
  },
  upload.single("profilePic"),
  (req, res) => {

    console.log(req.file);

    res.status(200).json({
      imageUrl: req.file.path
    });

  }
);

module.exports = router;