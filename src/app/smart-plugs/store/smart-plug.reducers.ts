import {SmartPlug} from '../../shared/SmartPlug.model';
import {AppState} from '../../store/app.reducers';
import {ADD_SMART_PLUG, DELETE_SMART_PLUG, SET_SMART_PLUGS, SmartPlugActions, UPDATE_SMART_PLUG} from './smart-plug.actions';

export interface SmartPlugFeatureState extends AppState {
  smartPlugsState: State
}

export interface State {
  smartPlugs: SmartPlug[]
}

const initialState: State = {
  smartPlugs: [
    new SmartPlug(1, 'heater', false, 'adresa', null)
  ]
};

export function smartPlugReducer(state = initialState, action: SmartPlugActions) {
  switch (action.type) {
    case SET_SMART_PLUGS:
      return {
        ...state,
        smartPlugs: [...action.payload]
      };
    case ADD_SMART_PLUG:
    case UPDATE_SMART_PLUG:
    case DELETE_SMART_PLUG:
    default:
      return state;
  }
}
