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