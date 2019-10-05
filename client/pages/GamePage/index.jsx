import React from "react";
import { withRouter, Link } from "react-router-dom";

import api from "../../services/ApiService";
import Game from "../../components/Game";

class GamePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      game: null
    };
  }

  componentDidMount() {
    const gameId = this.props.match.params.id;

    api
      .getGame(gameId)
      .then(response => {
        this.setState({ isLoaded: true, game: response.data.game });
      })
      .catch(error => {
        this.setState({ isLoaded: true });
        console.log(error);
      });
  }

  render() {
    const { isLoading, game } = this.state;

    return (
      <div className="game-page">
        <Link to="/games">Back to list</Link>
        {isLoading && "Loading"}
        {JSON.stringify(game)}
        {!isLoading && game && <Game game={game} />}
      </div>
    );
  }
}

export default withRouter(GamePage);
