isAdmin = (req, res, next) => {
  const role = req.headers.userrole;

  if (role === "Admin") {
    next();
  } else {
    res.send("accès non autorisé");
  }
};

const authRole = {
  isAdmin,
};

module.exports = authRole;
