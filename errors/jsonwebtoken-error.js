class JsonWebTokenError extends Error {
    constructor(message) {
      super(message);
      this.name = "JsonWebTokenError";
    }
  }
  
  export default JsonWebTokenError;
  