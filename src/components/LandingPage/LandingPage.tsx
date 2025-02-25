import { useState,useEffect } from "react";
import Hero from "./Hero/Hero";
import Card from "../Card/Card";
import './LandingPage.css'
import { Product } from "../../types/api";

export default function LandingPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
   async function getProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products/category/men's clothing");
      const products: Product[] = await response.json();
      console.log(products);
      setProducts(products);
    } catch (e) {
      console.error(e);
    }
   }
   getProducts()
  },[])
   
  return (
    <div className="landing-page-container">
      <Hero />
      <div id="newest">
        <h2 className="newest">Newest Products</h2>
        <div className="container">
          {products.map((product: Product) => (
            <Card
              id={product.id}
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating.rate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}