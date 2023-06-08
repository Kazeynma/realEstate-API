const express = require("express");
const productsController = require("../controller/ads");
const router = express.Router();

const authRole = require("../middleware/AuthRole");

router.get("/", authRole.isAdmin, productsController.getAds);
router.get("/:id", productsController.getAdById);
router.post("/", productsController.addAds);
router.put("/:id", productsController.updateAdById);
router.delete("/:id", productsController.deleteAdById);

module.exports = router;
