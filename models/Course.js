const mongoose = require('mongoose');

const CoursesSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        rating: {
            type: double, required: true,
        },
        instructor: {
            type: String, required: true,
        },
        language: {
            type: String, required: true,
        },
        instructorShortDesc: {
            type: String, required: true,
        },
        instructorLongDesc: {
            type: Array, required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        
    }, {timestamps: true}
);


module.exports = mongoose.model("Course", CoursesSchema);
