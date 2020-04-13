import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

class GameListItem extends React.Component {
  render() {
    const { game } = this.props;

    return (
      <Link className="game-list-item" to={`/game/${game.id}`}>
        <div className="game-list-item__avatar game-list-item__avatar_w">{game.playerW.login ? game.playerW.login[0] : '?'}</div>
        <div className="game-list-item__title">{`${game.playerW.login} — ${game.playerB.login}`}</div>
        <div className="game-list-item__avatar game-list-item__avatar_b">{game.playerB.login ? game.playerB.login[0] : '?'}</div>
      </Link>
    );
  }
}

export default GameListItem;
