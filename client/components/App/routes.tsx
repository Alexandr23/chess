import * as React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { AppRoutesEnum } from '../../components/App/routes.enum';
import { Route } from '../../components/App/route';
import { GameListPage } from '../../pages/GameListPage';
import { GamePage } from '../../pages/GamePage';
import { GameCreatePage } from '../../pages/GameCreatePage';
import { UserListPage } from '../../pages/UserListPage';
import { SignUpPage } from '../../pages/SignUpPage';
import { SignInPage } from '../../pages/SignInPage';
import { ProfilePage } from '../../pages/profile-page';

export const AppRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route path={AppRoutesEnum.GAME_LIST} isAuthorizationRequired>
        <GameListPage />
      </Route>

      <Route path={AppRoutesEnum.GAME_CREATE} isAuthorizationRequired>
        <GameCreatePage />
      </Route>

      <Route path={AppRoutesEnum.GAME} isAuthorizationRequired>
        <GamePage />
      </Route>

      <Route path={AppRoutesEnum.USER_LIST} isAuthorizationRequired>
        <UserListPage />
      </Route>

      <Route path={AppRoutesEnum.SIGN_UP}>
        <SignUpPage />
      </Route>

      <Route path={AppRoutesEnum.SIGN_IN}>
        <SignInPage />
      </Route>

      <Route path={AppRoutesEnum.PROFILE} isAuthorizationRequired>
        <ProfilePage />
      </Route>
    </Switch>
  </BrowserRouter>
);
