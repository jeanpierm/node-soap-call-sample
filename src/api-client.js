const { default: axios } = require("axios");
const ApiError = require("./api-error");
const ApiResponse = require("./api-response");

module.exports = class ApiClient {
  static async post(url, data, headers) {
    try {
      const axiosResponse = await axios.post(url, data, {
        headers,
      });
      const response = {
        status: axiosResponse.status,
        data: axiosResponse.data,
        headers: axiosResponse.headers,
      };
      return new ApiResponse(response);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const response = {
          status: err.response.status,
          data: err.response.data,
          headers: err.response.headers,
        };
        throw new ApiError(err.message, new ApiResponse(response))
      }
      throw err;
    }
  }
};
