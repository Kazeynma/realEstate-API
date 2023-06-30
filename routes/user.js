const express = require('express')
const router = express.Router()

const usercontroller = require("../controller/user")

router.put("/favorite/:email", usercontroller.updateFavorite)

module.exports = router