export default async function fetchProducts() {
  const res = await fetch("https://crm-pi-ten.vercel.app/api/product", {
    method: "GET",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
  });
  const products = await res.json();
  return products;
}
