const mongoose = require('mongoose');

const BookmarksSchema = new mongoose.Schema(
    {
        job: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Job",
        },
        internship: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Internship",
        },
        userId: {
            type: String, required: true,
        },
        
    }, {timestamps: true}
);


module.exports = mongoose.model("Bookmark", BookmarksSchema);

