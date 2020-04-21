import { ProfileStateInterface } from '../../modules/profile/state.interface';
import { SignUpStateInterface } from '../../modules/sign-up/state.interface';

export interface AppStateInterface {
  profile: ProfileStateInterface;
  signUp: SignUpStateInterface;
}
