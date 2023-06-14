const mongoose = require('mongoose');

const ApplicantsSchema = new mongoose.Schema(
    {
        job: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Job",
        },
        internship: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Internship",
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        agentId: {
            type: String,
            required: true
        }
    }, {timestamps: true}
);


module.exports = mongoose.model("Applicant", ApplicantsSchema);

