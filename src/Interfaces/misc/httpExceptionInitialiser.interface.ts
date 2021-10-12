interface HttpExceptionInitialiser{
  status: number;
  message: string;
  err?: Error;
}

export default HttpExceptionInitialiser;