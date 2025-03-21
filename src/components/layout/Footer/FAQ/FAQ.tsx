import { useState } from "react";
import styles from "./FAQ.module.css";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles["accordion"]}>
      <h1>Frequently Asked Questions</h1>
      {[
        {
          question: "What is ShopiClothi?",
          answer:
            "ShopiClothi is an online marketplace for high-quality second-hand clothing. We offer a sustainable way to shop for stylish clothes at affordable prices while reducing fashion waste.",
        },
        {
          question: "How does ShopiClothi work?",
          answer:
            "ShopiClothi connects sellers and buyers of second-hand clothing. Sellers can list their clothes, and buyers can browse and purchase items directly through our secure platform.",
        },
        {
          question: "Are the clothes on ShopiClothi in good condition?",
          answer:
            "Yes! We carefully inspect listed items to ensure they meet quality standards. Sellers are required to provide accurate descriptions and photos so you can shop with confidence.",
        },
        {
          question: "How do I sell my clothes on ShopiClothi?",
          answer:
            "Simply create an account, upload photos of your items, set a price, and list them. Once a buyer purchases your item, we handle the payment securely, and ship the item to them.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit/debit cards, PayPal, and other secure payment options. Payments are processed through a trusted third-party provider for security.",
        },
        {
          question: "What is your return policy?",
          answer:
            "Due to the nature of second-hand items, returns are only accepted if the item was misrepresented by the seller. Buyers should carefully review listings before purchasing.",
        },
        {
          question: "How do I contact customer support?",
          answer:
            "You can reach our support team at shopi.clothi@gmail.com. Whether you have questions about your order, need help with selling your items, or other issues, our team is here to help!",
        },
        {
          question: "Is there a fee for selling on ShopiClothi?",
          answer:
            "Yes, we charge a small commission fee on each sale to help maintain the platform and provide a secure shopping experience. The fee details are available in our seller guidelines.",
        },
        {
          question: "Can I track my order?",
          answer:
            "Yes! Once your order has been shipped, you will receive a tracking number via email to monitor your delivery status.",
        },
        {
          question: "How can I delete my account?",
          answer:
            "If you wish to delete your account, please contact our support team at shopi.clothi@gmail.com, and we will assist you with the process.",
        },
      ].map((faq, index) => (
        <div key={index} className={styles["accordion-item"]}>
          <div
            onClick={() => toggleAccordion(index)}
            className={`${styles["accordion-item-header"]} ${
              activeIndex === index ? styles["active"] : ""
            }`}>
            {faq.question}
          </div>
          <div
            className={`${styles["accordion-item-body"]} ${
              activeIndex === index ? styles["active"] : ""
            }`}>
            <div className={styles["accordion-item-body-content"]}>
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
