async function fetchProducts() {
    try {
      const res = await fetch("https://crm-pi-ten.vercel.app/api/product", {
        method: "GET",
        cache: "no-store",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const productsData = await res.json();
      return productsData.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  }
  
  export default fetchProducts;
  