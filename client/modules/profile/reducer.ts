import { ProfileStateInterface } from '../../modules/profile/state.interface';
import { ProfileActionTypeEnum } from '../../modules/profile/action.enum';
import { ProfileActionTypes } from '../../modules/profile/action-types';

const INITIAL_STATE: ProfileStateInterface = {
  user: null,
  error: null,
  isRequesting: false,
  isInitiallyRequested: false,
  token: undefined,
};

export const profileReducer = (
  state: ProfileStateInterface = INITIAL_STATE,
  action: ProfileActionTypes,
): ProfileStateInterface => {
  switch (action.type) {
    case ProfileActionTypeEnum.PROFILE_REQUEST_STARTED:
      return {
        ...state,
        isRequesting: true,
      };

    case ProfileActionTypeEnum.PROFILE_REQUEST_SUCCEED:
      return {
        ...state,
        user: action.payload.user,
        error: null,
        isRequesting: false,
        isInitiallyRequested: true,
      };

    case ProfileActionTypeEnum.PROFILE_REQUEST_FAILED:
      return {
        ...state,
        user: null,
        error: action.payload,
        isRequesting: false,
        isInitiallyRequested: true,
      };

    case ProfileActionTypeEnum.PROFILE_SET_USER:
      return {
        ...state,
        user: action.payload.user,
      };

    case ProfileActionTypeEnum.PROFILE_CLEAR_USER:
      return {
        ...state,
        user: null,
      };

    case ProfileActionTypeEnum.PROFILE_SET_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };

    default:
      return state;
  }
};
