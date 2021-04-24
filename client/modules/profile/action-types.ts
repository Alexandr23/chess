import { ProfileActionTypeEnum } from "../../modules/profile/action.enum";
import { UserInterface } from "../user/interface";

export type ProfileRequestStartedActionType = {
  type: ProfileActionTypeEnum.PROFILE_REQUEST_STARTED;
};

export type ProfileRequestSucceedActionType = {
  type: ProfileActionTypeEnum.PROFILE_REQUEST_SUCCEED;
  payload: {
    user: UserInterface;
  };
};

export type ProfileRequestFailedActionType = {
  type: ProfileActionTypeEnum.PROFILE_REQUEST_FAILED;
  payload: {
    error: any;
  };
};

export type ProfileRequestActionType = () => void;

export type ProfileSetUserActionType = {
  type: ProfileActionTypeEnum.PROFILE_SET_USER;
  payload: {
    user: UserInterface;
  };
};

export type ProfileCLearUserActionType = {
  type: ProfileActionTypeEnum.PROFILE_CLEAR_USER;
};

export type ProfileSetTokenActionType = {
  type: ProfileActionTypeEnum.PROFILE_SET_TOKEN;
  payload: {
    token: string;
  };
};

export type ProfileActionTypes =
  | ProfileRequestStartedActionType
  | ProfileRequestSucceedActionType
  | ProfileRequestFailedActionType
  | ProfileSetUserActionType
  | ProfileCLearUserActionType
  | ProfileSetTokenActionType;
