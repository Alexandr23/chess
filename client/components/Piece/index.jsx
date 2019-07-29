import React from "react";
import Draggable from "react-draggable";

import "./style.scss";
import { isEqual } from "lodash-es";

const BOARD_SIZE = 400; // 400px
const SQUARE_SIZE = BOARD_SIZE / 8; // 50px

class Piece extends React.Component {
  constructor(props) {
    super(props);

    this.ref = null;
    this.size = 0;

    this.state = {
      position: {
        x: (props.piece.x - 1) * SQUARE_SIZE,
        y: BOARD_SIZE - props.piece.y * SQUARE_SIZE
      }
    };

    this.handleStopDragging = this.handleStopDragging.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps, this.props)) {
      this.setState({
        position: {
          x: (nextProps.piece.x - 1) * SQUARE_SIZE,
          y: BOARD_SIZE - nextProps.piece.y * SQUARE_SIZE
        }
      });
    }
  }

  calcCoordinate(coordinate, size) {
    const delta = coordinate % size;
    return delta > size / 2 ? coordinate - delta + size : coordinate - delta;
  }

  getSquareFromCoordinates(position) {
    return (
      "abcdefgh"[position.x / SQUARE_SIZE] +
      "87654321"[position.y / SQUARE_SIZE]
    );
  }

  handleStopDragging(e, data) {
    this.size = data.node.clientWidth;

    const position = {
      x: this.calcCoordinate(data.x, this.size),
      y: this.calcCoordinate(data.y, this.size)
    };

    this.props.onMove({
      from: this.getSquareFromCoordinates(this.state.position),
      to: this.getSquareFromCoordinates(position)
    });
  }

  render() {
    return (
      <Draggable
        bounds="parent"
        onStop={this.handleStopDragging}
        position={this.state.position}
        defaultClassNameDragging="piece_dragging"
      >
        <div className={`piece piece_${this.props.piece.type}`} />
      </Draggable>
    );
  }
}

export default Piece;
