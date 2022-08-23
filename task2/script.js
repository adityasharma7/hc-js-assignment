const getProducts = async () => {
  try {
    const fetchProducts = await fetch(
      "https://fakestoreapi.com/products?limit=5"
      );
      const data = await fetchProducts.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const showProducts = async () => {
  const productsData = await getProducts()
  const productView = document.getElementById("products");
  productsData.forEach(product => {
    const title = document.createTextNode(`${product.title}`)
    const node = document.createElement("p")
    node.appendChild(title)
    productView.appendChild(node)
  });
}

showProducts()