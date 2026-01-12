/**
 * Represents a product in the catalog.
 */
export interface Product {
  id: string; // Unique identifier for the product
  name: string; // Name of the product
  price: number | null; // Price of the product
  image: string; // URL to the product image
  categories: string[]; // Categories the product belongs to
}