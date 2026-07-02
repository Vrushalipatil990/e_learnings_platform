const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        requied: true
    },

    title: {
        type: String,
        reuried: true
    },
    vedio:
    {
        type: String,
        requied: true
    },
    notes: {
        type: String,
    },
    duration: {
        type: String,
        requied: true
    },
    order: {
        type: Number,
        requied: true
    },
},
    { timestamp: true }
);

module.exports = mongoose.model("Lesson", courseSchema);