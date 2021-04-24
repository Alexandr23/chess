import { ProfileRequestStartedActionType } from '../action-types';
import { ProfileActionTypeEnum } from '../action.enum';

export const profileRequestStarted = (): ProfileRequestStartedActionType => ({
  type: ProfileActionTypeEnum.PROFILE_REQUEST_STARTED,
});
