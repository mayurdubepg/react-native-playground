import AppState from '../state/AppState';
import {iDataState} from '../state/IState';
import AuthResponse from '../../model/AuthResponse';
import IAction from '../action/IAction';
import AppAction from '../action/AppAction';
import Data from '../../model/Data';

export default class AppReducer {
  private static readonly _initialState: AppState = {
    state: iDataState.initial,
    isUserLoggedIn: false,
    refreshToken: null,
    accessToken: null,
    user: null,
  };

  public static reducer(
    state: AppState = AppReducer._initialState,
    action: IAction<any, AppState>,
  ): AppState {
    switch (action.type) {
      case AppAction.LOGIN_USER:
        return {
          ...state,
          state: iDataState.loading,
        };
      case AppAction.USER_LOGGED_IN:
        return {
          isUserLoggedIn: action.data.refreshToken !== null,
          refreshToken: action.data.refreshToken,
          accessToken: action.data.accessToken,
          user: action.data.user,
          state: iDataState.loaded,
        };
      case AppAction.LOGIN_FAILED:
        return {
          ...state,
          state: iDataState.error,
        };
      default:
        return state;
    }
  }
}
