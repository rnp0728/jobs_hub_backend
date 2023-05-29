const router = require("express").Router();
const userController = require("../controllers/userController");
const {verifyAndAuthorize, verifyToken, verifyAdmin} = require("../middleware/verifyToken")


// GET ALL USERS
router.get("/", verifyAdmin, userController.getAllUsers);

// GET USER
router.get("/:id", verifyAndAuthorize, userController.getUser);

// UPDATE USER
router.put("/:id", verifyAndAuthorize, userController.updateUser);


// DELETE USER 
router.delete("/:id", verifyAndAuthorize, userController.deleteUser);


module.exports = router