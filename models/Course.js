const mongoose = require('mongoose');

const CoursesSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        instructor: {
            type: String,
            required: true,
        },
        rating: {
            type: Number, required: true,
        },
        price: {
            type: Number, required: true,
        },
        availableIn: {
            type: String, required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        webAddress: {
            type: String,
            required: true
        }
        
    }, {timestamps: true}
);


module.exports = mongoose.model("Course", CoursesSchema);
