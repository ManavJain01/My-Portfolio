// Importing local files
const { createUser, readUser, getUser, updateUser, deleteUser } = require('../controllers/UserInfo')

// Accessing Express and MongoDB Packages
const express = require('express')
const router = express.Router();

router.route("/").get(readUser);
router.route("/createUser").post(createUser);
router.route("/getUser/:id").get(getUser);
router.route("/updateUser/:id").put(updateUser);
router.route("/deleteUser/:id").delete(deleteUser);


module.exports = router;