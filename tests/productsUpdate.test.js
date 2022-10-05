const apis = require('../apis');
const requestPayloads = require('../requestPayloads');
test('Update products, should return 200', async () => {
  const result = await apis.products.update(requestPayloads.products.update);
  expect(result.status).toBe(200);
});
