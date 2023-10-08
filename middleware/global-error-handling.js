const GlobalErrorHandlerMiddleware = (error, req, res, next) => {
  console.log(error);
  res.status(500).send();
  next(error);
};

export default GlobalErrorHandlerMiddleware;
