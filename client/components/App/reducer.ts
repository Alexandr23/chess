import { combineReducers } from 'redux';

import { profileReducer } from '../../modules/profile/reducer';
import { signUpReducer } from '../../modules/sign-up/reducer';
import { signInReducer } from '../../modules/sign-in/reducer';

export const appReducer = combineReducers({
  profile: profileReducer,
  signUp: signUpReducer,
  signIn: signInReducer,
});
