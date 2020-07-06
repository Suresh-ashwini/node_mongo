export class AppResponse {
  private SUCCESS_OK = 200;
  private SUCCESS_CREATED = 201;
  private SUCCESS_NOCONTENT = 204;
  private CLIENTERROR_BADREQUEST = 400;
  private CLIENTERROR_UNAUTHORIZED = 401;
  private CLIENTERROR_FORBIDDEN = 403;
  private CLIENTERROR_NOTFOUND = 404;
  private CLIENTERROR_CONFLICT = 409;
  private SERVERERROR_INTERNALSERVERERROR = 500;

  public successOk = (res, successdata) => {
    res.status(this.SUCCESS_OK).send({
      status: "SUCCESS",
      data: successdata,
    });
  };

  public successOnCreate = (res, created) => {
    res.status(this.SUCCESS_CREATED).send({
      status: "SUCCESS",
      data: created,
    });
  };

  public successNoContent = (res) => {
    res.status(this.SUCCESS_NOCONTENT).send({
      status: "SUCCESS",
    });
  };

  public errorOnServer = (res, err) => {
    res.status(this.SERVERERROR_INTERNALSERVERERROR).send({
      status: "FAILED",
      message: err.message,
    });
  };

  public errorUserNotFound = (res, msg, err) => {
    res.status(this.CLIENTERROR_NOTFOUND).send({
      status: "FAILED",
      body: {
        message: msg,
        error: err,
      },
    });
  };
}
