import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Layout } from '../../components/Layout';
import { ProfileCard } from '../../modules/profile-card/component';
import { UserInterface } from '../../modules/user/interface';
import { AppStateInterface } from '../../components/App/state.interface';
import { logoutAction } from '../../modules/logout/logout-action';
import { AppRoutesEnum } from '../../components/App/routes.enum';

import './style.scss';

interface StateToPropsInterface {
  user: UserInterface | null;
}

interface DispatchToPropsInterface {
  logoutAction: any;
}

type PropsInterface = StateToPropsInterface & DispatchToPropsInterface;

class ProfilePageComponent extends React.Component<PropsInterface> {
  private onLogout = (): void => {
    this.props.logoutAction();
  }

  public render() {
    const { user } = this.props;

    if (!user) {
      return (
        <Redirect to={AppRoutesEnum.SIGN_UP} />
      );
    }

    return (
      <Layout>
        <div className="profile-page">
          <ProfileCard user={user} onLogout={this.onLogout} />
        </div>
      </Layout>
    );
  }
}


export const ProfilePage = connect<StateToPropsInterface, DispatchToPropsInterface, {}, AppStateInterface>(
  state => ({
    user: state.profile.user,
  }),
  {
    logoutAction,
  },
)(ProfilePageComponent);