import axios, {AxiosInstance} from 'axios';
import Globals from '../../Settings';
import tokenProvider from 'axios-token-interceptor';
import Storage from './Storage';

export default class Service {
  service: AxiosInstance;
  constructor() {
    this.service = axios.create({});
    /*this.service.interceptors.request.use(
      tokenProvider({
        getToken: () => localStorage.get('access_token'),
      }),
    );*/
    this.service.interceptors.request.use(request => {
      if (__DEV__) {
        console.info('HttpRequest', request.data);
      }
      return request;
    });
    this.service.interceptors.response.use(
      response => {
        if (__DEV__) {
          //console.info(JSON.stringify(response.data));
        }
        return response;
      },
      function(error) {
        // Do something with response error
        console.log(JSON.stringify(error.response.data.error));
        if (error.response.status === 401) {
          console.log('unauthorized, logging out ...');
        }
        return Promise.reject(error.response);
      },
    );
  }

  async get(path, callback) {
    const token = await Storage.getAccessToken();
    return this.service
      .request({
        method: 'GET',
        url: path,
        responseType: 'json',
        headers: {
          'X-CLIENTID': Globals['X-CLIENTID'],
          'X-CLIENTSECRET': Globals['X-CLIENTSECRET'],
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => callback(response.status, response.data));
  }

  patch(path, payload, callback) {
    return this.service.request({
      method: 'PATCH',
      url: path,
      responseType: 'json',
      data: payload,
    });
  }

  async post(path, payload) {
    return this.service.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload,
      headers: {
        'X-CLIENTID': Globals['X-CLIENTID'],
        'X-CLIENTSECRET': Globals['X-CLIENTSECRET'],
      },
    });
  }
}
