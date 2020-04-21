import { UserInterface } from "../../modules/user/interface";

export interface ProfileStateInterface {
  user: UserInterface | null;
  error: any;
  isRequesting: boolean;
}
