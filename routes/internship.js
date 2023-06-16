const router = require("express").Router();
const internshipController = require("../controllers/internshipController");
const {verifyAdminOrAgent, verifyAdmin, verifyAgent} = require("../middleware/verifyToken")

// POST A Internship
router.post("/", verifyAdminOrAgent, internshipController.createInternship);

// UPDATE Internship
router.put("/:id", verifyAdminOrAgent, internshipController.updateInternship);

// DELETE Internship
router.delete("/:id", verifyAdminOrAgent, internshipController.deleteInternship);

// GET A SINGLE Internship
router.get("/:id", internshipController.getAnInternship);

// GET ALL InternshipS
router.get("/", internshipController.getAllInternships);

// GET Internships by Agent
router.get("/agent-call/:id", verifyAgent, internshipController.getInternshipsByAgent);

// SEARCH InternshipS
router.get("/search/:key", internshipController.searchInternships);

module.exports = router