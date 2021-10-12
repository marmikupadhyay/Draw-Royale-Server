import HttpExceptionInitialiser from "../Interfaces/misc/httpExceptionInitialiser.interface";

class HttpException extends Error {
  status: number;
  message: string;
  err?: Error;

  constructor({ status, message, err }: HttpExceptionInitialiser) {
    super(message);
    this.status = status;
    this.message = message;
    this.err = err;
  }
}

export default HttpException;
