import {SmartPlug} from '../../shared/SmartPlug.model';
import {AppState} from '../../store/app.reducers';
import {
  ADD_SMART_PLUG,
  DELETE_SMART_PLUG,
  SET_SMART_PLUGS,
  SET_SMART_PLUG,
  UPDATE_SMART_PLUG,
  SmartPlugActions,
} from './smart-plug.actions';

export interface SmartPlugFeatureState extends AppState {
  smartPlugsState: State
}

export interface State {
  smartPlugs: SmartPlug[]
}

const initialState: State = {
  smartPlugs: []
};

export function smartPlugReducer(state = initialState, action: SmartPlugActions) {
  switch (action.type) {
    case SET_SMART_PLUGS:
      return {
        ...state,
        smartPlugs: [...action.payload]
      };
    case SET_SMART_PLUG:
      const index = state.smartPlugs.findIndex(value => {
        return value.id === action.payload.id;
      });
      console.log(index);
      const smartPlug = state.smartPlugs[index];
      const updatedSmartPlug = {
        ...smartPlug,
        ...action.payload
      };
      const smartPlugs = [...state.smartPlugs];
      smartPlugs[index] = updatedSmartPlug;
      return {
        ...state,
        smartPlugs: smartPlugs
      };
    case ADD_SMART_PLUG:
    case UPDATE_SMART_PLUG:
    case DELETE_SMART_PLUG:
    default:
      return state;
  }
}
