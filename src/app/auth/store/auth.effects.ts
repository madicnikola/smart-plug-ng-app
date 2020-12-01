import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {LOGOUT, SET_TOKEN, SIGNIN, TRY_SIGNIN, TRY_SIGNUP, TrySignin, TrySignup} from './auth.actions';
import {map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {strict} from 'assert';

@Injectable()
export class AuthEffects {

  @Effect()
  authSignin = this.actions$.pipe(ofType(TRY_SIGNIN),
    map(
      (action: TrySignin) => {
        return action.payload;
      }),
    switchMap((authData: { username: string, password: string }) => {
      // const req = new HttpRequest('POST', 'http://localhost:8080/smart-plug-spring/authenticate', authData);
      return this.httpClient.post<{ token: string }>('http://localhost:8080/smart-plug-spring/authenticate', authData);
    }), mergeMap(token => {
      this.router.navigate(['/']);
      return [
        {type: SIGNIN},
        {
          type: SET_TOKEN,
          payload: token.token
        }
      ];
    })
  );
  @Effect({dispatch: false})
  authSignup = this.actions$.pipe(ofType(TRY_SIGNUP),
    map(
      (action: TrySignup) => {
        return action.payload;
      }),
    switchMap((authData: { username: string, password: string }) => {
      // const req = new HttpRequest('POST', 'http://localhost:8080/smart-plug-spring/register', authData);
      return this.httpClient.post<{ username: string, password: string }>('http://localhost:8080/smart-plug-spring/register', authData);
    }), mergeMap(userDetails => {
      this.router.navigate(['/signin']);
      console.log(userDetails.username);
      return [userDetails.username];
    }));

  @Effect({dispatch: false})
  authLogout = this.actions$.pipe(ofType(LOGOUT), tap(() => {
    this.router.navigate(['/']);
  }));

  constructor(private actions$: Actions,
              private httpClient: HttpClient,
              private router: Router) {
  }
}
