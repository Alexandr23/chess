const db = require("../db").db;

class UserModel {
  static create(user) {
    const query = `INSERT INTO users (login, hash) VALUES($1, $2) RETURNING *`;
    const values = [user.login, user.hash];

    return db
      .one(query, values)
      .then(res => res)
      .catch(err => err);
  }

  static getById(id) {
    const query = `SELECT * FROM users WHERE id=$1`;
    const values = [id];

    return db
      .one(query, values)
      .then(res => res)
      .catch(err => err);
  }

  static getAll() {
    const query = `SELECT * FROM users`;

    return db
      .any(query)
      .then(res => res)
      .catch(err => err);
  }

  static find(login) {
    const query = `SELECT * FROM users WHERE login = '${login}'`;

    return db
      .any(query)
      .then(res => res.length ? res[0] : null)
      .catch(err => err);
  }
}

module.exports = UserModel;
