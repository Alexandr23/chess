const db = require("../db").db;

class UserModel {
  static create(user) {
    const query = `INSERT INTO users (name) VALUES($1) RETURNING *`;
    const values = [user.name];

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
}

module.exports = UserModel;
