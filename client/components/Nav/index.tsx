import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

import { ListIcon } from '../icons/ListIcon';
import { PlayIcon } from '../icons/PlayIcon';
import { ProfileIcon } from '../icons/ProfileIcon';

import './style.scss';

const ROUTES = {
  GAME_LIST: '/games',
  GAME_CREATE: '/game/create',
  GAME: '/game/{id}',
  SIGN_UP: '/signup',
  SIGN_IN: '/signin',
};

const NavComponent = ({ location }: RouteComponentProps) => (
  <nav className="nav">
    <Link
      className={`nav__item ${location.pathname === ROUTES.GAME_LIST ? 'nav__item_active' : ''}`}
      to={ROUTES.GAME_LIST}
    >
      <ListIcon className="nav__item-icon" />
    </Link>
    <Link
      className={`nav__item ${location.pathname === ROUTES.GAME_CREATE ? 'nav__item_active' : ''}`}
      to={ROUTES.GAME_CREATE}
    >
      <PlayIcon className="nav__item-icon" />
    </Link>
    <Link
      className={`nav__item ${location.pathname === ROUTES.SIGN_UP ? 'nav__item_active' : ''}`}
      to={ROUTES.SIGN_UP}
    >
      <ProfileIcon className="nav__item-icon" />
    </Link>
  </nav>
);

export const Nav = withRouter(NavComponent);
