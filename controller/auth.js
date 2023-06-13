const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user");

exports.CreateAccount = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const lastname = req.body.lastname;
  const firstname = req.body.firstname;

  //test if email is email format
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
    const error = new Error("Ce n'est pas le bon format");
    throw error;
  }

  //test if user already exists
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      const error = new Error("L'uilisateur existe déjà");
    }
  });

  //hash password
  bcrypt
    .hash(password, 10)
    .then((hashedPw) => {
      const newUser = new UserModel({
        email: email,
        password: hashedPw,
        lastname: lastname,
        firstname: firstname,
      });

      return newUser.save();
    })
    .then((docs) => {
      res.status(201).send(docs);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

exports.Login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  let actualUser;
  UserModel.findOne({ email: email })
    .then((user) => {
      if (!user) {
        const error = new Error("Aucun utilisateur trouvé");
        throw error;
      }
      actualUser = user;
      console.log(user.password);
      return bcrypt.compare(password, user.password);
    })
    .then((isEqual) => {
      console.log(isEqual);
      if (!isEqual) {
        const error = new Error("Mauvais mot de passe");
        throw error;
      }

      const token = jwt.sign(
        { email: email, _id: actualUser._id },
        process.env.SECRET_KEY,
        { expiresIn: "5h" }
      );
      res.send(token);
    });
};
