import products from "../../data/products.json";

/**
 * Fetches the list of products from the JSON file.
 * This function centralizes data access for the catalog.
 *
 * @returns {Array} List of products
 */
export const getProducts = () => {
  return products;
};

/**
 * Filters products by name.
 * @param {string} name - The name to search for.
 * @returns {Array} Filtered products.
 */
export const filterProductsByName = (name: string) => {
  return products.filter(product =>
    product.name.toLowerCase().includes(name.toLowerCase())
  );
};

/**
 * Filters products by category.
 * @param {string} category - The category to filter by.
 * @returns {Array} Filtered products.
 */
export const filterProductsByCategory = (category: string) => {
  return products.filter(product => product.categories.includes(category));
};

/**
 * Sorts products alphabetically by name.
 * @param {Array} productList - The list of products to sort.
 * @returns {Array} Sorted products.
 */
export const sortProductsAlphabetically = (productList: Array<any>) => {
  return productList.sort((a, b) => a.name.localeCompare(b.name));
};

/**
 * Combines search and filter criteria.
 * @param {string} name - The name to search for.
 * @param {string} category - The category to filter by.
 * @returns {Array} Filtered and sorted products.
 */
export const searchAndFilterProducts = (name: string, category: string) => {
  let filteredProducts = products;

  if (name) {
    filteredProducts = filterProductsByName(name);
  }

  if (category) {
    filteredProducts = filterProductsByCategory(category);
  }

  return sortProductsAlphabetically(filteredProducts);
};