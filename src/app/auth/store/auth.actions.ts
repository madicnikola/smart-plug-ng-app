import {Action} from '@ngrx/store';

export const TRY_SIGNUP = 'TRY_SIGNUP';
export const TRY_SIGNIN = 'TRY_SIGNIN';
export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';


export class TrySignup implements Action {
  readonly type: string = TRY_SIGNUP;

  constructor(public payload: { username: string, password: string }) {

  }

}

export class TrySignin implements Action {
  type: string = TRY_SIGNIN;

  constructor(public payload: { username: string, password: string }) {
  }

}

export class Signin implements Action {
  readonly type: string = SIGNIN;
}

export class Signup implements Action {
  readonly type: string = SIGNUP;
}

export class Logout implements Action {
  readonly type: string = LOGOUT;
}

export class SetToken implements Action {
  readonly type: string = SET_TOKEN;

  constructor(public payload: string) {
  }
}


export type AuthActions = TrySignup | TrySignin | Signin | Signup | Logout | SetToken;
