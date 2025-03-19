/**
 * Gets the coordinates for the animation start position
 * @param element - The element that triggered the animation
 * @param selector - Optional CSS selector to find the image element
 * @returns The x and y coordinates for the animation start
 */
export const getAnimationStartPosition = (
  element: HTMLElement | null,
  selector?: string
): { x: number; y: number } => {
  // Default position
  const startPosition = { x: 0, y: 0 };

  if (!element) return startPosition;

  // If a selector is provided, try to find the image element
  if (selector) {
    const imageElement = element.querySelector(selector) as HTMLElement;
    if (imageElement) {
      const rect = imageElement.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2,
        y: rect.top,
      };
    }
  }

  // Fallback to the element itself
  const rect = element.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2,
    y: rect.top,
  };
};
