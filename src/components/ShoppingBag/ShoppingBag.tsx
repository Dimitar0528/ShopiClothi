import { useState } from "react";
import { Link } from "react-router";
import { useShoppingContext } from "../../contexts/ShoppingContext";
import { Product } from "../../types/api";
import "./ShoppingBag.css";

export default function ShoppingBag() {
  const {
    cart,
    wishlist,
    removeFromCart,
    removeFromWishlist,
    addToWishlist,
    addToCart,
    isInWishlist,
    isInCart,
    triggerAnimation,
  } = useShoppingContext();
  const [activeTab, setActiveTab] = useState<"cart" | "wishlist">("cart");

  // Handle adding an item from cart to wishlist
  const handleMoveToWishlist = (item: Product) => {
    if (!isInWishlist(item.id)) {
      addToWishlist(item);
      triggerAnimation(item, "wishlist");
    }
  };

  // Handle adding an item from wishlist to cart
  const handleMoveToCart = (item: Product) => {
    if (!isInCart(item.id)) {
      addToCart(item);
      triggerAnimation(item, "cart");
    }
  };

  return (
    <div className="shopping-bag-container">
      <h1>Your Shopping Bag</h1>

      <div className="tabs">
        <button
          className={`tab ${activeTab === "cart" ? "active" : ""}`}
          onClick={() => setActiveTab("cart")}>
          Cart ({cart.length})
        </button>
        <button
          className={`tab ${activeTab === "wishlist" ? "active" : ""}`}
          onClick={() => setActiveTab("wishlist")}>
          Wishlist ({wishlist.length})
        </button>
      </div>

      <div className="items-container">
        {activeTab === "cart" && (
          <>
            {cart.length === 0 ? (
              <div className="empty-message">Your cart is empty</div>
            ) : (
              <div className="items-grid">
                {cart.map((item) => (
                  <div key={item.id} className="item-card">
                    <Link className="product-link" to={`/products/${item.id}`}>
                      <img src={item.image} alt={item.title} />
                    </Link>
                    <div className="item-details">
                      <h3>{item.title}</h3>
                      <p className="price">${item.price}</p>
                      <div className="button-group">
                        <button
                          className="remove-btn"
                          onClick={() => removeFromCart(item.id)}>
                          Remove
                        </button>
                        <button
                          className="move-btn wishlist"
                          onClick={() => handleMoveToWishlist(item)}>
                          Add to Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {activeTab === "wishlist" && (
          <>
            {wishlist.length === 0 ? (
              <div className="empty-message">Your wishlist is empty</div>
            ) : (
              <div className="items-grid">
                {wishlist.map((item) => (
                  <div key={item.id} className="item-card">
                    <Link className="product-link" to={`/products/${item.id}`}>
                      <img src={item.image} alt={item.title} />
                    </Link>
                    <div className="item-details">
                      <h3>{item.title}</h3>
                      <p className="price">${item.price}</p>
                      <div className="button-group">
                        <button
                          className="remove-btn"
                          onClick={() => removeFromWishlist(item.id)}>
                          Remove
                        </button>
                        <button
                          className="move-btn cart"
                          onClick={() => handleMoveToCart(item)}>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
