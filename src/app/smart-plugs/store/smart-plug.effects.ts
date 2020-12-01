import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {SmartPlugFeatureState} from './smart-plug.reducers';
import {FETCH_SMART_PLUGS, FetchSmartPlugs, SET_SMART_PLUGS} from './smart-plug.actions';
import {map, switchMap} from 'rxjs/operators';
import {SmartPlug} from '../../shared/SmartPlug.model';

@Injectable()
export class SmartPlugEffects {

  @Effect()
  smartPlugsFetch = this.actions$.pipe(ofType(FETCH_SMART_PLUGS),
    switchMap((action: FetchSmartPlugs) => {
      return this.http.get<SmartPlug[]>('http://localhost:8080/smart-plug-spring/smart-plugs/get-my-smart-plugs', {
        observe: 'body',
        responseType: 'json'
      });
    }),
    map((smartPlugs: SmartPlug[]) => {
      console.log(smartPlugs);
      return {
        type: SET_SMART_PLUGS,
        payload: smartPlugs,
      };
    }));

  constructor(private actions$: Actions,
              private http: HttpClient,
              private store: Store<SmartPlugFeatureState>) {

  }

}
