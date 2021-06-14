import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {PASSWORD_CHANGE_SUCCESS, SET_MESSAGE, TRY_PASSWORD_CHANGE, TryPasswordChange} from './user.actions';
import {catchError, mergeMap, share} from 'rxjs/operators';
import {MatDialog} from "@angular/material/dialog";
import {AppDialogComponent} from "../../shared/dialog/app-dialog.component";
import {throwError} from "rxjs";

@Injectable()
export class UserEffects {

  @Effect()
  userPasswordChange$ = this.actions$.pipe(ofType(TRY_PASSWORD_CHANGE),
    mergeMap((action: TryPasswordChange) => {
      const userData: { currentPassword: string; newPassword: string } = action.payload;
      console.log(userData);
      return this.httpClient.put<{ message: string }>('http://localhost:8080/smart-plug-spring/user/password-change', userData, {
        observe: 'body',
      }).pipe(catchError((err) => {
        this.matDialog.open(AppDialogComponent, {
          data: {
            title: 'Error', message:
            err.error.message
          }
        });
        return throwError(err);
      }));
    }),
    mergeMap((message: { message: string }) => {
      console.log(message.message);
      this.matDialog.open(AppDialogComponent, {
        data: {
          title: 'Success', message:
          message.message
        }
      });
      return [{
        type: SET_MESSAGE,
        payload: message.message
      }, {type: PASSWORD_CHANGE_SUCCESS}];
    }), share()
  );

  constructor(private actions$: Actions,
              private httpClient: HttpClient,
              private matDialog: MatDialog) {
  }
}
