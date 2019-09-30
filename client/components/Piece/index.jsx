import React from "react";
import Draggable from "react-draggable";

import "./style.scss";
import { isEqual } from "lodash-es";

const BOARD_SIZE = 400; // 400px
const SQUARE_SIZE = BOARD_SIZE / 8; // 50px

class Piece extends React.Component {
  constructor(props) {
    super(props);
    this.handleStopDragging = this.handleStopDragging.bind(this);
  }

  calculatePosition(value) {
    const delta = value % SQUARE_SIZE;
    return delta > SQUARE_SIZE / 2
      ? value - delta + SQUARE_SIZE
      : value - delta;
  }

  handleStopDragging(e, data) {
    const position = {
      x: this.calculatePosition(data.x),
      y: this.calculatePosition(data.y)
    };

    this.props.onMove({
      from: { x: this.props.piece.x, y: this.props.piece.y },
      to: this.getCoordinatesFromPosition(position)
    });
  }

  getCoordinatesFromPosition(position) {
    return {
      x: position.x / SQUARE_SIZE + 1,
      y: 8 - position.y / SQUARE_SIZE
    };
  }

  getPositionFromCoordinates(coordinates) {
    return {
      x: (coordinates.x - 1) * SQUARE_SIZE,
      y: BOARD_SIZE - coordinates.y * SQUARE_SIZE
    };
  }

  render() {
    const position = this.getPositionFromCoordinates({
      x: this.props.piece.x,
      y: this.props.piece.y
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

export default Piece;
