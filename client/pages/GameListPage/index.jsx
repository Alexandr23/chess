import React from "react";

import api from "../../services/ApiService";
import GameListItem from "../../components/GameListItem";

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
            {gameList.map(game => (<GameListItem game={game} key={game.id} />))}
          </div>
        )}
      </div>
    );
  }
}

export default GameListPage;
