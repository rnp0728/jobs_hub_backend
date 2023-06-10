const router = require("express").Router();
const bookmarkController = require("../controllers/bookmarkController");
const {verifyToken} = require("../middleware/verifyToken")


// CREATE BOOKMARKS
router.post("/", verifyToken,bookmarkController.createBookmark);


// DELETE BOOKMARKS
router.delete("/:id", verifyToken, bookmarkController.deleteBookmark);


// GET BOOKMARKS
router.get("/", verifyToken, bookmarkController.getBookmarks);

// CREATE INTERNSHIP BOOKMARKS
router.post("/internships/", verifyToken,bookmarkController.createInternshipBookmark);


// DELETE INTERNSHIP BOOKMARKS
router.delete("/internships/:id", verifyToken, bookmarkController.deleteInternshipBookmark);


// GET INTERNSHIP BOOKMARKS
router.get("/internships/", verifyToken, bookmarkController.getInternshipBookmarks);

module.exports = router