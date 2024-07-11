module.exports = class ApiResponse {
  status;
  data;
  headers;

  constructor({ status, data, headers }) {
    this.status = status;
    this.data = data;
    this.headers = headers;
  }
};
