import { SignInActionTypes } from './action-types';
import { SignInActionEnum } from './action.enum';
import { SignInStateInterface } from './state.interface';

const INITIAL_STATE: SignInStateInterface = {
  user: null,
  error: null,
  isRequesting: false,
};

export const signInReducer = (
  state: SignInStateInterface = INITIAL_STATE,
  action: SignInActionTypes,
): SignInStateInterface => {
  switch (action.type) {
    case SignInActionEnum.SIGN_IN_REQUEST_STARTED:
      return {
        ...state,
        isRequesting: true,
      };

    case SignInActionEnum.SIGN_IN_REQUEST_SUCCEED:
      return {
        ...state,
        user: action.payload.user,
        error: null,
        isRequesting: false,
      };

    case SignInActionEnum.SIGN_IN_REQUEST_FAILED:
      return {
        ...state,
        user: null,
        error: action.payload.error,
        isRequesting: false,
      };

    default:
      return state;
  }
};
