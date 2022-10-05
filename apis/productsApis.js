require('dotenv').config();
const {getRequest} = require('./requestHelper');
const {postRequest} = require('./requestHelper');

/**
 * @return {object} response from get /products
 */
async function get() {
  const result = await getRequest(`${process.env.BASE_URL}/products`);
  return result;
}

/**
 * @param {object} data to request /products/update
 */
async function update(data) {
  const result = await postRequest(
      `${process.env.BASE_URL}/products/update`,
      {'test-key': '123'},
      data,
  );
  return result;
}

/**
 * @param {object} data to request /products/create
 */
async function create(data) {
  const result = await postRequest(
      `${process.env.BASE_URL}/products/create`,
      {'test-key': '123'},
      data,
  );
  return result;
}

module.exports = {
  get,
  update,
  create,
};
