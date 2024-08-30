// Importing local files
const { getZenrows, testing } = require('../controllers/practice')

// Accessing Express and MongoDB Packages
const express = require('express')
const router = express.Router();

router.route("/").get(getZenrows);
router.route("/testing").get(testing);


module.exports = router;