const db = require("../db").db;

class GameRequestModel {
  static create(gameRequest) {
    const query = `INSERT INTO "game-requests" (user_id, color) VALUES($1, $2) RETURNING *`;
    const values = [gameRequest.userId, gameRequest.color];

    this.getMatch(gameRequest).then((data) => {
      console.log("MATCH", data);
    });

    return db
      .one(query, values)
      .then((res) => res)
      .catch((err) => err);
  }

  static getById(id) {
    const query = `SELECT * FROM "game-requests" WHERE id=$1`;
    const values = [id];

    return db
      .one(query, values)
      .then((res) => res)
      .catch((err) => err);
  }

  static getAll() {
    const query = `SELECT * FROM "game-requests"`;

    return db
      .any(query)
      .then((res) => res)
      .catch((err) => err);
  }

  static getAllByUserId(userId) {
    const query = `SELECT * FROM "game-requests" WHERE user_id=$1`;
    const values = [userId];

    return db
      .any(query, values)
      .then((res) => res)
      .catch((err) => err);
  }

  static getMatch(gameRequest) {
    const query = `
      SELECT * FROM "game-requests" 
      WHERE user_id!=$1 AND (color!=$2 OR color IS NULL) 
      ORDER BY create_time ASC 
      LIMIT 1 
    `;
    const values = [gameRequest.userId, gameRequest.color];

    return db
      .any(query, values)
      .then((res) => res)
      .catch((err) => err);
  }
}

module.exports = GameRequestModel;
