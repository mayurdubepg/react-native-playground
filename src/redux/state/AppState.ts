import IState from './IState';
import User from '../../model/AuthResponse';

export default class AppState extends IState {
  isUserLoggedIn: boolean;
  refreshToken: string | null;
  accessToken: string | null;
  user: User | null;
}
