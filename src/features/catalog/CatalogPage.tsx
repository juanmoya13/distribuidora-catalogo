import React, { useState } from "react";
import { paginateProducts, filterProducts, sortProducts } from "./catalog.logic";
import { Product } from "./catalog.types";
import productsData from "../../../data/products.json";
import ProductCard from "./components/ProductCard";
import ProductGrid from "./components/ProductGrid";

const PAGE_SIZE = 10;

const CatalogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Extract unique categories from productsData
  const categories = Array.from(
    new Set(productsData.flatMap((product) => product.categories))
  );

  const filteredProducts = filterProducts(productsData, searchTerm, selectedCategory);
  const sortedProducts = sortProducts(filteredProducts);
  const paginatedProducts = paginateProducts(sortedProducts, currentPage, PAGE_SIZE);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <h1>Catálogo de Productos</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1); // Reset pagination on search
        }}
      />

      {/* Category Selector */}
      <select
        value={selectedCategory}
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          setCurrentPage(1); // Reset pagination on category change
        }}
      >
        <option value="">Todas las categorías</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Product Grid */}
      <ProductGrid>
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>

      {/* Load More Button */}
      {paginatedProducts.length < filteredProducts.length && (
        <button onClick={handleLoadMore}>Cargar más</button>
      )}
    </div>
  );
};

export default CatalogPage;