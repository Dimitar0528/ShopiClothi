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
  const [activeTab, setActiveTab] = useState<"cart" | "wishlist">(() => {
    const tab = localStorage.getItem("tab") as "cart" | "wishlist";
    return tab ? tab : "cart";
  });

  // Handle adding an item from cart to wishlist
  const handleAddToWishlist = (item: Product) => {
    if (!isInWishlist(item.id)) {
      addToWishlist(item);
      triggerAnimation(item, "wishlist");
    }
  };

  // Handle adding an item from wishlist to cart
  const handleAddToCart = (item: Product) => {
    if (!isInCart(item.id)) {
      addToCart(item);
      triggerAnimation(item, "cart");
    }
  };

  // Handle setting the active tab (cart or wishlist)
  const handleSetActiveTab = (tab: "cart" | "wishlist") => {
    setActiveTab(tab);
    localStorage.setItem("tab", tab);
  };
  return (
    <div className="shopping-bag-container">
      <h1>Your Shopping Bag</h1>

      <div className="tabs">
        <button
          className={`tab ${activeTab === "cart" ? "active" : ""}`}
          onClick={() => handleSetActiveTab("cart")}>
          Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
        </button>
        <button
          className={`tab ${activeTab === "wishlist" ? "active" : ""}`}
          onClick={() => handleSetActiveTab("wishlist")}>
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
                {cart.map((cartItem) => (
                  <div key={cartItem.product.id} className="item-card">
                    <Link
                      className="product-link"
                      to={`/products/${cartItem.product.id}`}>
                      <img
                        src={cartItem.product.image}
                        alt={cartItem.product.title}
                      />
                    </Link>
                    <div className="item-details">
                      <h3>{cartItem.product.title}</h3>
                      <p className="price">${cartItem.product.price}</p>
                      <div className="button-group">
                        <button
                          className="remove-btn"
                          onClick={() => removeFromCart(cartItem.product.id)}>
                          Remove
                        </button>
                        <button
                          className="move-btn wishlist"
                          onClick={() => handleAddToWishlist(cartItem.product)}>
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
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}>
                        <p className="price">${item.price}</p>
                        <div className="stock-status">
                          {item.stock === 0 ? (
                            <span className="out-of-stock">Out of Stock</span>
                          ) : (
                            <span className="in-stock">In Stock</span>
                          )}
                        </div>
                      </div>
                      <div className="button-group">
                        <button
                          className="remove-btn"
                          onClick={() => removeFromWishlist(item.id)}>
                          Remove
                        </button>
                        <button
                          className="move-btn cart"
                          onClick={() => handleAddToCart(item)}
                          disabled={item.stock === 0}>
                          {item.stock === 0 ? "Out of Stock" : "Add to Cart"}
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
