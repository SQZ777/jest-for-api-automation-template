const apis = require('../../apis');
const requestPayloads = require('../../requestPayloads');

test('Create product, should get the product at /products', async () => {
  const createResult = await apis.products.create(
      requestPayloads.products.create,
  );
  expect(createResult.status).toBe(200);

  const result = await apis.products.get();
  let isUpdateInProducts = false;
  for (let index = 0; index < result.data.length; index++) {
    if (
      requestPayloads.products.create.productId === result.data[index].productId
    ) {
      isUpdateInProducts = true;
    }
  }
  expect(isUpdateInProducts).toBe(true);
});
