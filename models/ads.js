const mongoose = require("mongoose");

const adsSchema = new mongoose.Schema({
  id: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: String, require: true },
  date_pub: { type: String, require: true },
  date_update: { type: String, required: false },
  fee: { type: String, require: true },
  adress: { type: String, require: true },
});

const Ads = mongoose.model("Ads", adsSchema);
module.exports = Ads;
