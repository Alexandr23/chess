import React from "react";
import { withRouter } from "react-router-dom";
import { Input, Button } from 'antd';

import api from "../../services/ApiService";

class SignInPage extends React.Component {
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
      .signIn(this.state.form)
      .finally(() => {
        this.setState({ isSubmitting: false });
      })
      .then(console.log)
      .catch(console.log);
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
      <div className="sign-in-page">
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

          <Button htmlType="submit" type="primary">Sign in</Button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignInPage);
