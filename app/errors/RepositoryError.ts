export default class RepositoryError extends Error {
  public code: string;

  constructor(message: string, code: string) {
    super(message);
    this.name = "REPOSITORY_ERROR";
    this.code = code;
  }
}
