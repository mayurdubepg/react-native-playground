import AppState from '../state/AppState';
import {iDataState} from '../state/IState';
import User from '../../model/User';
import IAction from '../action/IAction';
import AppAction from '../action/AppAction';

export default class AppReducer {
  private static readonly _initialState: AppState = {
    user: null,
    errorMessage: '',
    state: iDataState.initial,
  };

  public static reducer(
    state: AppState = AppReducer._initialState,
    action: IAction<any, User>,
  ): AppState {
    switch (action.type) {
      case AppAction.LOGIN_USER:
        return {
          ...state,
          state: iDataState.loading,
          errorMessage: '',
        };
      case AppAction.USER_LOGGED_IN:
        return {
          ...state,
          user: action.data !== null ? action.data! : [],
          state: iDataState.loaded,
          errorMessage: '',
        };
      case AppAction.LOGIN_FAILED:
        return {
          ...state,
          state: iDataState.error,
          errorMessage: 'Login failed',
        };
      default:
        return state;
    }
  }
}
