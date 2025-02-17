import { useState } from "react";
import styles from "./Faq.module.css";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles["accordion"]}>
      <div className={styles["accordion-item"]}>
        <div
          onClick={() => toggleAccordion(0)}
          className={`${styles["accordion-item-header"]} ${
            activeIndex === 0 ? styles["active"] : ""
          }`}>
          What is ShopiClothi?
        </div>
        <div
          className={`${styles["accordion-item-body"]} ${
            activeIndex === 0 ? styles["active"] : ""
          }`}>
          <div className={styles["accordion-item-body-content"]}>
            ShopiClothi is an online marketplace for high-quality second-hand
            clothing. We offer a sustainable way to shop for stylish clothes at
            affordable prices while reducing fashion waste.
          </div>
        </div>
      </div>

      <div className={styles["accordion-item"]}>
        <div
          onClick={() => toggleAccordion(1)}
          className={`${styles["accordion-item-header"]} ${
            activeIndex === 1 ? styles["active"] : ""
          }`}>
          How does ShopiClothi work?
        </div>
        <div
          className={`${styles["accordion-item-body"]} ${
            activeIndex === 1 ? styles["active"] : ""
          }`}>
          <div className={styles["accordion-item-body-content"]}>
            ShopiClothi connects sellers and buyers of second-hand clothing.
            Sellers can list their clothes, and buyers can browse and purchase
            items directly through our secure platform.
          </div>
        </div>
      </div>

      <div className={styles["accordion-item"]}>
        <div
          onClick={() => toggleAccordion(2)}
          className={`${styles["accordion-item-header"]} ${
            activeIndex === 2 ? styles["active"] : ""
          }`}>
          Are the clothes on ShopiClothi in good condition?
        </div>
        <div
          className={`${styles["accordion-item-body"]} ${
            activeIndex === 2 ? styles["active"] : ""
          }`}>
          <div className={styles["accordion-item-body-content"]}>
            Yes! We carefully inspect listed items to ensure they meet quality
            standards. Sellers are required to provide accurate descriptions and
            photos so you can shop with confidence.
          </div>
        </div>
      </div>

      <div className={styles["accordion-item"]}>
        <div
          onClick={() => toggleAccordion(3)}
          className={`${styles["accordion-item-header"]} ${
            activeIndex === 3 ? styles["active"] : ""
          }`}>
          How do I sell my clothes on ShopiClothi?
        </div>
        <div
          className={`${styles["accordion-item-body"]} ${
            activeIndex === 3 ? styles["active"] : ""
          }`}>
          <div className={styles["accordion-item-body-content"]}>
            Simply create an account, upload photos of your items, set a price,
            and list them. Once a buyer purchases your item, we handle the
            payment securely, and ship the item to them.
          </div>
        </div>
      </div>

      <div className={styles["accordion-item"]}>
        <div
          onClick={() => toggleAccordion(4)}
          className={`${styles["accordion-item-header"]} ${
            activeIndex === 4 ? styles["active"] : ""
          }`}>
          What payment methods do you accept?
        </div>
        <div
          className={`${styles["accordion-item-body"]} ${
            activeIndex === 4 ? styles["active"] : ""
          }`}>
          <div className={styles["accordion-item-body-content"]}>
            We accept all major credit/debit cards, PayPal, and other secure
            payment options. Payments are processed through a trusted
            third-party provider for security.
          </div>
        </div>
      </div>

      <div className={styles["accordion-item"]}>
        <div
          onClick={() => toggleAccordion(5)}
          className={`${styles["accordion-item-header"]} ${
            activeIndex === 5 ? styles["active"] : ""
          }`}>
          What is your return policy?
        </div>
        <div
          className={`${styles["accordion-item-body"]} ${
            activeIndex === 5 ? styles["active"] : ""
          }`}>
          <div className={styles["accordion-item-body-content"]}>
            Due to the nature of second-hand items, returns are only accepted if
            the item was misrepresented by the seller. Buyers should carefully
            review listings before purchasing.
          </div>
        </div>
      </div>

      <div className={styles["accordion-item"]}>
        <div
          onClick={() => toggleAccordion(6)}
          className={`${styles["accordion-item-header"]} ${
            activeIndex === 6 ? styles["active"] : ""
          }`}>
          How do I contact customer support?
        </div>
        <div
          className={`${styles["accordion-item-body"]} ${
            activeIndex === 6 ? styles["active"] : ""
          }`}>
          <div className={styles["accordion-item-body-content"]}>
            You can reach our support team at{" "}
            <strong>shopi.clothi@gmail.com</strong>. Whether you have questions
            about your order, need help with selling your items, or other
            issues, our team is here to help!
          </div>
        </div>
      </div>
    </div>
  );
}
