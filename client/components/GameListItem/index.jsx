import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

class GameListItem extends React.Component {
  render() {
    const { game } = this.props;

    return (
      <Link className="game-list-item" to={`/game/${game.id}`}>
        <div className="game-list-item__avatar game-list-item__avatar_w">{game.playerW.name ? game.playerW.name[0] : '?'}</div>
        <div className="game-list-item__title">{`${game.playerW.name} — ${game.playerB.name}`}</div>
        <div className="game-list-item__avatar game-list-item__avatar_b">{game.playerB.name ? game.playerB.name[0] : '?'}</div>
      </Link>
    );
  }
}

export default GameListItem;
