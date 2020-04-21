import { Dispatch } from 'redux';

import { LogoutActionEnum } from '../../modules/logout/action.enum';
import { LogoutActionType } from '../../modules/logout/action-types';
import { profileClearUserAction } from '../../modules/profile/clear-user-action';

const logoutBaseAction = (): LogoutActionType => ({
  type: LogoutActionEnum.LOGOUT,
});

export const logoutAction = () => {
  return (dispatch: Dispatch) => {
    dispatch(logoutBaseAction());
    dispatch(profileClearUserAction());
  };
};