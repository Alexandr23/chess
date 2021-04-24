import * as React from 'react';
import { withRouter, RouteComponentProps, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { signInAction } from '../../modules/sign-in/sign-in-action';
import { AppStateInterface } from '../../components/App/state.interface';
import { UserInterface } from '../../modules/user/interface';
import { SignInRequestInterface } from '../../modules/sign-in/sign-in-request.interface';
import { Button } from '../../modules/button/component';
import { Input } from '../../modules/input/component';
import { Title } from '../../modules/title/component';
import { AppRoutesEnum } from '../../components/App/routes.enum';

import './style.scss';

interface StateToPropsInterface {
  error: any;
  isAuthorized: boolean;
  isRequesting: boolean;
}

interface DispatchToPropsInterface {
  signInAction: any; // (params: SignUpRequestInterface) => Promise<UserInterface>;
}

interface StateInterface {
  form: {
    login: string;
    password: string;
  };
}

type PropsInterface = StateToPropsInterface &
  DispatchToPropsInterface &
  RouteComponentProps;

class SignInFormComponent extends React.Component<
  PropsInterface,
  StateInterface
> {
  constructor(props: PropsInterface) {
    super(props);

    this.state = {
      form: {
        login: '',
        password: '',
      },
    };
  }

  private onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    this.props.signInAction(this.state.form);
  }

  private onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  }

  public render(): JSX.Element {
    if (this.props.isAuthorized) {
      return <Redirect to={AppRoutesEnum.PROFILE} />;
    }

    const { login, password } = this.state.form;

    return (
      <form className="sign-in-form" onSubmit={this.onSubmit}>
        <Title className="sign-in-form__title">Sign In</Title>

        <Input
          className="sign-in-form__input"
          name="login"
          placeholder="Login"
          value={login}
          onChange={this.onChange}
        />

        <Input
          className="sign-in-form__input"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.onChange}
        />

        <Button
          className="sign-in-form__button"
          htmlType="submit"
          isFullWidth
          isDisabled={this.props.isRequesting}
        >
          Sign In
        </Button>
      </form>
    );
  }
}

export const SignInForm = withRouter(
  connect<
    StateToPropsInterface,
    DispatchToPropsInterface,
    RouteComponentProps,
    AppStateInterface
  >(state => ({
      error: state.signUp.error,
      isAuthorized: !!state.profile.user,
      isRequesting: state.signUp.isRequesting,
    }),
    {
      signInAction,
    },
  )(SignInFormComponent),
);
