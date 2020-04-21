import * as React from 'react';
import Draggable, { DraggableEvent } from 'react-draggable';
import { IChessPiece, IChessMove, IChessCoordinates } from '../Game/chess';

import './style.scss';

const BOARD_SIZE = 320; // 320px
const SQUARE_SIZE = BOARD_SIZE / 8; // 40px

interface IPiecePosition {
  x: number;
  y: number;
}

interface IProps {
  piece: IChessPiece;
  onMove: (move: IChessMove) => void;
}

export class Piece extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.handleStopDragging = this.handleStopDragging.bind(this);
  }

  calculatePosition(value: number) {
    const delta = value % SQUARE_SIZE;
    return delta > SQUARE_SIZE / 2
      ? value - delta + SQUARE_SIZE
      : value - delta;
  }

  handleStopDragging(e: DraggableEvent, data: { x: number, y: number }) {
    const position = {
      x: this.calculatePosition(data.x),
      y: this.calculatePosition(data.y),
    };

    this.props.onMove({
      from: { x: this.props.piece.x, y: this.props.piece.y },
      to: this.getCoordinatesFromPosition(position),
    });
  }

  getCoordinatesFromPosition(position: IPiecePosition): IChessCoordinates {
    return {
      x: position.x / SQUARE_SIZE + 1,
      y: 8 - position.y / SQUARE_SIZE,
    };
  }

  getPositionFromCoordinates(coordinates: IChessCoordinates): IPiecePosition {
    return {
      x: (coordinates.x - 1) * SQUARE_SIZE,
      y: BOARD_SIZE - coordinates.y * SQUARE_SIZE,
    };
  }

  render() {
    const position = this.getPositionFromCoordinates({
      x: this.props.piece.x,
      y: this.props.piece.y,
    });

    return (
      <Draggable
        bounds="parent"
        onStop={this.handleStopDragging}
        position={position}
        defaultClassNameDragging="piece_dragging"
      >
        <div className={`piece piece_${this.props.piece.type}`} />
      </Draggable>
    );
  }
}
