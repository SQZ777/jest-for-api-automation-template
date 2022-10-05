const axios = require('axios');

/**
 * @param {string} baseURL for base URL
 * @param {object} headers for request headers
 * @param {object} data for request payload
 */
async function postRequest(baseURL, headers, data) {
  const result = await axios({
    method: 'post',
    url: baseURL,
    headers: headers,
    data: data,
  })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  return result;
}

/**
 * @param {string} baseURL for base URL
 * @param {object} headers for request headers
 */
async function getRequest(baseURL, headers) {
  const result = await axios({
    method: 'get',
    url: baseURL,
    headers: headers,
  })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  return result;
}

module.exports = {
  postRequest,
  getRequest,
};
