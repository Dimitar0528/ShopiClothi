import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Product } from "../../../types/api";
import { useShoppingContext } from "../../../contexts/ShoppingContext";
import "./ProductModal.css";
import { RenderProductStars } from "../RenderProductStars/RenderProductStars";
import { useHandleCartToggle, useHandleWishlistToggle } from "../../../hooks/useHandleShoppingBag";

type ProductModalProps = {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
};

export default function ProductModal({
  product,
  isOpen,
  onClose,
}: ProductModalProps) {
  const {
    isInWishlist,
    isInCart,
  } = useShoppingContext();

  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [closing, setClosing] = useState(false);

  const closeModal = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      onClose();
      setClosing(false);
    }, 300); // Match the transition duration
  }, [onClose]);

  // Handle clicking outside the modal to close it
  useEffect(() => {
    if (!isOpen) return;

    const controller = new AbortController();
    const { signal } = controller;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        contentRef.current &&
        !contentRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside, { signal });

    return () => {
      controller.abort();
    };
  }, [isOpen, closeModal]);

  // Handle escape key to close modal
  useEffect(() => {
    if (!isOpen) return;

    const controller = new AbortController();
    const { signal } = controller;

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscKey, { signal });

    return () => {
      controller.abort();
    };
  }, [isOpen, closeModal]);

  const [handleWishlistToggle] = useHandleWishlistToggle(
    "modal-content",
    "modal-image img"
  );
  const [handleCartToggle] = useHandleCartToggle(
    "modal-content",
    "modal-image img"
  );

  return (
    <div
      className={`modal-overlay ${isOpen && !closing ? "active" : ""}`}
      ref={modalRef}>
      <div
        className={`modal-content ${isOpen && !closing ? "active" : ""}`}
        ref={contentRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title">
        <button
          className="close-button"
          onClick={closeModal}
          aria-label="Close modal">
          &times;
        </button>

        <div className="modal-body">
          <div className="modal-image">
            <Link className="product-link" to={`/products/${product.id}`}>
              <img src={product.image} alt={product.title} />
            </Link>
          </div>

          <div className="modal-details">
            <h2 id="modal-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <div className="modal-price-rating">
              <span className="modal-price">${product.price}</span>
              <div className="modal-rating">
                {RenderProductStars(product.rating.rate)}
                <span className="rating-count">({product.rating.rate})</span>
              </div>
            </div>

            <div className="modal-actions">
              <button
                className={`modal-action-button wishlist ${
                  isInWishlist(product.id) ? "active" : ""
                }`}
                onClick={(e) => handleWishlistToggle(product,e)}>
                <i className="fa fa-heart" aria-hidden="true"></i>
                {isInWishlist(product.id)
                  ? "Remove from Wishlist"
                  : "Add to Wishlist"}
              </button>

              <button
                className={`modal-action-button cart ${
                  isInCart(product.id) ? "active" : ""
                }`}
                onClick={(e) => handleCartToggle(product,e)}>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                {isInCart(product.id) ? "Remove from Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
