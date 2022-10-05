const apis = require('../apis');
const requestPayloads = require('../requestPayloads');

test('Create products, should return 200', async () => {
  const result = await apis.products.create(requestPayloads.products.create);
  expect(result.status).toBe(200);
});
