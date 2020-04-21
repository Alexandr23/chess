import { Dispatch } from 'redux';

import { SignUpRequestInterface } from './sign-up-request.interface';
import { SignUpStartedActionType, SignUpSucceedActionType, SignUpFailedActionType } from './action-types';
import { SignUpActionEnum } from './action.enum';
import { api } from './api';
import { UserInterface } from '../user/interface';
import { profileSetUserAction } from '../../modules/profile/set-user-action';

const signUpStartedAction = (): SignUpStartedActionType => ({
  type: SignUpActionEnum.SIGN_UP_REQUEST_STARTED,
});

const signUpSucceedAction = (user: UserInterface): SignUpSucceedActionType => ({
  type: SignUpActionEnum.SIGN_UP_REQUEST_SUCCEED,
  payload: { user },
});

const signUpFailedAction = (error: any): SignUpFailedActionType => ({
  type: SignUpActionEnum.SIGN_UP_REQUEST_FAILED,
  payload: { error },
});

export const signUpAction = (params: SignUpRequestInterface) => {
  return (dispatch: Dispatch) => {
    dispatch(signUpStartedAction());

    return api.signUp(params)
      .then(user => {
        dispatch(profileSetUserAction(user));
        dispatch(signUpSucceedAction(user));
      })
      .catch(error => {
        dispatch(signUpFailedAction(error));
      });
  };
};