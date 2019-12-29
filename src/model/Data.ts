export default interface Data<T> {
  isSuccessful: boolean;
  responseCode: number;
  data: T;
}
