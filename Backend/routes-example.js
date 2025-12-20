app.get("/products", (req, res) => {
  const products = [
    { id: 1, label: "Product 1" },
    {
      id: 2,
      label: "Product 2",
    },
  ];

  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);

  const products = [
    { id: 1, label: "Product 1" },
    {
      id: 2,
      label: "Product 2",
    },
  ];

  const getSingleProduct = products.find((product) => product.id === productId);

  res.json(getSingleProduct);
});
