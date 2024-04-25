"use client";
import Products from "./Products";
import { useSelector } from "react-redux";

function HomePage() {
  const searchTerm = useSelector((state) => state.search.term);

  return (
    <div className="container mx-auto p-4">
      <Products searchTerm={searchTerm} />
    </div>
  );
}

export default HomePage;
