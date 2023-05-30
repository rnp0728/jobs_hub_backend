const mongoose = require('mongoose');

const BookmarksSchema = new mongoose.Schema(
    {
        job: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Job",
            required: true,
        },
        userId: {
            type: String, required: true,
        },
        
    }, {timestamps: true}
);


module.exports = mongoose.model("Bookmark", BookmarksSchema);

