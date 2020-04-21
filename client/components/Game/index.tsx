import * as React from 'react';
import { Chess, IChessMove, IChessPiece } from './chess';
import { Board } from '../Board';
import { Piece } from '../Piece';
import { IGame } from '../../services/ApiService';

import './style.scss';

interface IProps {
  game: IGame;
}

interface IState {
  isLoaded: boolean;
  pieces: IChessPiece[];
  isGameOver: boolean;
}

export class Game extends React.Component<IProps, IState> {
  private chess: Chess;
  
  constructor(props: IProps) {
    super(props);

    this.chess = new Chess();

    this.state = {
      isLoaded: false,
      pieces: this.chess.getPieces(),
      isGameOver: this.chess.isGameOver(),
    };
  }

  private handleMove = (move: IChessMove) => {
    const moveResult = this.chess.move(move);

    console.log(this.chess.getFen());

    if (moveResult) {
      this.setState({
        pieces: this.chess.getPieces(),
        isGameOver: this.chess.isGameOver(),
      });
    }

    return moveResult;
  }

  render() {
    return (
      <div className="game">
        <Board isGameOver={this.state.isGameOver}>
          {this.state.pieces.map((piece, i) => (
            <Piece
              onMove={this.handleMove}
              piece={piece}
              key={piece.type + piece.color + piece.x + piece.y}
            />
          ))}
        </Board>
      </div>
    );
  }
}
