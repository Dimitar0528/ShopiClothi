import "./LandingPage.css";

import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";

import Hero from "./Hero/Hero";
import Card from "../common/Card/Card";
import FeatureCard from "./FeatureCard/FeatureCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Product } from "../../types/api";
import getRandomSize from "../../utils/getRandomSizeMockUp";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import showToast from "../../utils/showToast";

export default function LandingPage() {
   const { isPending, error, data: products } = useQuery<Product[]>({
     queryKey: ["products", {type: 'featured'}],
     queryFn: async () => {
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
       const productsWithStock: Product[] = allProducts.map((product) => ({
         ...product,
         stock: 1,
         size: getRandomSize(),
         featured: true,
         dateAdded: new Date().toISOString(),
       }))
       return productsWithStock;
       } catch (err) {
        throw new Error(`${err}`);
       }
     },
   });

   if (error) return "An error has occurred: " + error.message;

   const copyCode = () => {
     const couponCode = "NEWSTYLE20";
     navigator.clipboard
       .writeText(couponCode)
       .then(() => {
         showToast("🎉 Code copied to clipboard!", "success");
       })
       .catch((err) => {
        showToast(`Failed to copy the code!: ${err}`, "error");
       });
   };

  return (
    <>
      <Hero />

      {/* Feeatured Products Section */}
      <section id="featured">
        <span className="badge">Featured</span>
        <h2 className="featured">Featured Products</h2>
        <div className="container">
          {isPending // Show skeleton placeholders when loading
            ? Array.from({ length: 12 }).map((_, index) => (
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
            : products.map((product: Product) => (
                <Card key={product.id} {...product} />
              ))}
        </div>
      </section>

      {/* Application Features Section */}
      <section className="features-section">
        <div className="features-header">
          <span className="badge">Why Choose Us</span>
          <h2 className="features-title">Why Choose Our Platform</h2>
          <p className="features-subtext">
            Discover the easiest and most sustainable way to buy and sell
            second-hand clothes with confidence.
          </p>
        </div>

        <div className="features-grid">
          <FeatureCard
            cardBorderGradient="violet-gradient"
            cardIconGradient="violet-bg"
            cardIcon="icon-shield"
            cardTitle="Safe Transactions"
            cartContent="Our secure payment system ensures that both buyers and sellers
            are protected throughout the entire transaction process."
          />
          <FeatureCard
            cardBorderGradient="emerald-gradient"
            cardIconGradient="emerald-bg"
            cardIcon="icon-repeat"
            cardTitle="Seamless Swaps"
            cartContent="Easily list your pre-loved clothes and find new favourites — our
            platform makes second-hand fashion feel brand new and comfortable."
          />

          <FeatureCard
            cardBorderGradient="amber-gradient"
            cardIconGradient="amber-bg"
            cardIcon="icon-zap"
            cardTitle="Lightning Fast"
            cartContent="From listing to searching, selling and more, our platform is
            built for speed — so you can update your wardrobe without the wait."
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <span className="badge">Testimonials</span>
        <div className="testimonial-container">
          <div className="testimonials-header">
            <div className="testimonials-title-container">
              <h2 className="testimonials-title">What Our Customers Say</h2>
              <p className="testimonials-subtitle">
                Don't just take our word for it - hear from our satisfied
                customers
              </p>
            </div>
          </div>
          <div className="testimonials-grid">
            <TestimonialCard
              quote="ShopiClothi made my wardrobe complete with trendy yet affordable options!"
              author="Lora Georgieva"
              location="Sofia"
              rating={4.5}
            />
            <TestimonialCard
              quote="The quality of their clothes is outstanding. I'm a customer for life!"
              author="Michael De Santa"
              location="California"
              rating={5}
            />
            <TestimonialCard
              quote="Fast shipping and excellent customer service. My go-to online clothing store!"
              author="Emma Watson"
              location="San Marino"
              rating={4}
            />
          </div>
        </div>
      </section>
      
      {/* Discounts/Offers Section */}
      <section className="offers-section">
        <div className="offers-container">
          <div className="offers-grid">
            <div className="offers-content">
              <div className="offers-header">
                <h2 className="offers-title">Special Offers Just For You</h2>
                <p className="offers-subtitle">
                  Limited time deals you don't want to miss
                </p>
              </div>
              <div className="offers-button-container">
                <Link to="/discover" className="offers-button">
                  Shop New Arrivals
                </Link>
              </div>
            </div>
            <div className="discount-card">
              <div className="discount-amount">10% OFF</div>
              <p className="discount-description">On all new arrivals</p>
              <p className="discount-code">
                Use code: <span className="code-highlight">NEWSTYLE20</span> to
                redeem
              </p>
              <div className="discount-button-container">
                <button className="discount-button" onClick={copyCode}>
                  Copy Coupon Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <span className="badge">Exclusive</span>
        <div className="pricing-container">
          <div className="pricing-header">
            <div className="pricing-title-container">
              <h2 className="pricing-title">Exclusive Deals</h2>
              <p className="pricing-subtitle">
                Join our loyalty program for special perks and discounts
              </p>
            </div>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3 className="pricing-card-title">Free Shipping</h3>
              </div>
              <div className="pricing-card-content">
                <p className="pricing-card-description">
                  On all orders over $80
                </p>
              </div>
            </div>
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3 className="pricing-card-title">Member Discount</h3>
              </div>
              <div className="pricing-card-content">
                <p className="pricing-card-description">
                  5% off every purchase for members
                </p>
              </div>
            </div>
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3 className="pricing-card-title">Loyalty Points</h3>
              </div>
              <div className="pricing-card-content">
                <p className="pricing-card-description">
                  Earn points with every purchase
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <span className="badge">Get Started Today</span>
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-subtext">
            Join thousands of users who are already buying, selling, and trading
            on our secure platform.
          </p>

          <div className="cta-buttons">
            <button className="btn btn-primary">
              Create Your Account
              <span className="arrow-icon">➔</span>
            </button>
          </div>

          <div className="cta-features">
            <div>
              <span className="check-icon">✔</span>No hidden fees
            </div>
            <div>
              <span className="check-icon">✔</span>Secure transactions
            </div>
            <div>
              <span className="check-icon">✔</span>24/7 support
            </div>
            <div>
              <span className="check-icon">✔</span>Money-back guarantee
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
