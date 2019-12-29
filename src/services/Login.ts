import User from '../model/User';
export const API_URL = 'https://api.propertyguru.com';
export const LOGIN_EXISTS = 1;
export const LOGIN_INCORRECT = 2;
export const LOGIN_ERROR = 3;
export const LOGIN_SUCCESS = 4;

class Login {
  async fetch(url = '', options = {headers: {}} as any) {
    console.log('url=' + url);
    console.log('body=' + options.body);
    return fetch(`${API_URL}/${url}`, {
      ...options,
      mode: 'cors',
      credentials: 'include',
      cache: 'no-cache',
      referrerPolicy: 'origin',
      headers: {
        ...(options.headers || {}),
      },
    });
  }

  async login(username: string, password: string): User {
    console.log('Login request');
    const response = await this.fetch('v1/jwt/login?region=sg', {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: `_username=${encodeURIComponent(
        username,
      )}&_password=${encodeURIComponent(password)}`,
    });
    try {
      if (!response.ok) {
        throw new Error('cannot get data');
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
}

export default new Login();
