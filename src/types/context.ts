import { ReactNode } from "react";
import { Product } from "./api";
/**
 * Represents the shape of the shopping React context, managing wishlist and cart functionality.
 */

export type ShoppingContextType = {
  /** List of products in the wishlist */
  wishlist: Product[];

  /** List of products in the cart */
  cart: Product[];

  /**
   * Adds a product to the wishlist.
   * @param product - The product to add.
   */
  addToWishlist: (product: Product) => void;

  /**
   * Adds a product to the cart.
   * @param product - The product to add.
   */
  addToCart: (product: Product) => void;

  /**
   * Removes a product from the wishlist by its ID.
   * @param productId - The ID of the product to remove.
   */
  removeFromWishlist: (productId: number) => void;

  /**
   * Removes a product from the cart by its ID.
   * @param productId - The ID of the product to remove.
   */
  removeFromCart: (productId: number) => void;

  /**
   * Checks if a product is in the wishlist.
   * @param productId - The ID of the product.
   * @returns `true` if the product is in the wishlist, otherwise `false`.
   */
  isInWishlist: (productId: number) => boolean;

  /**
   * Checks if a product is in the cart.
   * @param productId - The ID of the product.
   * @returns `true` if the product is in the cart, otherwise `false`.
   */
  isInCart: (productId: number) => boolean;

  /** The total number of products in the wishlist */
  wishlistCount: number;

  /** The total number of products in the cart */
  cartCount: number;

  /**
   * Triggers an animation when a product is added to the wishlist or cart.
   * @param product - The product being animated.
   * @param type - The type of animation (`"wishlist"` or `"cart"`).
   */
  triggerAnimation: (product: Product, type: "wishlist" | "cart") => void;

  /**
   * Stores the product currently being animated and its type.
   */
  animatingProduct: {
    /** The product being animated (or `null` if none) */
    product: Product | null;

    /** The type of animation (`"wishlist"` or `"cart"`, or `null` if none) */
    type: "wishlist" | "cart" | null;
  };
};

export type ShoppingProviderProps = {
  children: ReactNode;
};