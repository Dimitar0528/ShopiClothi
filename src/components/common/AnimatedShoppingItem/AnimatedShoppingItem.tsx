import { useEffect, useState } from "react";
import { useShoppingContext } from "../../../contexts/ShoppingContext";
import { AnimationItem } from "../../../types/components";
import "./AnimatedShoppingItem.css";


export default function AnimatedShoppingItem() {
  const { animatingProduct } = useShoppingContext();
  const [animations, setAnimations] = useState<AnimationItem[]>([]);

  useEffect(() => {
    if (animatingProduct.product && animatingProduct.type) {
      const shoppingBagIcon = document.querySelector(".shopping-bag");

      if (shoppingBagIcon) {
        const bagRect = shoppingBagIcon.getBoundingClientRect();
        const endX = bagRect.left + bagRect.width / 2;
        const endY = bagRect.bottom;

        const animationId = `${animatingProduct.product.id}-${Date.now()}`;

        const newAnimation: AnimationItem = {
          id: animationId,
          product: animatingProduct.product,
          type: animatingProduct.type,
          startX: animatingProduct.startPosition.x,
          startY: animatingProduct.startPosition.y,
          endX,
          endY,
        };

        setAnimations((prev) => [...prev, newAnimation]);

        setTimeout(() => {
          setAnimations((prev) =>
            prev.filter((anim) => anim.id !== animationId)
          );
        }, 1200); // Match animation duration
      }
    }
  }, [animatingProduct]);

  if (animations.length === 0) {
    return null;
  }

  return (
    <div className="animated-item-container">
      {animations.map((anim) => (
        <img
          key={anim.id}
          src={anim.product.image}
          alt={anim.product.title}
          className={`animated-item ${anim.type}`}
          style={
            {
              left: `${anim.startX}px`,
              top: `${anim.startY}px`,
              "--start-x": `${anim.startX + 50}px`,
              "--start-y": `${anim.startY + 50}px`,
              "--end-x": `${anim.endX}px`,
              "--end-y": `${anim.endY}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
