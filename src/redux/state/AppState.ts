import IState from './IState';
import User from '../../model/User';

export default interface AppState extends IState {
  user?: User;
}
