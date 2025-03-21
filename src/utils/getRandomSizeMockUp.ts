/**
 * Generates a random clothing size from XS to XXXL.
 * @returns A random size string.
 */
export default function getRandomSize(): string {
  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
  return sizes[Math.floor(Math.random() * sizes.length)];
}
