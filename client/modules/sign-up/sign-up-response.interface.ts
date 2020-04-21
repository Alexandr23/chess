import { UserInterface } from '../user/interface';

export interface SignUpResponseInterface {
  data: {
    user: UserInterface;
  };
  error?: {
    message: string;
  };
}
