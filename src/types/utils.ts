/**
 * Represents a label assigned to a product, such as "new" or "out-of-stock".
 */
export type ProductLabel = {
  /** The text displayed on the label */
  text: string;

  /** The type of label, defining the product's status */
  type: "new" | "out-of-stock" | "in-stock" | "size" | "featured";

  /** The color associated with the label */
  color: string;
};
