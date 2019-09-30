import ChessLib from "chess.js";

const FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

class Chess {
  constructor(fen) {
    this.chess = new ChessLib(fen || FEN);
  }

  getPiecesFromRow(row, y) {
    let counter = 1;

    return row.reduce((pieces, item) => {
      if (isNaN(item)) {
        pieces.push({
          x: counter,
          y,
          type: item,
          color: item === item.toUpperCase() ? "w" : "b"
        });
        counter++;
      } else {
        counter += +item;
      }

      return pieces;
    }, []);
  }

  getPieces() {
    const fen = this.getFen();

    return fen
      .split(" ")[0]
      .split("/")
      .reduce((pieces, row, i) => {
        return pieces.concat(this.getPiecesFromRow(row.split(""), 8 - i));
      }, []);
  }

  getSquareFromCoordinates(coordinates) {
    return "abcdefgh"[coordinates.x - 1] + "12345678"[coordinates.y - 1];
  }

  move(move) {
    return this.chess.move({
      from: this.getSquareFromCoordinates(move.from),
      to: this.getSquareFromCoordinates(move.to)
    });
  }

  getMoves() {
    return this.chess.moves();
  }

  getFen() {
    return this.chess.fen();
  }

  isGameOver() {
    return this.chess.game_over();
  }
}

export default Chess;
