"use client";

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
  const [isEmpty, setIsEmpty] = useState(false);

  // Extract unique categories from productsData
  const categories = Array.from(
    new Set(productsData.flatMap((product) => product.categories))
  );

  const filteredProducts = filterProducts(productsData, searchTerm, selectedCategory);
  const sortedProducts = sortProducts(filteredProducts);
  const paginatedProducts = paginateProducts(sortedProducts, currentPage, PAGE_SIZE);

  React.useEffect(() => {
    setIsEmpty(filteredProducts.length === 0);
  }, [filteredProducts]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-teal-500 text-2xl font-bold mb-6">Catálogo de Productos</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1); // Reset pagination on search
        }}
        className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 mb-6 text-black"
      />

      {/* Category Selector */}
      <select
        value={selectedCategory}
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          setCurrentPage(1); // Reset pagination on category change
        }}
        className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 mb-6 text-black"
      >
        <option value="">Todas las categorías</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Feedback for empty state */}
      {isEmpty && <p className="text-gray-500 text-center mt-6">No hay productos disponibles.</p>}

      {/* Product Grid */}
      {!isEmpty && (
        <ProductGrid>
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      )}

      {/* Load More Button */}
      {!isEmpty && paginatedProducts.length < filteredProducts.length && (
        <button
          onClick={handleLoadMore}
          className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-300 ease-in-out mt-6"
        >
          Cargar más
        </button>
      )}
    </div>
  );
};

export default CatalogPage;