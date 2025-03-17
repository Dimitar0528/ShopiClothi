import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Product } from "../types/api";
import { ShoppingContextType, CartItem } from "../types/context";

const ShoppingContext = createContext<ShoppingContextType | undefined>(
  undefined
);

export const useShoppingContext = () => {
  const context = useContext(ShoppingContext);
  if (!context) {
    throw new Error(
      "useShoppingContext must be used within a ShoppingProvider"
    );
  }
  return context;
};

type ShoppingProviderProps = {
  children: ReactNode;
};

export const ShoppingProvider = ({ children }: ShoppingProviderProps) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [animatingProduct, setAnimatingProduct] = useState<{
    product: Product | null;
    type: "wishlist" | "cart" | null;
  }>({
    product: null,
    type: null,
  });

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    const storedCart = localStorage.getItem("cart");

    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }

    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save data to localStorage when state changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

 const addToWishlist = (product: Product) => {
   if (!isInWishlist(product.id)) {
     setWishlist((prev) => [...prev, product]);
   }
 };

 const addToCart = (product: Product) => {
   if (product.stock === 0) return; // Don't add if out of stock

   setCart((prev) => {
     const exists = prev.some((item) => item.product.id === product.id);
     if (exists) return prev; // Prevent duplicates

     return [...prev, { product, quantity: 1 }];
   });
 };

 const removeFromWishlist = (productId: number) => {
   setWishlist((prev) => prev.filter((item) => item.id !== productId));
 };

 const removeFromCart = (productId: number) => {
   setCart((prev) => prev.filter((item) => item.product.id !== productId));
 };


  const isInWishlist = (productId: number) => {
    return wishlist.some((item) => item.id === productId);
  };

  const isInCart = (productId: number) => {
    return cart.some((item) => item.product.id === productId);
  };

  const getCartItemQuantity = (productId: number) => {
    const item = cart.find((item) => item.product.id === productId);
    return item?.quantity || 0;
  };

  const triggerAnimation = (product: Product, type: "wishlist" | "cart") => {
    setAnimatingProduct({ product, type });

    // Reset animation state after animation completes
    setTimeout(() => {
      setAnimatingProduct({ product: null, type: null });
    }, 1000); // Animation duration
  };

  const value = {
    wishlist,
    cart,
    addToWishlist,
    addToCart,
    removeFromWishlist,
    removeFromCart,
    isInWishlist,
    isInCart,
    getCartItemQuantity,
    wishlistCount: wishlist.length,
    cartCount: cart.reduce((total, item) => total + item.quantity, 0),
    triggerAnimation,
    animatingProduct,
  };

  return (
    <ShoppingContext.Provider value={value}>
      {children}
    </ShoppingContext.Provider>
  );
};
