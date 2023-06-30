const User = require('../models/user')

exports.updateFavorite = (req, res) => {
    const id = req.params.id
    User.findByIdAndUpdate(id, { ads: req.body.ads })
        .then((user) => {
            res.send("Favoris bien modifié")
        })
}