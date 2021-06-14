import {Action} from '@ngrx/store';

export const TRY_PASSWORD_CHANGE = 'TRY_PASSWORD_CHANGE';
export const PASSWORD_CHANGE_SUCCESS = 'PASSWORD_CHANGE_SUCCESS';
export const SET_MESSAGE = 'SET_MESSAGE';


export class TryPasswordChange implements Action {
  readonly type: string = TRY_PASSWORD_CHANGE;

  constructor(public payload: { currentPassword: string, newPassword: string }) {
  }

}

export class PasswordChangeSuccess implements Action {
  readonly type: string = PASSWORD_CHANGE_SUCCESS;
}

export class SetMessage implements Action {
  readonly type: string = SET_MESSAGE;

  constructor(public payload: string) {
  }
}


export type UserActions = TryPasswordChange | PasswordChangeSuccess | SetMessage;
