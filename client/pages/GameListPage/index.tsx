import * as React from 'react';

import { api, IGame } from '../../services/ApiService';
import { GameListItem } from '../../components/GameListItem';
import { Layout } from '../../components/Layout';

interface IState {
  isLoading: boolean;
  isLoaded: boolean;
  gameList: IGame[];
}

export class GameListPage extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      isLoading: false,
      isLoaded: false,
      gameList: [],
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    api
      .getGameList()
      .then(gameList => {
        this.setState({
          isLoading: false,
          isLoaded: true,
          gameList,
        });
      })
      .catch(error => {
        this.setState({
          isLoading: false,
        });
        console.log(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Layout>
          <div className="game-list-page">Loading</div>;
        </Layout>
      );
    }

    const { gameList } = this.state;

    return (
      <Layout>
        <div className="game-list-page">
          {gameList.length > 0 && (
            <div className="game-list-page__list">
              {gameList.map(game => (<GameListItem game={game} key={game.id} />))}
            </div>
          )}
        </div>
      </Layout>
    );
  }
}
