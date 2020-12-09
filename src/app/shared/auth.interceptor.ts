import {Injectable} from '@angular/core';
import {AppState} from '../store/app.reducers';
import {Store} from '@ngrx/store';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {switchMap, take} from 'rxjs/operators';
import * as fromAuth from '../auth/store/auth.reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store<AppState>) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!');
    return this.store.select('auth').pipe(take(1), switchMap((authState: fromAuth.State) => {   // fromAuth state
        let jwtToken = 'Bearer '.concat(authState.token);
        if (authState.authenticated) {
          const copiedReq = req.clone({headers: req.headers.set('Authorization', jwtToken).append('Content-Type', 'application/json')});
          console.log(copiedReq);
          return next.handle(copiedReq);
        } else {
          return next.handle(req);
        }
      })
    );
  }

}
