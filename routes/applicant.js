const router = require("express").Router();
const applicantController = require("../controllers/applicantController");
const {verifyAgent} = require("../middleware/verifyToken")

// Add Applicant
router.post("/", applicantController.createApplicant);

// GET ALL Applicants
router.get("/",verifyAgent, applicantController.getAllApplicants);

// SEARCH Applicants
router.get("/search/:key",verifyAgent, applicantController.searchApplicants);

module.exports = router