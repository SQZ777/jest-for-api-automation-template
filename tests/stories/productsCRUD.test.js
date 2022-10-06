require('../../common/jestExtend');
const apis = require('../../apis');
const requestPayloads = require('../../requestPayloads');

test('Create product, should get the product at /products', async () => {
  const createResult = await apis.products.create(
      requestPayloads.products.create,
  );
  expect(createResult.status).toBe(200);

  const result = await apis.products.get();

  expect(result.data).toContainObject(requestPayloads.products.create);
});
