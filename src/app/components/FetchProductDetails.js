async function fetchProductDetails(id) {
  try {
    const res = await fetch(`https://crm-pi-ten.vercel.app/api/product/${id}`, {
      method: "GET",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch product details");
    }
    const productData = await res.json();
    return productData.data;
  } catch (error) {
    console.error("Error fetching product details:", error);
    return null;
  }
}

export default fetchProductDetails;
