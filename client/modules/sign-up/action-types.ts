import { SignUpActionEnum } from './action.enum';
import { UserInterface } from '../user/interface';

export type SignUpStartedActionType = {
  type: SignUpActionEnum.SIGN_UP_REQUEST_STARTED;
}

export type SignUpSucceedActionType = {
  type: SignUpActionEnum.SIGN_UP_REQUEST_SUCCEED;
  payload: {
    user: UserInterface;
  }
}

export type SignUpFailedActionType = {
  type: SignUpActionEnum.SIGN_UP_REQUEST_FAILED;
  payload: {
    error: any;
  };
}

export type SignUpActionTypes = SignUpStartedActionType | SignUpSucceedActionType | SignUpFailedActionType;
