const GlobalErrorHandlerMiddleware = (error, req, res, next) => {
  console.log(error.name);

  switch (error.name) {
    case "NotFoundError":
      return res.status(404).send();
    case "ValidationError":
      return res.status(400).json({ message: error.message });
    default:
      return res.status(404).send();
  }
};

export default GlobalErrorHandlerMiddleware;
