const apis = require('../apis');

test('Get products, should return 200', async () => {
  const result = await apis.products.get();
  expect(result.status).toBe(200);
});
