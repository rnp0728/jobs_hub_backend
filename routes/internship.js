const router = require("express").Router();
const internshipController = require("../controllers/internshipController");
const {verifyAndAuthorize, verifyToken, verifyAdmin} = require("../middleware/verifyToken")

// POST A Internship
router.post("/", verifyAdmin, internshipController.createInternship);

// UPDATE Internship
router.put("/:id", verifyAdmin, internshipController.updateInternship);

// DELETE Internship
router.delete("/:id", verifyAdmin, internshipController.deleteInternship);

// GET A SINGLE Internship
router.get("/:id", internshipController.getAInternship);

// GET ALL InternshipS
router.get("/", internshipController.getAllInternships);

// SEARCH InternshipS
router.get("/search/:key", internshipController.searchInternships);

module.exports = router