import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { AppRoutesEnum } from '../../components/App/routes.enum';
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
      <Route path={AppRoutesEnum.GAME_LIST}>
        <GameListPage />
      </Route>

      <Route path={AppRoutesEnum.GAME_CREATE}>
        <GameCreatePage />
      </Route>

      <Route path={AppRoutesEnum.GAME}>
        <GamePage />
      </Route>

      <Route path={AppRoutesEnum.USER_LIST}>
        <UserListPage />
      </Route>

      <Route path={AppRoutesEnum.SIGN_UP}>
        <SignUpPage />
      </Route>

      <Route path={AppRoutesEnum.SIGN_IN}>
        <SignInPage />
      </Route>

      <Route path={AppRoutesEnum.PROFILE}>
        <ProfilePage />
      </Route>
    </Switch>
  </BrowserRouter>
);
