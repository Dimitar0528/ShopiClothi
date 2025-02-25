import { useEffect, useRef } from "react";
import { Link } from "react-router";
import "./Card.css";
import { Product } from "../../types/api";
export default function Card({ image, title, price, rating, id }: Product) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 } // Sensitivity of the trigger
    );

    const cardElement = cardRef.current;
    if (cardElement) observer.observe(cardElement);

    return () => {
      if (cardElement) observer.unobserve(cardElement);
    };
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        title={`${rating} out of 5`}
        key={i}
        className={`fa fa-star ${i < rating ? "" : "grey"}`}
        aria-hidden="true"
      />
    ));
  };

  // Prevent navigation when clicking elements inside .action
  const handleActionClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <Link to={`/products/${id}`} className="card" ref={cardRef}>
      <div className="img-container">
        <img src={image} alt={title} />
      </div>

      <div className="content">
        <ul className="action">
          <li tabIndex={0} onClick={handleActionClick}>
            <i className="fa fa-heart" aria-hidden="true"></i>
            <span>Add to wishlist</span>
          </li>
          <li tabIndex={0} onClick={handleActionClick}>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <span>Add to cart</span>
          </li>
          <li tabIndex={0} onClick={handleActionClick}>
            <i className="fa fa-eye" aria-hidden="true"></i>
            <span>View Details</span>
          </li>
        </ul>
        <div className="productName">{title}</div>

        <div className="price-rating">
          <h2>{price}$</h2>
          <div className="rating">{renderStars(rating)}</div>
        </div>
      </div>
    </Link>
  );
}
