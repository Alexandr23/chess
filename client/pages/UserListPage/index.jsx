import React from "react";

import api from "../../services/ApiService";

class UserListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      isLoaded: false,
      list: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    api
      .getUserList()
      .then(response => {
        this.setState({
          isLoading: false,
          isLoaded: true,
          list: response.data.userList,
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
      return <div className="game-list-page">Loading</div>;
    }

    const { list } = this.state;
    const isList = Array.isArray(list) && list.length > 0;

    return (
      <div className="game-list-page">
        {isList && (
          <div className="game-list-page__list">
            {list.map(user => (<div>{user.name}</div>))}
          </div>
        )}
      </div>
    );
  }
}

export default UserListPage;
