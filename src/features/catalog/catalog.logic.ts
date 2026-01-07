// Logic for catalog operations: search, filter, sort, and pagination

import { Product } from "./catalog.types";

/**
 * Filters products by search term and category.
 * @param products - List of all products.
 * @param searchTerm - Search term for filtering by name.
 * @param category - Selected category for filtering.
 * @returns Filtered products.
 */
export function filterProducts(
  products: Product[],
  searchTerm: string,
  category: string
): Product[] {
  return products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = category === "" || product.categories.includes(category);
    return matchesSearch && matchesCategory;
  });
}

/**
 * Sorts products alphabetically by name.
 * @param products - List of products to sort.
 * @returns Sorted products.
 */
export function sortProducts(products: Product[]): Product[] {
  return [...products].sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Paginates the product list.
 * @param products - List of products to paginate.
 * @param currentPage - Current page number (1-based).
 * @param pageSize - Number of products per page.
 * @returns Paginated products.
 */
export function paginateProducts(
  products: Product[],
  currentPage: number,
  pageSize: number
): Product[] {
  const startIndex = (currentPage - 1) * pageSize;
  return products.slice(startIndex, startIndex + pageSize);
}