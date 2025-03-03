import { useEffect, useState, useRef } from "react";
import { useShoppingContext } from "../../../contexts/ShoppingContext";
import "./AnimatedShoppingItem.css";

export default function AnimatedShoppingItem() {
  const { animatingProduct } = useShoppingContext();
  const [animationActive, setAnimationActive] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (animatingProduct.product && animatingProduct.type) {
      setAnimationActive(true);

      // Reset animation state after completion
      const timer = setTimeout(() => {
        setAnimationActive(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [animatingProduct]);

  if (!animatingProduct.product || !animationActive) {
    return null;
  }

  return (
    <div className="animated-item-container">
      <img
        ref={imageRef}
        src={animatingProduct.product.image}
        alt={animatingProduct.product.title}
        className={`animated-item ${animatingProduct.type}`}
      />
    </div>
  );
}
