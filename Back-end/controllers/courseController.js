const Course = require("../models/Course");

// Create Course
exports.createCourse = async (req, res) => {
    try {

        const {
            image,
            instructor,
            category,
            title,
            description,
            duration,
            lectures,
            price,
            rating
        } = req.body;

        const course = await Course.create({
            image,
            instructor,
            category,
            title,
            description,
            duration,
            lectures,
            price,
            rating
        });

        res.status(201).json({
            success: true,
            message: "Course Created Successfully",
            data: course
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Get All Courses
exports.getAllCourses = async (req, res) => {
    try {

        const courses = await Course.find();

        res.status(200).json({
            success: true,
            count: courses.length,
            data: courses
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Get Single Course
exports.getCourseById = async (req, res) => {
    try {

        const course = await Course.findById(req.params.id);

        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: course
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Update Course
exports.updateCourse = async (req, res) => {
    try {

        const course = await Course.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Course Updated Successfully",
            data: course
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Delete Course
exports.deleteCourse = async (req, res) => {
    try {

        const course = await Course.findById(req.params.id);

        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course Not Found"
            });
        }

        await course.deleteOne();

        res.status(200).json({
            success: true,
            message: "Course Deleted Successfully"
        });

    } 
    /* catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
}; */
catch (error) {

    if (error.name === "ValidationError") {

        return res.status(400).json({
            success: false,
            message: error.message
        });

    }

    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });

}
}