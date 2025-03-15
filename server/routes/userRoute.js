const express = require("express");
const { login, signup } = require("../controllers/userController");

const router = express.Router();

//login page router
router.post("/login", login);

//signup page router
router.post("/signup", signup);

module.exports = router;
