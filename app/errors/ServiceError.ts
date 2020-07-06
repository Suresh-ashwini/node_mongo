export default class ServiceError extends Error {
  public code: string;

  constructor(message: string, code: string) {
    super(message);
    this.name = "SERVICE_ERROR";
    this.code = code;
  }
}
