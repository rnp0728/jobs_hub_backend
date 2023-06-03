const router = require("express").Router();
const userController = require("../controllers/userController");
const {verifyAndAuthorize, verifyToken, verifyAdmin} = require("../middleware/verifyToken")


// GET ALL USERS
router.get("/", verifyAdmin, userController.getAllUsers);

// GET USER
router.get("/", verifyAndAuthorize, userController.getUser);

// UPDATE USER
router.put("/", verifyAndAuthorize, userController.updateUser);


// DELETE USER 
router.delete("/", verifyAndAuthorize, userController.deleteUser);


module.exports = router