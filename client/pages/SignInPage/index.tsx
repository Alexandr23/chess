import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { api, ISignInRequest } from '../../services/ApiService';
import { Layout } from '../../components/Layout';

interface IState {
  form: ISignInRequest;
  isRequesting: boolean;
}

class SignInPageComponent extends React.Component<RouteComponentProps, IState> {
  constructor(props: RouteComponentProps) {
    super(props);

    this.state = {
      form: {
        login: '',
        password: '',
      },
      isRequesting: false,
    };
  }

  private onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    this.setState({ isRequesting: true });

    api
      .signIn(this.state.form)
      .finally(() => {
        this.setState({ isRequesting: false });
      })
      .then(console.log)
      .catch(console.log);
  }

  private onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  }

  public render() {
    const { login, password } = this.state.form;

    return (
      <Layout>
        <div className="sign-in-page">
          <form onSubmit={this.onSubmit}>
            <input
              name="login"
              type="text"
              placeholder="Login"
              value={login}
              onChange={this.onChange}
            />

            <input
              name="password"
              type="text"
              placeholder="Password"
              value={password}
              onChange={this.onChange}
            />

            <button type="submit">Sign in</button>
          </form>
        </div>
      </Layout>
    );
  }
}

export const SignInPage = withRouter(SignInPageComponent);
