import { ProfileSetTokenActionType } from "../action-types";
import { ProfileActionTypeEnum } from "../action.enum";

export const setToken = (token: string): ProfileSetTokenActionType => ({
  type: ProfileActionTypeEnum.PROFILE_SET_TOKEN,
  payload: {
    token,
  },
});
