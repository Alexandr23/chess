import { ProfileRequestFailedActionType } from '../action-types';
import { ProfileActionTypeEnum } from '../action.enum';

export const profileRequestFailed = (
  error: any,
): ProfileRequestFailedActionType => ({
  type: ProfileActionTypeEnum.PROFILE_REQUEST_FAILED,
  payload: {
    error,
  },
});
