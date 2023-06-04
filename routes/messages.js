const router = require("express").Router();
const messageController = require("../controllers/messageController");
const {verifyAndAuthorize, verifyToken, verifyAdmin} = require("../middleware/verifyToken")


// CREATE Messages
router.post("/", verifyToken,messageController.sendMessage);

// GET All Messages
router.get("/:id", verifyToken, messageController.getAllMessages);



module.exports = router