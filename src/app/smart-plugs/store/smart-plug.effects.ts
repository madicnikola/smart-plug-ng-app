import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {CHANGE_POWER_STATE, ChangePowerState, FETCH_SMART_PLUGS, SET_SMART_PLUG, SET_SMART_PLUGS} from './smart-plug.actions';
import {map, switchMap} from 'rxjs/operators';
import {SmartPlug} from '../../shared/SmartPlug.model';

@Injectable()
export class SmartPlugEffects {

  @Effect()
  smartPlugsFetch = this.actions$.pipe(ofType(FETCH_SMART_PLUGS),
    switchMap(() => {
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

  @Effect()
  smartPlugPowerChange = this.actions$.pipe(ofType(CHANGE_POWER_STATE),
    switchMap((action: ChangePowerState) => {
      const id = action.payload.id;
      const powerState = action.payload.powerState;
      return this.http.put<SmartPlug>('http://localhost:8080/smart-plug-spring/smart-plugs/'.concat(id.toString(), '/switch'), powerState, {
        observe: 'body',
        responseType: 'json'
      });
    }),
    map(smartPlug => {
      console.log(smartPlug);
      return {
        type: SET_SMART_PLUG,
        payload: smartPlug,
      };
    })
  );

  constructor(private actions$: Actions,
              private http: HttpClient) {

  }

}
