import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { Layout } from '../../components/Layout';

import { api, IUser, Color } from '../../services/ApiService';

interface IState {
  form: {
    // playerWId: string;
    // playerBId: string;
    color: Color | null;
  };
  isSubmitting: boolean;
  userList: IUser[];
}

class GameCreatePageComponent extends React.Component<
  RouteComponentProps,
  IState
> {
  constructor(props: RouteComponentProps) {
    super(props);

    this.state = {
      form: {
        // playerWId: "",
        // playerBId: "",
        color: null,
      },
      isSubmitting: false,
      userList: [],
    };
  }

  componentDidMount(): void {
    api.getUserList().then(this.onFetchUserListSuccess);
  }

  onFetchUserListSuccess = (userList: IUser[]): void => {
    this.setState({
      userList,
    });
  }

  // createGame(): void {
  //   this.setState({ isSubmitting: true });

  //   api
  //     .createGame(this.state.form)
  //     .then((game) => {
  //       this.setState({ isSubmitting: false });
  //       this.props.history.push(`/game/${game.id}`);
  //     })
  //     .catch((error) => {
  //       this.setState({ isSubmitting: false });
  //       console.log(error);
  //     });
  // }

  createGameRequest(): void {
    this.setState({ isSubmitting: true });

    api
      .createGameRequest({
        color: this.state.form.color,
      })
      .then(gameRequest => {
        this.setState({ isSubmitting: false });
        // this.props.history.push(`/game/${game.id}`);
        console.log({ gameRequest });
      })
      .catch(error => {
        this.setState({ isSubmitting: false });
        console.log(error);
      });
  }

  onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // this.createGame();
    this.createGameRequest();
  }

  onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value || null,
      },
    });
  }

  render() {
    return (
      <Layout>
        <div className="game-create-page">
          <form onSubmit={this.onSubmit}>
            <select
              name="color"
              style={{ width: 200 }}
              placeholder="Select color"
              onChange={this.onSelect}
            >
              <option key={Color.White} value={Color.White} label={'White'} />
              <option key={Color.Black} value={Color.Black} label={'Black'} />
              <option key={'Any'} value={undefined} label={'Any'} />
            </select>

            {/* <select
              name="playerWId"
              style={{ width: 200 }}
              placeholder="Select a player"
              onChange={this.onSelect}
            >
              {this.state.userList.map(user => (
                <option key={user.id} value={user.id}>
                  {user.login}
                </option>
              ))}
            </select>

            <select
              name="playerBId"
              style={{ width: 200 }}
              placeholder="Select a player"
              onChange={this.onSelect}
            >
              {this.state.userList.map(user => (
                <option key={user.id} value={user.id}>
                  {user.login}
                </option>
              ))}
            </select> */}

            <button type="submit">Create</button>
          </form>
        </div>
      </Layout>
    );
  }
}

export const GameCreatePage = withRouter(GameCreatePageComponent);
