import { SignUpActionTypes } from './action-types';
import { SignUpActionEnum } from './action.enum';
import { SignUpStateInterface } from './state.interface';

const INITIAL_STATE: SignUpStateInterface = {
  user: null,
  error: null,
  isRequesting: false,
};

export const signUpReducer = (state: SignUpStateInterface = INITIAL_STATE, action: SignUpActionTypes): SignUpStateInterface => {
  switch (action.type) {
    case SignUpActionEnum.SIGN_UP_REQUEST_STARTED:
      return {
        ...state,
        isRequesting: true,
      };

    case SignUpActionEnum.SIGN_UP_REQUEST_SUCCEED:
      return {
        ...state,
        user: action.payload.user,
        error: null,
        isRequesting: false,
      };

    case SignUpActionEnum.SIGN_UP_REQUEST_FAILED:
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