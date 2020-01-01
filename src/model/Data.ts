export default class Data<T> {
  isOk: boolean;
  responseCode: number;
  data: T;

  constructor(isOk: boolean, responseCode: number, data: T) {
    this.data = data;
    this.isOk = isOk;
    this.data = data;
  }
}
