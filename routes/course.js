const router = require("express").Router();
const courseController = require("../controllers/courseController");
const {verifyAdmin} = require("../middleware/verifyToken")

// POST A Course
router.post("/", verifyAdmin, courseController.createCourse);

// UPDATE Course
router.put("/:id", verifyAdmin, courseController.updateCourse);

// DELETE Course
router.delete("/:id", verifyAdmin, courseController.deleteCourse);

// GET ALL Course
router.get("/", courseController.getAllCourses);

// SEARCH Course
router.get("/search/:key", courseController.searchCourses);

module.exports = router