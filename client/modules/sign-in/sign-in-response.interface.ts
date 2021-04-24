import { UserInterface } from "../user/interface";

export interface SignInResponseInterface {
  data: {
    user: UserInterface;
  };
  error?: {
    message: string;
  };
}
