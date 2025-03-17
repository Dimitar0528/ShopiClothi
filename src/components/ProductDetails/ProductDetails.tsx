import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router";
import { useShoppingContext } from "../../contexts/ShoppingContext";
import { Product } from "../../types/api";
import "./ProductDetails.css";
import { RenderProductStars } from "../common/RenderProductStars/RenderProductStars";
// @ts-expect-error: No type definitions available for this package
import ImageZoom from "react-image-zooom";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const {
    addToWishlist,
    addToCart,
    isInWishlist,
    isInCart,
    removeFromWishlist,
    removeFromCart,
    triggerAnimation,
  } = useShoppingContext();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data: Product = await response.json();
        const productsWithStock = {
          ...data,
          stock: 1,
          dateAdded: "2025-03-05T17:09:16.082Z",
        };
        setProduct(productsWithStock);
        setError(null);
        document.title = `${data.title} - ShopiClothi`;
      } catch (err) {
        setError("Failed to load product");
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleGoBack = () => {
    const currentPath = location.pathname;
    navigate(-1);
    // After navigating back, wait and check if the pathname changed.
    // If it didn't, navigate back again to prevent getting stuck.
    setTimeout(() => {
      const newPath = window.location.pathname;
      if (newPath === currentPath) {
        navigate(-1);
      }
    }, 50);
  };

  const handleWishlistToggle = () => {
    if (!product) return;

    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
      triggerAnimation(product, "wishlist");
    }
  };

  const handleCartToggle = () => {
    if (!product) return;

    if (isInCart(product.id)) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
      triggerAnimation(product, "cart");
    }
  };

  if (loading) {
    return (
      <div className="product-detail-loading">Loading product details...</div>
    );
  }

  if (error || !product) {
    return (
      <div className="product-detail-error">
        <h2>{error || "Product not found"}</h2>
        <button className="back-button" onClick={handleGoBack}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <button className="back-button" onClick={handleGoBack}>
        <i className="fa fa-arrow-left" aria-hidden="true"></i> Back
      </button>

      <div className="product-detail-content">
        <div title="Click to zoom image" className="product-detail-image">
          <ImageZoom src={product.image} alt={product.title} zoom="200" />
        </div>

        <div className="product-detail-info">
          <h1>{product.title}</h1>

          <div className="product-detail-price-rating">
            <div className="product-detail-price">${product.price}</div>
            <div
              className={`product-detail-stock`}>
              {product.stock === 0
                ? "Out of stock"
                : `In stock`}
            </div>

            <div className="product-detail-rating">
              {RenderProductStars(product.rating.rate)}
              <span className="rating-count">({product.rating.rate})</span>
            </div>
          </div>

          <div className="product-detail-description">
            <h2>Description</h2>
            <p>
              {product.description ||
                "No description available for this product."}
            </p>
          </div>

          <div className="product-detail-actions">
            <button
              className={`action-button wishlist ${
                isInWishlist(product.id) ? "active" : ""
              }`}
              onClick={handleWishlistToggle}>
              <i className="fa fa-heart" aria-hidden="true"></i>
              {isInWishlist(product.id)
                ? "Remove from Wishlist"
                : "Add to Wishlist"}
            </button>

            <button
              className={`action-button cart ${
                isInCart(product.id) ? "active" : ""
              }`}
              onClick={handleCartToggle}
              disabled={product.stock === 0}>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              {product.stock === 0
                ? "Out of Stock"
                : isInCart(product.id)
                ? "Remove from Cart"
                : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
