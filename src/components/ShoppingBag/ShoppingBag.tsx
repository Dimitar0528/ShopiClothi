import { useState } from "react";
import { Link } from "react-router";
import { useShoppingContext } from "../../contexts/ShoppingContext";
import "./ShoppingBag.css";
import { useHandleCartToggle, useHandleWishlistToggle } from "../../hooks/useHandleShoppingBag";
import showToast from "../../utils/showToast";
import { getProductLabels } from "../../utils/getProductLabels";
export default function ShoppingBag() {
  const { cart, wishlist, removeFromCart, removeFromWishlist, isInCart,isInWishlist } =
    useShoppingContext();
  const [activeTab, setActiveTab] = useState<"cart" | "wishlist">(() => {
    const tab = localStorage.getItem("tab") as "cart" | "wishlist";
    return tab ? tab : "cart";
  });
  const [handleWishlistToggle] = useHandleWishlistToggle("item-card", "img");
  const [handleCartToggle] = useHandleCartToggle("item-card", "img");

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
              <p className="empty-message">Your cart is empty</p>
            ) : (
              <div className="items-grid">
                {cart.map((cartItem) => {
                  const labels = getProductLabels(cartItem.product);

                  return (
                    <div key={cartItem.product.id} className="item-card">
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
                      <Link
                        className="product-link"
                        to={`/products/${cartItem.product.id}`}>
                        <img
                          src={cartItem.product.image}
                          alt={cartItem.product.title}
                        />
                      </Link>
                      <div className="item-details">
                        <h2>{cartItem.product.title}</h2>
                        <p className="price">${cartItem.product.price}</p>
                        <div className="button-group">
                          <button
                            className="remove-btn"
                            onClick={() => {
                              removeFromCart(cartItem.product.id);
                              showToast(
                                "Product removed from cart!",
                                "success"
                              );
                            }}>
                            Remove
                          </button>
                          <button
                            disabled={isInWishlist(cartItem.product.id)}
                            className="move-btn wishlist"
                            onClick={(e) =>
                              handleWishlistToggle(cartItem.product, e)
                            }>
                            {isInWishlist(cartItem.product.id)
                              ? "Already in wishlist"
                              : "Add to Wishlist"}
                          </button>
                        </div>
                      </div>
                    </div>
                  );})}
              </div>
            )}
          </>
        )}

        {activeTab === "wishlist" && (
          <>
            {wishlist.length === 0 ? (
              <p className="empty-message">Your wishlist is empty</p>
            ) : (
              <div className="items-grid">
                {wishlist.map((item) => {
                   const labels = getProductLabels(item);
                  return (
                    <div key={item.id} className="item-card">
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
                      <Link
                        className="product-link"
                        to={`/products/${item.id}`}>
                        <img src={item.image} alt={item.title} />
                      </Link>
                      <div className="item-details">
                        <h2>{item.title}</h2>
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
                            onClick={() => {
                              removeFromWishlist(item.id);
                              showToast(
                                "Product removed from wishlist!",
                                "success"
                              );
                            }}>
                            Remove
                          </button>
                          <button
                            className="move-btn cart"
                            onClick={(e) => handleCartToggle(item, e)}
                            disabled={item.stock === 0 || isInCart(item.id)}>
                            {isInCart(item.id)
                              ? "Already in cart"
                              : item.stock === 0
                              ? "Out of Stock"
                              : "Add to Cart"}
                          </button>
                        </div>
                      </div>
                    </div>
                  );})}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
