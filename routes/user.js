const router = require("express").Router();
const userController = require("../controllers/userController");
const {verifyAndAuthorize, verifyToken, verifyAdmin} = require("../middleware/verifyToken")


// GET ALL USERS
router.get("/", verifyAdmin, userController.getAllUsers);

// GET USER
router.get("/", verifyToken, userController.getUser);

// UPDATE USER
router.put("/", verifyToken, userController.updateUser);


// DELETE USER 
router.delete("/", verifyToken, userController.deleteUser);


module.exports = router