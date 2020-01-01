import User from '../model/AuthResponse';
import Data from '../model/Data';
import BaseService from './BaseService';
export const API_URL = 'https://api.propertyguru.com';
export const LOGIN_EXISTS = 1;
export const LOGIN_INCORRECT = 2;
export const LOGIN_ERROR = 3;
export const LOGIN_SUCCESS = 4;

class AuthenticationService extends BaseService {
  constructor() {
    super();
  }
  public async login(username: string, password: string): Data<User> {
    try {
      console.log('login');
      const response = await this.post(
        'https://auth.propertyguru.com/v1/jwt/login',
        `username=${encodeURIComponent(username)}&password=${encodeURIComponent(
          password,
        )}&scope=singapore&grant_type=password`,
      );
      console.log('Status' + response.status);
      if (response.status != 200) {
        new Data<User>(false, response.status, response.data);
      }
      return new Data<User>(true, response.status, response.data);
    } catch (error) {
      return new Data<User>(false, error.status, error.data);
    }
  }

  public async refreshToken(token: string): Data<User> {
    try {
      console.log('refreshToken');
      const response = await this.post(
        'https://auth.propertyguru.com/v1/jwt/refresh-token',
        `refresh_token=${encodeURIComponent(
          token,
        )}&grant_type=refresh_token&scope=singapore`,
      );
      if (response.status != 200) {
        new Data<User>(false, response.status, response.data);
      }
      return new Data<User>(true, response.status, response.data);
    } catch (error) {
      return new Data<User>(false, error.status, error.data);
    }
  }
}
export default new AuthenticationService();
