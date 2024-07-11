module.exports = class ApiError extends Error {
  message;
  response;
  constructor(message, response) {
    super();
    this.message = message;
    this.response = response;
  }
};
