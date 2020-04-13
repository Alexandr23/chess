import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Select } from 'antd';

import api from "../../services/ApiService";

class GameCreatePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        playerWId: null,
        playerBId: null
      },
      isSubmitting: false,
      userList: [],
    };

    this.onSelect = this.onSelect.bind(this);
    this.createGame = this.createGame.bind(this);
    this.onFetchUserListSuccess = this.onFetchUserListSuccess.bind(this);
  }

  componentDidMount() {
    api.getUserList().then(this.onFetchUserListSuccess);
  }

  onFetchUserListSuccess(response) {
    this.setState({
      userList: response.data.userList,
    })
  }

  createGame(event) {
    event.preventDefault();

    this.setState({ isSubmitting: true });

    api
      .createGame(this.state.form)
      .then(response => {
        this.setState({ isSubmitting: false });
        this.props.history.push(`/game/${response.data.createGame.id}`);
      })
      .catch(error => {
        this.setState({ isSubmitting: false });
        console.log(error);
      });
  }

  onSelect(fieldName, value) {
    console.log(fieldName, value);

    this.setState({
      form: {
        ...this.state.form,
        [fieldName]: value,
      }
    });
  }

  render() {
    return (
      <div className="game-create-page">
        <form onSubmit={this.createGame}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a player"
            optionFilterProp="children"
            onSelect={(value) => this.onSelect('playerWId', value)}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            {this.state.userList.map((user) => <Select.Option key={user.id} value={user.id}>{user.login}</Select.Option>)}
          </Select>

          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a player"
            optionFilterProp="children"
            onSelect={(value) => this.onSelect('playerBId', value)}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            {this.state.userList.map((user) => <Select.Option key={user.id} value={user.id}>{user.login}</Select.Option>)}
          </Select>
          <Button htmlType="submit" type="primary">Create</Button>
        </form>
      </div>
    );
  }
}

export default withRouter(GameCreatePage);
