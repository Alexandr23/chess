import * as React from 'react';
import { Route as RouterRoute, RouteProps, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppRoutesEnum } from '../../components/App/routes.enum';
import { AppStateInterface } from '../../components/App/state.interface';
import { GameListPage } from '../../pages/GameListPage';
import { GamePage } from '../../pages/GamePage';
import { GameCreatePage } from '../../pages/GameCreatePage';
import { UserListPage } from '../../pages/UserListPage';
import { SignUpPage } from '../../pages/SignUpPage';
import { SignInPage } from '../../pages/SignInPage';
import { ProfilePage } from '../../pages/profile-page';

interface StateToPropsInterface {
  isAuthorized: boolean;
}

interface DispatchToPropsInterface {}

interface OwnPropsInterface extends RouteProps {
  isAuthorizationRequired?: boolean;
}

interface PropsInterface extends StateToPropsInterface, OwnPropsInterface {
  isAuthorizationRequired?: boolean;
}

export const RouteComponent = (props: PropsInterface) => {
  const { isAuthorized, isAuthorizationRequired, ...restProps } = props;

  console.log('ROUTE', props);

  if (isAuthorizationRequired && !isAuthorized) {
    return <Redirect to={AppRoutesEnum.SIGN_IN} />;
  }

  return <RouterRoute {...restProps} />;
};

export const Route = connect<
  StateToPropsInterface,
  DispatchToPropsInterface,
  RouteProps,
  AppStateInterface
>(state => ({
  isAuthorized: Boolean(state.profile.user),
}))(RouteComponent);
