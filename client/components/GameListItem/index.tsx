import * as React from 'react';
import { Link } from 'react-router-dom';

import { IGame } from '../../services/ApiService';

import './style.scss';

interface IProps {
  game: IGame;
}

export class GameListItem extends React.Component<IProps> {
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
