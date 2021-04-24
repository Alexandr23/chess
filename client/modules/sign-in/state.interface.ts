import { UserInterface } from "../user/interface";

export interface SignInStateInterface {
  user: UserInterface | null;
  error: {
    message: string;
  } | null;
  isRequesting: boolean;
}
