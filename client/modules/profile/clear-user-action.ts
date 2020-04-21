import { ProfileCLearUserActionType } from '../../modules/profile/action-types';
import { ProfileActionTypeEnum } from '../../modules/profile/action.enum';

export const profileClearUserAction = (): ProfileCLearUserActionType => ({
  type: ProfileActionTypeEnum.PROFILE_CLEAR_USER,
});
