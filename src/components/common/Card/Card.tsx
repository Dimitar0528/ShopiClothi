import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import "./Card.css";
import { Product } from "../../../types/api";
import { useShoppingContext } from "../../../contexts/ShoppingContext";
import ProductModal from "../../common/ProductModal/ProductModal";
import { getProductLabels } from "../../../utils/getProductLabels";
import { RenderProductStars } from "../../common/RenderProductStars/RenderProductStars";
import { useHandleCartToggle, useHandleWishlistToggle } from "../../../hooks/useHandleShoppingBag";

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
  const {
    isInWishlist,
    isInCart,
  } = useShoppingContext();
  const cardRef = useRef<HTMLAnchorElement>(null);
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  
  const [handleWishlistToggle] = useHandleWishlistToggle(
    "card",
    "card-image img"
  );
  const [handleCartToggle] = useHandleCartToggle("card", "card-image img");
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
              onClick={(e) => handleWishlistToggle(product,e)}
              className={isInWishlist(id) ? "active" : ""}>
              <i className="fa fa-heart" aria-hidden="true"></i>
              <span>
                {isInWishlist(id) ? "Remove from wishlist" : "Add to wishlist"}
              </span>
            </li>
            <li
              tabIndex={0}
              onClick={(e) => handleCartToggle(product,e)}
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
