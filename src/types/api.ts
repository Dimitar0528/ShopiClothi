/**
 * Represents a product in the store
 *
 *
 */
export type Product = {
  id: number;
  image: string;
  title: string;
  price: number;
  rating: {
    rate: number;
  };
};
