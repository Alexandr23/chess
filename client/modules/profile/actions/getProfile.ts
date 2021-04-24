import { Dispatch } from 'redux';

import { api } from '../../../services/ApiService';

import { profileRequestStarted } from '../actions/profileRequestStarted';
import { profileRequestSucceed } from '../actions/profileRequestSucceed';
import { profileRequestFailed } from '../actions/profileRequestFailed';

export const getProfile = () => {
  return async (dispatch: Dispatch) => {
    dispatch(profileRequestStarted());

    try {
      const user = await api.getProfile();

      dispatch(profileRequestSucceed(user));
    } catch (error) {
      dispatch(profileRequestFailed(error));
    }
  };
};
