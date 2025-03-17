import { useState, useEffect } from "react";
import Hero from "./Hero/Hero";
import Card from "../common/Card/Card";
import "./LandingPage.css";
import { Product } from "../../types/api";

export default function LandingPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/men's clothing"
        );
        const fetchedProducts: Product[] = await response.json();
        // Add stock and dateAdded to each product
        const productsWithStock = fetchedProducts.map((product) => ({
          ...product,
          stock: 1,
          dateAdded:"2025-03-16T17:24:30.833Z"
        }));

        setProducts(productsWithStock);
      } catch (e) {
        console.error(e);
      }
    }
    getProducts();
  }, []);

  return (
    <div className="landing-page-container">
      <Hero />
      <div id="newest">
        <h2 className="newest">Newest Products</h2>
        <div className="container">
          {products.map((product: Product) => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
