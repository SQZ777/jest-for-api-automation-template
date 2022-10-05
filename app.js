const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

const products = [
  {
    productId: 1,
    productName: 'Car',
    productPrice: 123,
  },
  {
    productId: 2,
    productName: 'Notebook',
    productPrice: 456,
  },
  {
    productId: 3,
    productName: 'Mousepad',
    productPrice: 333,
  },
];

app.get('/products', function(req, res) {
  console.log(req.body);
  return res.send(products);
});

app.post('/products/update', function(req, res) {
  let productsTmp = {message: 'nothing change'};
  if (req.body.productId === undefined) {
    return res.status(400).send('lack field: productId');
  }
  for (let index = 0; index < products.length; index++) {
    if (products[index].productId === req.body.productId) {
      products[index].productName = req.body.productName;
      productsTmp = products[index];
    }
  }
  return res.send(productsTmp);
});

app.post('/products/create', function(req, res) {
  const product = {
    productId: req.body.productId,
    productName: req.body.productName,
    productPrice: req.body.productPrice,
  };

  if (
    product.productId === undefined ||
    product.productName === undefined ||
    product.productPrice === undefined
  ) {
    return res.status(400).send({message: 'request is illegal'});
  }

  products.push(product);
  return res.send(products);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
