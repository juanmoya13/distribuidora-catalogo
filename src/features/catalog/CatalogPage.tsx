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

  const filteredProducts = filterProducts(productsData, searchTerm, selectedCategory);
  const sortedProducts = sortProducts(filteredProducts);
  const paginatedProducts = paginateProducts(sortedProducts, currentPage, PAGE_SIZE);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <h1>Catálogo de Productos</h1>

      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Todas las categorías</option>
        {/* Render categories dynamically if available */}
        <option value="categoria1">Categoría 1</option>
        <option value="categoria2">Categoría 2</option>
      </select>

      <ProductGrid>
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>

      {paginatedProducts.length < filteredProducts.length && (
        <button onClick={handleLoadMore}>Cargar más</button>
      )}
    </div>
  );
};

export default CatalogPage;