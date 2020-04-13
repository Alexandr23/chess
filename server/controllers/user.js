const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const UserModel = require("../models/UserModel");

class UserController {
  static async signUp(req, res) {
    const form = req.body;

    // validate
    if (!form.login || !form.password) {
      res.status(422).send(JSON.stringify({ data: 'invalid form data' }));
      return;
    }

    // find user with same login
    const user = await UserModel.find(form.login);

    if (user) {
      res.status(200).send(JSON.stringify({ data: 'duplicacted login' }));
      return;
    }

    // generate hash
    const hash = await bcrypt.hash(form.password, 10);

    // create user
    const newUser = await UserModel.create({ login: form.login, hash });

    // generate token
    const payload = { user: newUser.login };
    const options = { expiresIn: process.env.JWT_EXPIRES_IN };
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign(payload, secret, options);

    // send response
    res.set('token', token);
    res.status(200).send(JSON.stringify(newUser));
  }

  static async signIn(req, res) {
    const form = req.body;

    // validate
    if (!form.login || !form.password) {
      res.status(422).send(JSON.stringify({ data: 'invalid form data' }));
      return;
    }

    // find user with same login
    const user = await UserModel.find(form.login);

    // check if already exists
    if (!user) {
      res.status(401).send(JSON.stringify({ error: 'user not found' }));
      return;
    }

    // check password
    const match = await bcrypt.compare(form.password, user.hash);

    if (!match) {
      res.status(401).send(JSON.stringify({ error: 'login/password is not found' }));
      return;
    }

    // generate token
    const payload = { user: user.login };
    const options = { expiresIn: process.env.JWT_EXPIRES_IN };
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign(payload, secret, options);

    // send response
    res.set('token', token);
    res.status(200).send(JSON.stringify(user));
  }
}

module.exports = UserController;