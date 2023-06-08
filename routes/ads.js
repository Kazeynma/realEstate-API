const express = require("express");
const productsController = require("../controller/ads");
const router = express.Router();

const authRole = require("../middleware/AuthRole");

router.get("/", productsController.getAds);
router.get("/:id", productsController.getAdById);
router.post("/", authRole.isAdmin, productsController.addAds);
router.put("/:id", authRole.isAdmin, productsController.updateAdById);
router.delete("/:id", authRole.isAdmin, productsController.deleteAdById);

module.exports = router;
