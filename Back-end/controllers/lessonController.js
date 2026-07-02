const Lesson = require("../models/Lessons");

// Create Lesson
exports.createLesson = async (req, res) => {

    try {

        const {
            course,
            title,
            video,
            notes,
            duration,
            order
        } = req.body;

        const lesson = await Lesson.create({
            course,
            title,
            video,
            notes,
            duration,
            order
        });

        res.status(201).json({
            success: true,
            message: "Lesson Created Successfully",
            data: lesson
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


// Get All Lessons of One Course
exports.getLessonsByCourse = async (req, res) => {

    try {

        const lessons = await Lesson.find({
            course: req.params.courseId
        }).sort({ order: 1 });

        res.status(200).json({
            success: true,
            count: lessons.length,
            data: lessons
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};