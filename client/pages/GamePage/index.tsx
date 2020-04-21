import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { api, IGame } from '../../services/ApiService';
import { Game } from '../../components/Game';
import { Layout } from '../../components/Layout';

interface IGamePageRouteParams {
  id: string;
}

interface IProps extends RouteComponentProps<IGamePageRouteParams> {

}

interface IState {
  isLoading: boolean;
  game: IGame | null;
}

class GamePageComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      isLoading: true,
      game: null,
    };
  }

  componentDidMount() {
    const gameId = this.props.match.params.id;

    api
      .getGame(gameId)
      .then(game => {
        this.setState({ isLoading: false, game });
      })
      .catch(error => {
        this.setState({ isLoading: false });
        console.log(error);
      });
  }

  render() {
    const { isLoading, game } = this.state;

    return (
      <Layout>
        <div className="game-page">
          {isLoading && 'Loading'}
          {!isLoading && game && <Game game={game} />}
        </div>
      </Layout>
    );
  }
}

export const GamePage = withRouter(GamePageComponent);
