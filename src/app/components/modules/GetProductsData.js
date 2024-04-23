export default async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    method: "GET",
  });
  const products = await res.json();
  return products;
}
