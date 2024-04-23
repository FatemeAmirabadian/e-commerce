'use client'
import React, { useState } from "react";
import Products from "./Products";
import Header from "../modules/Header";
import Footer from "../modules/Footer";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container mx-auto p-4">
        <Products searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
