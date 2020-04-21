import * as React from 'react';
import { withRouter, RouteComponentProps, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { signUpAction } from '../../modules/sign-up/sign-up-action';
import { AppStateInterface } from '../../components/App/state.interface';
import { UserInterface } from '../../modules/user/interface';
import { SignUpRequestInterface } from '../../modules/sign-up/sign-up-request.interface';
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
  signUpAction: any; // (params: SignUpRequestInterface) => Promise<UserInterface>;
}

interface StateInterface {
  form: {
    login: string;
    password: string;
  };
}

type PropsInterface = StateToPropsInterface & DispatchToPropsInterface & RouteComponentProps;

class SignUpFormComponent extends React.Component<PropsInterface, StateInterface> {
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

    this.props.signUpAction(this.state.form);
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
      return (
        <Redirect to={AppRoutesEnum.PROFILE} />
      );
    }

    const { login, password } = this.state.form;

    return (
      <form className="sign-up-form" onSubmit={this.onSubmit}>
        <Title className="sign-up-form__title">Sign up</Title>

        <Input
          className="sign-up-form__input"
          name="login"
          placeholder="Login"
          value={login}
          onChange={this.onChange}
        />

        <Input
          className="sign-up-form__input"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.onChange}
        />

        <Button
          className="sign-up-form__button"
          htmlType="submit"
          isFullWidth
          isDisabled={this.props.isRequesting}
        >
          Sign up
        </Button>
      </form>
    );
  }
}

export const SignUpForm = withRouter(connect<StateToPropsInterface, DispatchToPropsInterface, RouteComponentProps, AppStateInterface>(
  state => ({
    error: state.signUp.error,
    isAuthorized: !!state.profile.user,
    isRequesting: state.signUp.isRequesting,
  }),
  {
    signUpAction,
  },
)(SignUpFormComponent));
