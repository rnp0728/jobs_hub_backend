const router = require("express").Router();
const userController = require("../controllers/userController");
const {verifyToken, verifyAdmin} = require("../middleware/verifyToken")



// GET USER
router.get("/", verifyToken, userController.getUser);

// UPDATE USER
router.put("/", verifyToken, userController.updateUser);

// UPDATE Password
router.put("/update-password", verifyToken, userController.updatePassword);

// DELETE ACCOUNT 
router.delete("/", verifyToken, userController.deleteUser);

// DELETE USER 
router.delete("/remove-user/:id", verifyAdmin, userController.deleteUserByAdmin);

// GET ALL USERS
router.get("/all-users", verifyAdmin, userController.getAllUsers);

// Search Users
router.get("/search/:key", verifyAdmin, userController.searchUsers);


module.exports = router