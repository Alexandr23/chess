import React from "react";
import Chess from "./Chess";
import Board from "../Board";
import Piece from "../Piece";
import "./style.scss";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.chess = new Chess();
    this.handleMove = this.handleMove.bind(this);

    this.state = {
      pieces: this.chess.getPieces(),
      isGameOver: this.chess.isGameOver()
    };
  }

  handleMove(move) {
    const moveResult = this.chess.move(move);

    console.log(this.chess.getFen());

    if (moveResult) {
      this.setState({
        pieces: this.chess.getPieces(),
        isGameOver: this.chess.isGameOver()
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
              key={i + piece.type + piece.color + piece.x + piece.y}
            />
          ))}
        </Board>
      </div>
    );
  }
}

export default Game;
