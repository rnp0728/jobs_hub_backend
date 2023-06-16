const router = require("express").Router();
const internshipController = require("../controllers/internshipController");
const {verifyAndAuthorize, verifyToken, verifyAdmin, verifyAgent} = require("../middleware/verifyToken")

// POST A Internship
router.post("/", verifyAdmin, internshipController.createInternship);

// UPDATE Internship
router.put("/:id", verifyAdmin, internshipController.updateInternship);

// DELETE Internship
router.delete("/:id", verifyAdmin, internshipController.deleteInternship);

// GET A SINGLE Internship
router.get("/:id", internshipController.getAnInternship);

// GET ALL InternshipS
router.get("/", internshipController.getAllInternships);

// GET ALL InternshipS
router.get("/agent", verifyAgent, internshipController.getInternshipsByAgent);

// SEARCH InternshipS
router.get("/search/:key", internshipController.searchInternships);

module.exports = router