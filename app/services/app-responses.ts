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

  public successOk = (res, msg, successdata) => {
    res.status(this.SUCCESS_OK).send({
      body: { message: msg, data: successdata },
    });
  };

  public successOnCreate = (res, msg, created) => {
    res.status(this.SUCCESS_CREATED).send({
      body: {
        message: msg,
        data: created,
      },
    });
  };

  public successNoContent = (res, msg) => {
    res.status(this.SUCCESS_NOCONTENT).send({
      body: {
        message: msg,
      },
    });
  };

  public errorOnServer = (res, msg, err) => {
    res.status(this.SERVERERROR_INTERNALSERVERERROR).send({
      body: {
        message: msg,
        error: err,
      },
    });
  };

  public errorNotFound = (res, msg, err) => {
    res.status(this.CLIENTERROR_NOTFOUND).send({
      body: {
        message: msg,
        error: err,
      },
    });
  };
}
