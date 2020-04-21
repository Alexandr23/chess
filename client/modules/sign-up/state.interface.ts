import { UserInterface } from "../user/interface";

export interface SignUpStateInterface {
  user: UserInterface | null;
  error: {
    message: string;
  } | null;
  isRequesting: boolean;
}