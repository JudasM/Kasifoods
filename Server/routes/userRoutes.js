const express = require("express");
const userController = require("../controllers/userController"); // user controller from controller file

// router
const router = express.Router();

// http methods/verbs  for user
router.post("/", userController.createUser);

//exporting the router so that it can be used elsewhere
module.exports = router;
