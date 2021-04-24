import { ProfileRequestSucceedActionType } from '../action-types';
import { ProfileActionTypeEnum } from '../action.enum';
import { UserInterface } from '../../user/interface';

export const profileRequestSucceed = (
  user: UserInterface,
): ProfileRequestSucceedActionType => ({
  type: ProfileActionTypeEnum.PROFILE_REQUEST_SUCCEED,
  payload: {
    user,
  },
});
