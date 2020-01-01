import IAction from './IAction';
import AuthenticationService from '../../services/AuthenticationService';
import {AsyncStorage} from 'react-native';
import deviceStorage from '../../services/Storage';

export default class AppAction {
  public static readonly LOGIN_USER: string = 'AppAction.LOGIN_USER';
  public static readonly USER_LOGGED_IN: string = 'AppAction.USER_LOGGED_IN';
  public static readonly LOGIN_FAILED: string = 'AppAction.LOGIN_FAILED';

  public static login = (username: string, password: string): any => {
    return async (dispatch: any) => {
      try {
        console.log('AppAction.login');
        dispatch({
          type: AppAction.LOGIN_USER,
          data: null,
        });
        const refreshToken = await deviceStorage.getRefreshToken();
        if (refreshToken !== null) {
          dispatch({
            type: AppAction.USER_LOGGED_IN,
            data: {
              refreshToken: refreshToken,
              accessToken: deviceStorage.getAccessToken(),
              user: deviceStorage.getUser(),
            },
          });
        } else {
          let data = await AuthenticationService.login(username, password);
          if (data.isOk) {
            deviceStorage.saveAccessToken(data.data.accessToken);
            deviceStorage.saveRefreshToken(data.data.refreshToken);
            deviceStorage.saveUser(data.data.user);
            dispatch({
              type: AppAction.USER_LOGGED_IN,
              data: data.data,
            });
          } else {
            dispatch({
              type: AppAction.LOGIN_FAILED,
              data: data.data,
            });
          }
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: AppAction.LOGIN_FAILED,
          errorMessage: 'Cannot login',
        });
      }
    };
  };
}
