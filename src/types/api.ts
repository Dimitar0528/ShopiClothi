/**
 * Represents a product in the store.
 */
export type Product = {
  /** Unique identifier for the product */
  id: number;

  /** URL of the product image */
  image: string;

  /** Name/title of the product */
  title: string;

  /** Description providing details about the product */
  description: string;

  /**
   * The size of the product, typically representing specific measurements (e.g., S, M, L, XL, or 32x30 for pants).
   */
  size: string;

  /** Price of the product in USD (or relevant currency) */
  price: number;

  /** Rating details of the product */
  rating: {
    /** Average rating score (e.g., 4.5 out of 5) */
    rate: number;
  };

  /** Stock availability of the product */
  stock: number;
  
  /** Decided whether the product should be featured on the Home / Landing Page*/
  featured: boolean;

  /** Date the product was added to the store in ISO string format */
  dateAdded: string;
};