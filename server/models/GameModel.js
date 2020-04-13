const db = require("../db").db;

class GameModel {
  static create(game) {
    const query = `INSERT INTO games(player_w_id, player_b_id, creator_id) VALUES($1, $2, $1) RETURNING *`;
    const values = [game.playerWId, game.playerBId];

    return db
      .one(query, values)
      .then(res => res)
      .catch(err => err);
  }

  static getById(id) {
    const query = `SELECT * FROM games WHERE id=$1`;
    const values = [id];

    return db
      .one(query, values)
      .then(res => res)
      .catch(err => err);
  }

  static getAll() {
    const query = `SELECT * FROM games`;

    return db
      .any(query)
      .then(res => res)
      .catch(err => err);
  }
}

module.exports = GameModel;
