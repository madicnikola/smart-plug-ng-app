import {Action} from '@ngrx/store';
import {SmartPlug} from '../../shared/SmartPlug.model';

export const SET_SMART_PLUGS = 'SET_SMART_PLUGS';
export const SET_SMART_PLUG = 'SET_SMART_PLUG';
export const ADD_SMART_PLUG = 'ADD_SMART_PLUG';
export const UPDATE_SMART_PLUG = 'UPDATE_SMART_PLUG';
export const DELETE_SMART_PLUG = 'DELETE_SMART_PLUG';
export const STORE_SMART_PLUGS = 'STORE_SMART_PLUGS';
export const FETCH_SMART_PLUGS = 'FETCH_SMART_PLUGS';
export const CHANGE_POWER_STATE = 'CHANGE_POWER_STATE';

export class SetSmartPlugs implements Action {
  readonly type = SET_SMART_PLUGS;

  constructor(public payload: SmartPlug[]) {
  }
}

export class SetSmartPlug implements Action {
  readonly type = SET_SMART_PLUG;

  constructor(public payload: SmartPlug) {
  }
}

export class AddSmartPlug implements Action {
  readonly type = ADD_SMART_PLUG;

  constructor(public payload: SmartPlug) {
  }
}

export class UpdateSmartPlug implements Action {
  readonly type = UPDATE_SMART_PLUG;

  constructor(public payload: { id: bigint, smartPlug: SmartPlug }) {
  }
}

export class DeleteSmartPlug implements Action {
  readonly type = DELETE_SMART_PLUG;

  constructor(public payload: bigint) {
  }
}

export class StoreSmartPlugs implements Action {
  readonly type = STORE_SMART_PLUGS;
}

export class FetchSmartPlugs implements Action {
  readonly type = FETCH_SMART_PLUGS;
}

export class ChangePowerState implements Action {
  readonly type = CHANGE_POWER_STATE;

  constructor(public payload: { id: bigint, powerState: boolean }) {
  }
}

export type SmartPlugActions =
  AddSmartPlug |
  SetSmartPlugs |
  SetSmartPlug |
  UpdateSmartPlug |
  DeleteSmartPlug |
  FetchSmartPlugs |
  StoreSmartPlugs |
  ChangePowerState
  ;
