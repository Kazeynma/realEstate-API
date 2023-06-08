const Ads = require("../models/ads");

exports.getAds = (req, res) => {
  Ads.find({})
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
};
exports.getAdById = (req, res, next) => {
  const id = req.params.id;
  Ads.findById(id)
    .then((data) => {
      if (data !== null) {
        res.status(200).json({
          message: "Produit trouvé",
          produit: data,
        });
      } else {
        res.send("Produit non trouvé");
      }
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next();
    });
};

exports.addAds = (req, res) => {
  const newAds = new Ads(req.body);
  newAds
    .save()
    .then((data) => res.status(201).send(data))
    .catch((err) => console.log(err));
};

exports.updateAdById = (req, res) => {
  const id = req.params.id;
  const newAds = req.body;
  Ads.findByIdAndUpdate(id, { newAds })
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
};

exports.deleteAdById = (req, res) => {
  const id = req.params.id;

  Ads.findByIdAndRemove(id)
    .then((data) =>
      res.json({
        message: "Cette annonce a bien été supprimée",
        data,
      })
    )
    .catch((err) => console.log(err));
};