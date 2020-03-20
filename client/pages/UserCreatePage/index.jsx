import React from "react";
import { withRouter } from "react-router-dom";
import { Input, Button } from 'antd';

import api from "../../services/ApiService";

class UserCreatePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: null,
      },
      isSubmitting: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    this.setState({ isSubmitting: true });

    api
      .createUser(this.state.form)
      .then(response => {
        this.setState({ isSubmitting: false });
        this.props.history.push(`/users`);
      })
      .catch(error => {
        this.setState({ isSubmitting: false });
        console.log(error);
      });
  }

  onChange(event) {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      }
    });
  }

  render() {
    const { name } = this.state.form;

    return (
      <div className="user-create-page">
        <form onSubmit={this.onSubmit}>
          <Input
            name="name"
            type="text"
            value={name}
            onChange={this.onChange}
          />

          <Button htmlType="submit" type="primary">Create</Button>
        </form>
      </div>
    );
  }
}

export default withRouter(UserCreatePage);
