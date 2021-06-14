import {SmartPlug} from '../../shared/SmartPlug.model';
import {AppState} from '../../store/app.reducers';
import {
  SmartPlugActions,
  ADD_NEW_SMART_PLUG_SUCCESS,
  DELETE_SMART_PLUG,
  SET_SMART_PLUG,
  SET_SMART_PLUGS,
  UPDATE_SMART_PLUG,
} from './smart-plug.actions';

export interface SmartPlugFeatureState extends AppState {
  smartPlugsState: State
}

export interface State {
  smartPlugs: SmartPlug[],
  addedNew: boolean,
}

const initialState: State = {
  smartPlugs: [],
  addedNew: false
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
    case ADD_NEW_SMART_PLUG_SUCCESS:
      return {
        ...state,
        addedNew: true
      }
    case UPDATE_SMART_PLUG:
    case DELETE_SMART_PLUG:
    default:
      return state;
  }
}
