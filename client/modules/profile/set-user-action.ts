import { ProfileSetUserActionType } from '../../modules/profile/action-types';
import { ProfileActionTypeEnum } from '../../modules/profile/action.enum';
import { UserInterface } from '../user/interface';

export const profileSetUserAction = (user: UserInterface): ProfileSetUserActionType => ({
  type: ProfileActionTypeEnum.PROFILE_SET_USER,
  payload: { user },
});
