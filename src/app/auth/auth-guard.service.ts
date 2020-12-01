import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app.reducers';
import {map, take} from 'rxjs/operators';
import * as fromAuth from './store/auth.reducers';
import {Injectable} from '@angular/core';


@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private store: Store<AppState>) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select('auth').pipe(
      take(1), map((authState: fromAuth.State) => {
        return authState.authenticated;
      }));
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select('auth').pipe(
      take(1), map((authState: fromAuth.State) => {
        return authState.authenticated;
      }));
  }

}
