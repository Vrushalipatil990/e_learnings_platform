const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({

    image: {
        type: String
    },

    instructor: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    duration: {
        type: String,
        required: true
    },

    lectures: {
        type: Number,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    rating: {
        type: Number,
        default: 0
    }

}, { timestamps: true });

module.exports = mongoose.model("Course", courseSchema);