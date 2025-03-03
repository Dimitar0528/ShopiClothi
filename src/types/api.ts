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

  /** Price of the product in USD (or relevant currency) */
  price: number;

  /** Rating details of the product */
  rating: {
    /** Average rating score (e.g., 4.5 out of 5) */
    rate: number;
  };
};
