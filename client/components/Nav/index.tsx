import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { ListIcon } from '../icons/ListIcon';
import { PlayIcon } from '../icons/PlayIcon';
import { ProfileIcon } from '../icons/ProfileIcon';

import { AppStateInterface } from '../App/state.interface';
import { AppRoutesEnum } from '../App/routes.enum';

import './style.scss';

interface StateToPropsInterface {
  profile: AppStateInterface['profile'];
}

interface DispatchToPropsInterface {}

interface NavStateToProps extends StateToPropsInterface, RouteComponentProps {}

const NavComponent = ({ location, profile }: NavStateToProps) => {
  console.log('profile', profile);

  return (
    <nav className="nav">
      <Link
        className={`nav__item ${
          location.pathname === AppRoutesEnum.GAME_LIST
            ? 'nav__item_active'
            : ''
        }`}
        to={AppRoutesEnum.GAME_LIST}
      >
        <ListIcon className="nav__item-icon" />
      </Link>

      <Link
        className={`nav__item ${
          location.pathname === AppRoutesEnum.GAME_CREATE
            ? 'nav__item_active'
            : ''
        }`}
        to={AppRoutesEnum.GAME_CREATE}
      >
        <PlayIcon className="nav__item-icon" />
      </Link>

      <Link
        className={`nav__item ${
          location.pathname === AppRoutesEnum.SIGN_IN ||
          location.pathname === AppRoutesEnum.SIGN_UP ||
          location.pathname === AppRoutesEnum.PROFILE
            ? 'nav__item_active'
            : ''
        }`}
        to={AppRoutesEnum.SIGN_IN}
      >
        <ProfileIcon className="nav__item-icon" />
      </Link>
    </nav>
  );
};

export const Nav = withRouter(
  connect<
    StateToPropsInterface,
    DispatchToPropsInterface,
    RouteComponentProps,
    AppStateInterface
  >(state => ({
    profile: state.profile,
  }))(NavComponent),
);
