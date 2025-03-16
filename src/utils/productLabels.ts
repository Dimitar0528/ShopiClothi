import { Product, ProductLabel } from "../types/api";

const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;

export function getProductLabels(product: Product): ProductLabel[] {
  const labels: ProductLabel[] = [];

  // Check if product is new (added within the last week)
  const addedDate = new Date(product.dateAdded);
  const now = new Date();
  if (now.getTime() - addedDate.getTime() <= ONE_WEEK_MS) {
    labels.push({
      text: "NEW",
      type: "new",
      color: "var(--secondary-clr-purple)",
    });
  }

  // Check stock status
  if (product.stock === 0) {
    labels.push({
      text: "OUT OF STOCK",
      type: "out-of-stock",
      color: "var(--secondary-clr-red)",
    });
  } else if (product.stock <= 10) {
    labels.push({
      text: `LOW STOCK - Only ${product.stock} left`,
      type: "low-stock",
      color: "var(--accent-clr-900)",
    });
  } else {
    labels.push({
      text: "IN STOCK",
      type: "in-stock",
      color: "var(--accent-clr-900)",
    });
  }

  // Add any additional labels here (e.g., sale, trending, etc.)
  return labels;
}
