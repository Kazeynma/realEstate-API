const express = require("express");
const productsController = require("../controller/ads");
const router = express.Router();

const isAuth = require("../middleware/isAtuh");

router.get("/", productsController.getAds);
router.get("/:id", productsController.getAdById);
router.post("/", isAuth, productsController.addAds);
router.put("/:id", isAuth, productsController.updateAdById);
router.delete("/:id", isAuth, productsController.deleteAdById);

module.exports = router;
