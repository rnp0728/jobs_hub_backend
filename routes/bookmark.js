const router = require("express").Router();
const bookmarkController = require("../controllers/bookmarkController");
const {verifyAndAuthorize, verifyToken, verifyAdmin} = require("../middleware/verifyToken")


// CREATE BOOKMARKS
router.post("/", verifyAndAuthorize,bookmarkController.createBookmark);


// DELETE BOOKMARKS
router.delete("/:id", verifyToken, bookmarkController.deleteBookmark);


// GET BOOKMARKS
router.get("/:userId", bookmarkController.getBookmarks);



module.exports = router