import * as React from 'react';
import { connect } from 'react-redux';

import { AppStateInterface } from '../../components/App/state.interface';
import { getProfile } from '../../modules/profile/actions/getProfile';

interface StateToPropsInterface {
  profile: AppStateInterface['profile'];
}

interface DispatchToPropsInterface {
  getProfile: () => void;
}

interface OwnPropsInterface {
  children: React.ReactElement;
}

interface Props
  extends StateToPropsInterface,
    DispatchToPropsInterface,
    OwnPropsInterface {}

export const AuthProviderComponent: React.FC<Props> = ({
  profile,
  getProfile,
  children,
}) => {
  React.useEffect(() => {
    getProfile();
  }, []);

  if (profile.isInitiallyRequested) {
    return children;
  }

  return <>Requesting profile...</>;
};

export const AuthProvider = connect<
  StateToPropsInterface,
  DispatchToPropsInterface,
  OwnPropsInterface,
  AppStateInterface
>(state => ({
    profile: state.profile,
  }),
  { getProfile },
)(AuthProviderComponent);
