import React from "react";
import { Link } from "react-router-dom";

import api from "../../services/ApiService";

class GameListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      gameList: null
    };
  }

  componentDidMount() {
    api
      .getGameList()
      .then(response => {
        this.setState({ isLoaded: true, gameList: response.data.gameList });
      })
      .catch(error => {
        this.setState({ isLoaded: true });
        console.log(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return <div className="game-list-page">Loading</div>;
    }

    const { gameList } = this.state;
    const isGameList = Array.isArray(gameList) && gameList.length > 0;

    return (
      <div className="game-list-page">
        {isGameList && (
          <div className="game-list-page__list">
            {gameList.map(game => (
              <Link
                className="game-list-page__game"
                to={`/game/${game.id}`}
                key={game.id}
              >
                {`#${game.id}: ${game.playerW.name} - ${game.playerB.name}`}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default GameListPage;
