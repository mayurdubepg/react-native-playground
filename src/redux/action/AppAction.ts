import IAction from './IAction';
import Login from '../../services/Login';

export default class AppAction {
  public static readonly LOGIN_USER: string = 'AppAction.LOGIN_USER';
  public static readonly USER_LOGGED_IN: string = 'AppAction.USER_LOGGED_IN';
  public static readonly LOGIN_FAILED: string = 'AppAction.LOGIN_FAILED';

  public static login = (username: string, password: string): any => {
    return async (dispatch: any) => {
      try {
        console.log('AppAction.login');
        let data = await Login.login(username, password);
        console.log('Login success');
        dispatch({
          type: AppAction.USER_LOGGED_IN,
          data: data,
        });
      } catch (_) {
        console.log('login failed');
        dispatch({
          type: AppAction.LOGIN_FAILED,
          errorMessage: 'Cannot load deals',
        });
      }
    };
  };
}
