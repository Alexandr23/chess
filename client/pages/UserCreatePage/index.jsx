import React from "react";
import { withRouter } from "react-router-dom";
import { Input, Button } from 'antd';

import api from "../../services/ApiService";

class UserCreatePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        login: '',
        password: '',
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
      .signUp(this.state.form)
      .then(res => {
        console.log(res);
        this.setState({ isSubmitting: false });
        // this.props.history.push(`/users`);
      })
      .catch(error => {
        this.setState({ isSubmitting: false });
        console.log(error);
      });

    // api
    //   .createUser(this.state.form)
    //   .then(response => {
    //     this.setState({ isSubmitting: false });
    //     this.props.history.push(`/users`);
    //   })
    //   .catch(error => {
    //     this.setState({ isSubmitting: false });
    //     console.log(error);
    //   });
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
    const { login, password } = this.state.form;

    return (
      <div className="user-create-page">
        <form onSubmit={this.onSubmit}>
          <Input
            name="login"
            type="text"
            placeholder="Login"
            value={login}
            onChange={this.onChange}
          />

          <Input
            name="password"
            type="text"
            placeholder="Password"
            value={password}
            onChange={this.onChange}
          />

          <Button htmlType="submit" type="primary">Sign up</Button>
        </form>
      </div>
    );
  }
}

export default withRouter(UserCreatePage);
