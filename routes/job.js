const router = require("express").Router();
const jobController = require("../controllers/jobController");
const {verifyAndAuthorize, verifyToken, verifyAdmin} = require("../middleware/verifyToken")

// POST A JOB
router.post("/", verifyAdmin, jobController.createJob);

// UPDATE JOB
router.put("/:id", verifyAdmin, jobController.updateJob);

// DELETE JOB
router.delete("/:id", verifyAdmin, jobController.deleteJob);

// GET A SINGLE JOB
router.get("/:id", jobController.getAJob);

// GET ALL JOBS
router.get("/", jobController.getAllJobs);

// SEARCH JOBS
router.get("/search/:key", jobController.searchJobs);

module.exports = router