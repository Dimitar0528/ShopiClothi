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

  /** Stock availability of the product */
  stock: number;

  /** Date the product was added to the store in ISO string format */
  dateAdded: string;
};

/**
 * Represents a label assigned to a product, such as "new" or "out-of-stock".
 */
export type ProductLabel = {
  /** The text displayed on the label */
  text: string;

  /** The type of label, defining the product's status */
  type: "new" | "out-of-stock" | "low-stock" | "in-stock";

  /** The color associated with the label */
  color: string;
};
