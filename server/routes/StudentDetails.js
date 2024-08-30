// Importing local files
const { findOneUserController, findAllUser } = require('../controllers/StudentDetails')

// Accessing Express and MongoDB Packages
const express = require('express')
const router = express.Router();

router.route("").get(findAllUser);
router.route("/user/findOne/:name").post(findOneUserController);



module.exports = router;