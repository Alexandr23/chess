import * as React from 'react';

import { api, IUser } from '../../services/ApiService';
import { Layout } from '../../components/Layout';

interface IState {
  isLoading: boolean;
  isLoaded: boolean;
  userList: IUser[];
}

export class UserListPage extends React.Component<{}, IState>{
  constructor(props: {}) {
    super(props);

    this.state = {
      isLoading: false,
      isLoaded: false,
      userList: [],
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    api
      .getUserList()
      .then(userList => {
        this.setState({
          isLoading: false,
          isLoaded: true,
          userList,
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
          <div className="game-list-page">Loading</div>
        </Layout>
      );
    }

    const { userList } = this.state;

    return (
      <Layout>
        <div className="game-list-page">
          {userList.length > 0 && (
            <div className="game-list-page__list">
              {userList.map((user, i) => (<div key={i}>{user.login}</div>))}
            </div>
          )}
        </div>
      </Layout>
    );
  }
}
