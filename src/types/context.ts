import { ReactNode } from "react";
import { Product } from "./api";
/**
 * Represents the shape of the shopping React context, managing wishlist and cart functionality.
 */

/**
 * Represents the structure of the shopping context state and actions.
 */
export type ShoppingContextType = {
  /** List of products added to the wishlist */
  wishlist: Product[];

  /** List of items added to the cart, including quantity */
  cart: CartItem[];

  /**
   * Adds a product to the wishlist.
   * @param product - The product to be added.
   */
  addToWishlist: (product: Product) => void;

  /**
   * Adds a product to the cart.
   * @param product - The product to be added.
   * @param quantity - Optional quantity of the product (defaults to 1).
   */
  addToCart: (product: Product, quantity?: number) => void;

  /**
   * Removes a product from the wishlist.
   * @param productId - The ID of the product to be removed.
   */
  removeFromWishlist: (productId: number) => void;

  /**
   * Removes a product from the cart.
   * @param productId - The ID of the product to be removed.
   */
  removeFromCart: (productId: number) => void;

  /**
   * Checks if a product is in the wishlist.
   * @param productId - The ID of the product to check.
   * @returns `true` if the product is in the wishlist, otherwise `false`.
   */
  isInWishlist: (productId: number) => boolean;

  /**
   * Checks if a product is in the cart.
   * @param productId - The ID of the product to check.
   * @returns `true` if the product is in the cart, otherwise `false`.
   */
  isInCart: (productId: number) => boolean;

  /** The total number of items in the wishlist */
  wishlistCount: number;

  /** The total number of items in the cart */
  cartCount: number;

  /**
   * Triggers an animation when adding/removing a product from the wishlist or cart.
   * @param product - The product being animated.
   * @param type - The type of action triggering the animation ("wishlist" or "cart").
   * @param startPosition - The starting position for the animation.
   */
  triggerAnimation: (
    product: Product,
    type: "wishlist" | "cart",
    startPosition: { x: number; y: number }
  ) => void;

  /**
   * Stores the product currently being animated.
   */
  animatingProduct: {
    product: Product | null;
    type: "wishlist" | "cart" | null;
    startPosition: { x: number; y: number };
  };
};

/**
 * Props for the ShoppingProvider component.
 */
export type ShoppingProviderProps = {
  /** Child components to be wrapped by the provider */
  children: ReactNode;
};

/**
 * Represents an item in the cart, including product details and quantity.
 */
export type CartItem = {
  /** The product associated with the cart item */
  product: Product;

  /** The quantity of the product in the cart */
  quantity: number;
};
