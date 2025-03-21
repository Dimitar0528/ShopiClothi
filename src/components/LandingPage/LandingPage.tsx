import { useState, useEffect } from "react";
import Hero from "./Hero/Hero";
import Card from "../common/Card/Card";
import "./LandingPage.css";
import { Product } from "../../types/api";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import getRandomSize from "../../utils/getRandomSizeMockUp";

export default function LandingPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/women's clothing"
        );
        const response1 = await fetch(
          "https://fakestoreapi.com/products/category/men's clothing"
        );
        const fetchedProducts: Product[] = await response.json();
        const fetchedProducts1: Product[] = await response1.json();
        const allProducts = [...fetchedProducts, ...fetchedProducts1];

        // Add stock and dateAdded to each product
        const productsWithStock = allProducts.map((product) => ({
          ...product,
          stock: 1,
          size: getRandomSize(),
          dateAdded: "2025-03-16T17:24:30.833Z",
        }));

        setProducts(productsWithStock);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  return (
    <>
      <Hero />
      <section id="newest">
        <h2 className="newest">Newest Products</h2>
        <div className="container">
          {loading
            ? // Show skeleton placeholders when loading
              Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="card visible">
                  <div className="img-container">
                    <div className="product-labels">
                      <Skeleton
                        containerClassName="product-labels"
                        width={40}
                        height={20}
                        count={2}
                      />
                    </div>
                    <Skeleton
                      height={300}
                      width={280}
                      style={{ marginLeft: "1rem" }}
                    />
                  </div>

                  <div className="content">
                    <div className="productName">
                      <Skeleton count={2} width={320} height={20} />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}>
                      <h2>
                        <Skeleton width={65} height={25} />
                      </h2>
                      <div className="rating">
                        <Skeleton width={110} height={25} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : // Show actual products when loaded
              products.map((product: Product) => (
                <Card key={product.id} {...product} />
              ))}
        </div>
      </section>
    </>
  );
}
