import { Product } from "../types/api";
import { useShoppingContext } from "../contexts/ShoppingContext";
import { getAnimationStartPosition } from "../utils/getAnimationStartPosition";
import showToast from "../utils/showToast";


import { useAuth } from "@clerk/clerk-react";
/**
 * A custom hook that returns a function to handle adding or removing a product from the cart.
 *
 * @param {string} containerSelector - The CSS class name of the container wrapping the product.
 * @param {string} imageSelector - The CSS class name of the product image inside the container.
 * @returns - A function to toggle the product in the cart.
 */
export const useHandleCartToggle = (
  containerSelector: string,
  imageSelector: string
) => {
  const { isSignedIn } = useAuth();

  const { isInCart, removeFromCart, addToCart, triggerAnimation } =
    useShoppingContext();
  const quantity = 1;

  function handleCartToggle (product: Product, e: React.MouseEvent | React.KeyboardEvent) {
      if (!product || product.stock === 0) return; // Prevent adding if out of stock

      if (containerSelector === "card") {
        e.preventDefault();
        e.stopPropagation();
        // Check if the event is a 'click' event and if the currently focused element is an instance of HTMLElement
        if (e.type === "click" && document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      }

      const productContainer = (e?.currentTarget as HTMLElement)?.closest(
        `.${containerSelector}`
      ) as HTMLElement; // Get the specific product clicked
      if (!productContainer) return;

      const startPosition = getAnimationStartPosition(
        productContainer,
        `.${imageSelector}`
      );
      if (isInCart(product.id)) {
        removeFromCart(product.id);
        showToast("Product removed from cart!", "success");
      } else {
        if(!isSignedIn) return showToast("Sign in in order to add to cart!", "error");
        addToCart(product, quantity);
        showToast("Product added to cart!", "success");
        triggerAnimation(product, "cart", startPosition);
      }
  }
  return [handleCartToggle];
};

/**
 * A custom hook that returns a function to handle adding or removing a product from the wishlist.
 *
 * @param {string} containerSelector - The CSS class name of the container wrapping the product.
 * @param {string} imageSelector - The CSS class name of the product image inside the container.
 * @returns - A function to toggle the product in the wishlist.
 */
export const useHandleWishlistToggle = (
  containerSelector: string,
  imageSelector: string
) => {
  const { isSignedIn } = useAuth();

  const { isInWishlist, removeFromWishlist, addToWishlist, triggerAnimation } =
    useShoppingContext();

  function handleWishlistToggle(
    product: Product,
    e: React.MouseEvent | React.KeyboardEvent
  ) {
    if (containerSelector === "card") {
      e.preventDefault();
      e.stopPropagation();
      // Check if the event is a 'click' event and if the currently focused element is an instance of HTMLElement
      if (e.type === "click" && document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    }
    const productContainer = (e.currentTarget as HTMLElement)?.closest(
      `.${containerSelector}`
    ) as HTMLElement; // Get the specific product clicked
    if (!productContainer) return;

    const startPosition = getAnimationStartPosition(
      productContainer,
      `.${imageSelector}`
    );

  if (isInWishlist(product.id)) {
    removeFromWishlist(product.id);
    showToast("Product removed from wishlist!", "success");
  } else {
     if (!isSignedIn)
       return showToast("Sign in in order to add to wishlist!", "error");
      addToWishlist(product);
      showToast("Product added to wishlist!", "success");
      triggerAnimation(product, "wishlist", startPosition);
    }
  }
  return [handleWishlistToggle]
};

