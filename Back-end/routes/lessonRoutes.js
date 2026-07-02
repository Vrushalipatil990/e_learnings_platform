const express = require("express");

const router = express.Router();

const {
    createLesson,
    getLessonsByCourse
} = require("../controllers/lessonController");

router.post("/", createLesson);

router.get("/:courseId", getLessonsByCourse);

module.exports = router;