import { Dispatch } from 'redux';

import { SignInRequestInterface } from './sign-in-request.interface';
import {
  SignInStartedActionType,
  SignInSucceedActionType,
  SignInFailedActionType,
} from './action-types';
import { SignInActionEnum } from './action.enum';
import { api } from './api';
import { UserInterface } from '../user/interface';
import { profileSetUserAction } from '../../modules/profile/set-user-action';

const signInStartedAction = (): SignInStartedActionType => ({
  type: SignInActionEnum.SIGN_IN_REQUEST_STARTED,
});

const signInSucceedAction = (user: UserInterface): SignInSucceedActionType => ({
  type: SignInActionEnum.SIGN_IN_REQUEST_SUCCEED,
  payload: { user },
});

const signInFailedAction = (error: any): SignInFailedActionType => ({
  type: SignInActionEnum.SIGN_IN_REQUEST_FAILED,
  payload: { error },
});

export const signInAction = (params: SignInRequestInterface) => {
  return (dispatch: Dispatch) => {
    dispatch(signInStartedAction());

    return api
      .signIn(params)
      .then(user => {
        dispatch(profileSetUserAction(user));
        dispatch(signInSucceedAction(user));
      })
      .catch(error => {
        dispatch(signInFailedAction(error));
      });
  };
};
