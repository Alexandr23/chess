import { combineReducers } from 'redux';

import { profileReducer } from '../../modules/profile/reducer';
import { signUpReducer } from '../../modules/sign-up/reducer';

export const appReducer = combineReducers({
  profile: profileReducer,
  signUp: signUpReducer,
});
