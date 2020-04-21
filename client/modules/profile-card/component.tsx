import * as React from 'react';

import { UserInterface } from '../../modules/user/interface';
import { Button } from '../../modules/button/component';

import './style.scss';

interface PropsInterface {
  user: UserInterface;
  onLogout: () => void;
}

export const ProfileCard = ({ user, onLogout }: PropsInterface) => (
  <div className="profile-card">
    <div className="profile-card__login">{user.login}</div>

    <Button className="profile-card__logout-button" onClick={onLogout}>Logout</Button>
  </div>
);
