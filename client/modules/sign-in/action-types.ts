import { SignInActionEnum } from "./action.enum";
import { UserInterface } from "../user/interface";

export type SignInStartedActionType = {
  type: SignInActionEnum.SIGN_IN_REQUEST_STARTED;
};

export type SignInSucceedActionType = {
  type: SignInActionEnum.SIGN_IN_REQUEST_SUCCEED;
  payload: {
    user: UserInterface;
  };
};

export type SignInFailedActionType = {
  type: SignInActionEnum.SIGN_IN_REQUEST_FAILED;
  payload: {
    error: any;
  };
};

export type SignInActionTypes =
  | SignInStartedActionType
  | SignInSucceedActionType
  | SignInFailedActionType;
