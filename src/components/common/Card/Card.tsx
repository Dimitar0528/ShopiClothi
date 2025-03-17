import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import "./Card.css";
import { Product } from "../../../types/api";
import { useShoppingContext } from "../../../contexts/ShoppingContext";
import ProductModal from "../../common/ProductModal/ProductModal";
import { getProductLabels } from "../../../utils/productLabels";
import { RenderProductStars } from "../../common/RenderProductStars/RenderProductStars";

export default function Card({
  id,
  image,
  title,
  description,
  price,
  rating,
  stock,
  dateAdded,
}: Product) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const quantity = 1;
  const {
    addToWishlist,
    addToCart,
    isInWishlist,
    isInCart,
    removeFromWishlist,
    removeFromCart,
    getCartItemQuantity,
    triggerAnimation,
  } = useShoppingContext();
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });

  // Current product combined from props
  const product: Product = {
    id,
    image,
    title,
    description,
    price,
    rating,
    stock,
    dateAdded,
  };
  const labels = getProductLabels(product);
  const currentCartQuantity = getCartItemQuantity(id);

  useEffect(() => {
    // use IntersectionObserver for scroll-based animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 } // Sensitivity of the trigger
    );

    const cardElement = cardRef.current;
    if (cardElement) observer.observe(cardElement);

    return () => {
      if (cardElement) observer.unobserve(cardElement);
    };
  }, []);

  useEffect(() => {
    // Set initial card position for animation to use
    const updateCardPosition = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setCardPosition({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      }
    };

    updateCardPosition();
    window.addEventListener("resize", updateCardPosition);
    return () => window.removeEventListener("resize", updateCardPosition);
  }, []);

  // Handle wishlist toggle
  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Ensure the active element is an HTML element before calling blur
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    if (isInWishlist(id)) {
      removeFromWishlist(id);
    } else {
      // Set CSS variables for animation start position
      document.documentElement.style.setProperty(
        "--start-x",
        `${cardPosition.x}px`
      );
      document.documentElement.style.setProperty(
        "--start-y",
        `${cardPosition.y}px`
      );

      addToWishlist(product);
      triggerAnimation(product, "wishlist");
    }
  };

  // Handle cart toggle
  const handleCartToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    if (stock === 0) return; // Don't add if out of stock

    if (isInCart(id)) {
      removeFromCart(id);
    } else {
      document.documentElement.style.setProperty(
        "--start-x",
        `${cardPosition.x}px`
      );
      document.documentElement.style.setProperty(
        "--start-y",
        `${cardPosition.y}px`
      );

      // Check if adding quantity would exceed stock
      const totalQuantity = currentCartQuantity + quantity;
      if (totalQuantity > stock) return;

      addToCart(product, quantity);
      triggerAnimation(product, "cart");
    }
  };

  // Handle view details
  const handleViewDetails = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setModalOpen(true);
  };

  // Handle card click to navigate to product details page
  const handleCardClick = (e: React.MouseEvent) => {
    // Only navigate if the click wasn't on an action button
    if (!(e.target as HTMLElement).closest(".action")) {
      navigate(`/products/${id}`);
    }
  };

  return (
    <>
      <Link
        to={`/products/${id}`}
        className="card"
        ref={cardRef}
        onClick={handleCardClick}>
        <div className="img-container">
          <div className="product-labels">
            {labels.map((label, index) => (
              <span
                key={index}
                className="product-label"
                style={{ backgroundColor: label.color }}>
                {label.text}
              </span>
            ))}
          </div>
          <img src={image} alt={title} />
        </div>

        <div className="content">
          <ul className="action">
            <li
              tabIndex={0}
              onClick={handleWishlistToggle}
              className={isInWishlist(id) ? "active" : ""}>
              <i className="fa fa-heart" aria-hidden="true"></i>
              <span>
                {isInWishlist(id) ? "Remove from wishlist" : "Add to wishlist"}
              </span>
            </li>
            <li
              tabIndex={0}
              onClick={handleCartToggle}
              className={`${isInCart(id) ? "active" : ""} ${
                stock === 0 ? "disabled" : ""
              }`}>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              <span>
                {stock === 0
                  ? "Out of Stock"
                  : isInCart(id)
                  ? "Remove from cart"
                  : "Add to cart"}
              </span>
            </li>
            <li tabIndex={0} onClick={handleViewDetails}>
              <i className="fa fa-eye" aria-hidden="true"></i>
              <span>View Details</span>
            </li>
          </ul>
          <div className="productName">{title}</div>

          <div className="price-rating">
            <h2>{price}$</h2>
            <div className="rating">{RenderProductStars(rating.rate)}</div>
          </div>
        </div>
      </Link>

      {/* Product Modal */}
      <ProductModal
        product={product}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
