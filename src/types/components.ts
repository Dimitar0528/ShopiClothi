import { Product } from "./api";

/**
 * Represents an item in the animation queue for cart or wishlist interactions.
 */
export type AnimationItem = {
  /**
   * Unique identifier for the animation instance.
   */
  id: string;

  /**
   * The product associated with the animation.
   */
  product: Product;

  /**
   * The type of animation being triggered.
   * - `"wishlist"`: Animation for adding/removing from the wishlist.
   * - `"cart"`: Animation for adding/removing from the shopping cart.
   */
  type: "wishlist" | "cart";

  /**
   * The starting X-coordinate of the animation.
   */
  startX: number;

  /**
   * The starting Y-coordinate of the animation.
   */
  startY: number;

  /**
   * The ending X-coordinate of the animation.
   */
  endX: number;

  /**
   * The ending Y-coordinate of the animation.
   */
  endY: number;
};
