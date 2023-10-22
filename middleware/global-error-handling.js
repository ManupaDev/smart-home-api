const GlobalErrorHandlerMiddleware = (error, req, res, next) => {
  console.log(error);
  switch (error.name) {
    case "NotFoundError":
      return res.status(404).send({ message: error.message });
    case "ValidationError":
      return res.status(400).json({ message: error.message });
    case "ForbiddenError":
      return res.status(403).json({ message: error.message });
    case "JsonWebTokenError":
      return res.status(403).json({ message: error.message });
    case "UnauthorizedError":
      return res.status(401).json({ message: error.message });
    default:
      return res.status(500).send();
  }
};

export default GlobalErrorHandlerMiddleware;
