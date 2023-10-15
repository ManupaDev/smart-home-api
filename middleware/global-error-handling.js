const GlobalErrorHandlerMiddleware = (error, req, res, next) => {
  console.log(error);
  switch (error.name) {
    case "NotFoundError":
      return res.status(404).send({ message: error.message });
    case "ValidationError":
      return res.status(400).json({ message: error.message });
    default:
      return res.status(500).send();
  }
};

export default GlobalErrorHandlerMiddleware;
