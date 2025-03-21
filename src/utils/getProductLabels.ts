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
  }

  // Add label for product size
  if (product.size) {
    labels.push({
      text: `${product.size}`,
      type: "size",
      color: "var(--primary-clr-900)",
    });
  }
  // Add any additional labels here (e.g., sale, trending, etc.)
  return labels;
}
