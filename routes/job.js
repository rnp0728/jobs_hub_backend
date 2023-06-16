const router = require("express").Router();
const jobController = require("../controllers/jobController");
const {verifyAdmin, verifyAgent, verifyAdminOrAgent} = require("../middleware/verifyToken")

// POST A JOB
router.post("/", verifyAdminOrAgent, jobController.createJob);

// UPDATE JOB
router.put("/:id", verifyAdminOrAgent, jobController.updateJob);

// DELETE JOB
router.delete("/:id", verifyAdminOrAgent, jobController.deleteJob);

// GET A SINGLE JOB
router.get("/:id", jobController.getAJob);

// GET ALL JOBS
router.get("/", jobController.getAllJobs);

// GET JOBS BY AGENT
router.get("/agent-call/:id", verifyAgent, jobController.getJobsByAgent);

// SEARCH JOBS
router.get("/search/:key", jobController.searchJobs);

module.exports = router