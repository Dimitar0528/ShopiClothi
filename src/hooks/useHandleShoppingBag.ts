import { Product } from "../types/api";
import { useShoppingContext } from "../contexts/ShoppingContext";
import { getAnimationStartPosition } from "../utils/getAnimationStartPosition";
import showToast from "../utils/showToast";

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
  const { isInCart, removeFromCart, addToCart, triggerAnimation } =
    useShoppingContext();
  const quantity = 1;

  function handleCartToggle(product: Product, e?: React.MouseEvent) {
      if (!product || product.stock === 0) return; // Prevent adding if out of stock

      if (containerSelector === "card") {
        // remove focus if the container is .card
        e?.preventDefault();
        e?.stopPropagation();

        if (document.activeElement instanceof HTMLElement) {
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
  const { isInWishlist, removeFromWishlist, addToWishlist, triggerAnimation } =
    useShoppingContext();

  function handleWishlistToggle(product: Product, e: React.MouseEvent) {
    if (containerSelector === "card") {
      // remove focus if the container is .card
      e.preventDefault();
      e.stopPropagation();

      if (document.activeElement instanceof HTMLElement) {
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
      showToast("Product removed from cart!", "success");
    } else {
      addToWishlist(product);
      showToast("Product added to wishlist!", "success");
      triggerAnimation(product, "wishlist", startPosition);
    }
  }
  return [handleWishlistToggle]
};

