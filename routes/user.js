const router = require("express").Router();
const userController = require("../controllers/userController");
const {verifyToken, verifyAdmin} = require("../middleware/verifyToken")



// GET USER
router.get("/", verifyToken, userController.getUser);

// UPDATE USER
router.put("/", verifyToken, userController.updateUser);


// DELETE USER 
router.delete("/", verifyToken, userController.deleteUser);

// GET ALL USERS
router.get("/all-users", verifyAdmin, userController.getAllUsers);


module.exports = router