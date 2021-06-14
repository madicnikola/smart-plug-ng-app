import * as fromAuth from '../auth/store/auth.reducers';
import * as fromUser from '../user/store/user.reducers';

import {authReducer} from '../auth/store/auth.reducers';
import {ActionReducerMap} from '@ngrx/store';
import {userReducer} from '../user/store/user.reducers';


export interface AppState {
  auth: fromAuth.State,
  userState: fromUser.State,
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  userState: userReducer
};
