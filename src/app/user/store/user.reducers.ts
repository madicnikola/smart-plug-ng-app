import {PASSWORD_CHANGE_SUCCESS, SET_MESSAGE, SetMessage, UserActions} from './user.actions';
import {AppState} from '../../store/app.reducers';


export interface UserFeatureState extends AppState {
  userState: State
}


export interface State {
  changeSuccess: boolean;
  responseMessage: string;
}

const initialState: State = {
  changeSuccess: false,
  responseMessage: '',
};


export function userReducer(state = initialState, action: UserActions) {
  switch (action.type) {
    case PASSWORD_CHANGE_SUCCESS:
      return {
        ...state,
        changeSuccess: true,
      };
    case SET_MESSAGE:
      return {
        ...state,
        responseMessage: (<SetMessage> action).payload,
      };
    default:
      return state;
  }

}
