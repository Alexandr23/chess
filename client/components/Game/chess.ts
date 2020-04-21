import * as ChessJS from 'chess.js';

const FEN: string = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

export interface IChessCoordinates {
  x: number;
  y: number;
}

export interface IChessMove {
  from: IChessCoordinates;
  to: IChessCoordinates;
}

export enum ChessColor {
  white = 'w',
  black = 'b',
}

export interface IChessPiece {
  x: number;
  y: number;
  type: string;
  color: ChessColor;
}

export class Chess {
  private chess: ChessJS;

  constructor(fen: string = FEN) {
    this.chess = new ChessJS(fen);
  }

  public getPieces(): IChessPiece[] {
    const fen = this.getFen();

    return fen
      .split(' ')[0]
      .split('/')
      .reduce<IChessPiece[]>((pieces, row, i) => {
        return pieces.concat(this.getPiecesFromRow(row.split(''), 8 - i));
      }, []);
  }

  public move(move: IChessMove) {
    return this.chess.move({
      from: this.getSquareFromCoordinates(move.from),
      to: this.getSquareFromCoordinates(move.to),
    });
  }

  public getFen(): string {
    return this.chess.fen();
  }

  public isGameOver(): boolean {
    return this.chess.game_over();
  }

  private getPiecesFromRow(row: string[], y: number) {
    let counter = 1;

    return row.reduce<IChessPiece[]>((pieces, item) => {
      if (isNaN(Number(item))) {
        pieces.push({
          x: counter,
          y,
          type: item,
          color: item === item.toUpperCase() ? ChessColor.white : ChessColor.black,
        });
        counter++;
      } else {
        counter += +item;
      }

      return pieces;
    }, []);
  }

  private getSquareFromCoordinates(coordinates: IChessCoordinates): ChessJS.Square {
    return 'abcdefgh'[coordinates.x - 1] + '12345678'[coordinates.y - 1] as ChessJS.Square;
  }

  private getMoves() {
    return this.chess.moves();
  }
}
