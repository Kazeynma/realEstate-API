const express = require("express");
const router = express.Router();

const authController = require("../controller/auth");

router.post("/signup", authController.CreateAccount);
router.post("/login", authController.Login);

module.exports = router;
