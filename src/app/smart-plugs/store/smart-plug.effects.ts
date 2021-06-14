import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {
  ADD_NEW_SMART_PLUG_SUCCESS, CHANGE_NAME,
  CHANGE_POWER_STATE, ChangeName,
  ChangePowerState,
  FETCH_SMART_PLUGS,
  SET_SMART_PLUG,
  SET_SMART_PLUGS,
  TRY_ADD_NEW_SMART_PLUG,
  TryAddNewSmartPlug, UPDATE_SMART_PLUG, UpdateSmartPlug
} from './smart-plug.actions';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {SmartPlug} from '../../shared/SmartPlug.model';
import {Router} from "@angular/router";
import {throwError} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {AppDialogComponent} from "../../shared/dialog/app-dialog.component";

@Injectable()
export class SmartPlugEffects {
  id: bigint;

  @Effect()
  smartPlugsFetch = this.actions$.pipe(ofType(FETCH_SMART_PLUGS),
    switchMap(() => {
      return this.http.get<SmartPlug[]>('http://localhost:8080/smart-plug-spring/smart-plugs/get-all-my-smart-plugs', {
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
      return this.http.put<string>('http://localhost:8080/smart-plug-spring/smart-plugs/'.concat(id.toString(), '/switch'), powerState, {
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
  @Effect()
  smartPlugUpdate = this.actions$.pipe(ofType(UPDATE_SMART_PLUG),
    switchMap((action: UpdateSmartPlug) => {
      const id = action.payload.id;
      const smartplug = action.payload.smartPlug;
      return this.http.put<SmartPlug>('http://localhost:8080/smart-plug-spring/smart-plugs/'.concat(id.toString()), smartplug,
        {
          observe: 'body',
          responseType: 'json'
        }).pipe(catchError((err) => {
        console.log('error caught');
        console.log(err.message);
        this.dialog.open(AppDialogComponent, {
          data: {title: "Error", message: err.error.message}
        });
        return throwError(err);
      }))
    }),
    map(smartPlug => {
      console.log(smartPlug);
      return {
        type: SET_SMART_PLUG,
        payload: smartPlug,
      };
    })
  );
  @Effect()
  smartPlugAssign = this.actions$.pipe(ofType(TRY_ADD_NEW_SMART_PLUG),
    mergeMap((action: TryAddNewSmartPlug) => {
      this.id = action.payload;
      return this.http.put<string>('http://localhost:8080/smart-plug-spring/smart-plugs/assign', this.id, {
        observe: 'body',
      }).pipe(catchError((err) => {
        console.log('error caught');
        console.log(err.message);
        this.dialog.open(AppDialogComponent, {
          data: {title: "Error", message: err.error.message}
        });
        return throwError(err);
      }));
    }),
    mergeMap(value => {
      this.router.navigate(['/smart-plugs/', this.id]);
      console.log(value);
      return [{
        type: FETCH_SMART_PLUGS
      }, {
        type: ADD_NEW_SMART_PLUG_SUCCESS
      }]
    })
  );

  constructor(private actions$: Actions,
              private http: HttpClient,
              private router: Router,
              public dialog: MatDialog) {

  }

}
