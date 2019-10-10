import React from "react";
import { withRouter } from "react-router-dom";
import { Input, Button } from 'antd';

import api from "../../services/ApiService";

class GameCreatePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        playerWId: null,
        playerBId: null
      },
      isSubmitting: false
    };

    this.onChange = this.onChange.bind(this);
    this.createGame = this.createGame.bind(this);
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

  onChange(event) {
    const form = {
      ...this.state.form,
      [event.target.name]: event.target.value
    };
    this.setState({ form });
  }

  render() {
    return (
      <div className="game-create-page">
        <form onSubmit={this.createGame}>
          <Input
            name="playerWId"
            type="text"
            value={this.state.playerWId}
            onChange={this.onChange}
          />
          <Input
            name="playerBId"
            type="text"
            value={this.state.playerBId}
            onChange={this.onChange}
          />
          <Button type="primary">Create</Button>
        </form>
      </div>
    );
  }
}

export default withRouter(GameCreatePage);
