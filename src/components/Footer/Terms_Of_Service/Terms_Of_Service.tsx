import "./Terms_Of_Service.css";
import { Link } from "react-router";
const TermsOfService = () => {
  return (
    <div className="terms-container">
      <h1>Terms of Service</h1>
      <p className="updatedDate">
        Last Updated:{" "}
        <strong>
          <i>19 February 2025</i>
        </strong>
      </p>
      <section className="terms-section">
        <h2>1. Introduction</h2>
        <p>
          {" "}
          Welcome to <strong>ShopiClothi</strong>, your trusted marketplace for
          second-hand clothing. By accessing, browsing, or using our platform,
          including any features, services, or content made available through
          ShopiClothi (the "Platform"), you acknowledge that you have read,
          understood, and agree to comply with these{" "}
          <strong>Terms of Service</strong> (the "Terms"). These Terms form a
          legal agreement between you (the "User") and ShopiClothi (the
          "Company," "we," "our," or "us"). If you do not agree with any part of
          these Terms, you should refrain from using the Platform.
        </p>
        <p>
          We reserve the right to update, modify, or change these Terms at any
          time and at our sole discretion. Any changes made will be posted on
          this page with an updated revision date. It is your responsibility to
          review these Terms periodically for any updates. Your continued use of
          the Platform after such changes will constitute your acceptance of the
          modified Terms.
        </p>
        <p>
          ShopiClothi offers a secure and reliable marketplace for buying and
          selling second-hand clothing. Our mission is to promote sustainable
          fashion by connecting sellers and buyers in a transparent and ethical
          manner. These Terms will guide your interactions with the Platform,
          including account creation, transactions, and participation in our
          community.
        </p>
        <p>
          <strong>
            If you do not agree with these Terms, please do not use our
            services.
          </strong>
        </p>
      </section>

      <section className="terms-section">
        <h2>2. User Eligibility & Accounts</h2>
        <p>
          To use our platform, you must meet the following eligibility criteria:
        </p>
        <ul>
          <li>
            <strong>Age Restrictions:</strong> You must be at least 16 years
            old, or the age of majority in your jurisdiction, to create an
            account on the Platform. If you are under the age of 16, you may
            only use the Platform with the consent of a parent or legal guardian
            who has agreed to these Terms. By creating an account, you confirm
            that you are of legal age or that you have received parental
            consent.
          </li>
          <li>
            <strong>Account Creation:</strong> To participate in buying or
            selling on the Platform, you must create an account. You agree to
            provide accurate, up-to-date, and complete information during the
            registration process, and to maintain the accuracy of this
            information. Failure to do so may result in account suspension or
            termination.
          </li>
          <li>
            <strong>Prohibited Activities:</strong> You agree not to engage in
            any activities that violate the rights of others or interfere with
            the proper functioning of the Platform. Prohibited activities
            include, but are not limited to, creating false identities,
            impersonating others, or providing inaccurate or misleading
            information.
          </li>
        </ul>
        <p>
          By creating an account, you also agree to receive important
          notifications related to your account, including transaction updates,
          promotions, and platform changes, which may be communicated via email
          or other messaging channels. You may update your preferences for
          notifications at any time through your account settings.
        </p>
      </section>

      <section className="terms-section">
        <h2>3. Buying & Selling on ShopiClothi</h2>
        <p>
          ShopiClothi is a marketplace that allows users to buy and sell
          second-hand clothing. By using the Platform for buying or selling, you
          agree to follow these rules and guidelines:
        </p>
        <ul>
          <li>
            <strong>Listing Items:</strong> As a seller, you agree to provide
            clear, accurate, and honest descriptions of the items you list on
            the Platform. This includes information on the condition, size,
            fabric type, and any defects of the clothing item. You must upload
            high-quality images of the items to give buyers a realistic
            understanding of the product.
          </li>
          <li>
            <strong>Pricing:</strong> Sellers are responsible for setting the
            prices of their items. Prices must be reasonable, accurate, and in
            compliance with local laws. We encourage sellers to be transparent
            about pricing, ensuring that no false pricing claims or misleading
            practices are used to attract buyers. ShopiClothi reserves the right
            to remove listings that violate our pricing policy.
          </li>
          <li>
            <strong>Transaction Process:</strong> Once a buyer purchases an
            item, the seller will receive a notification to fulfill the order.
            Buyers are expected to make full payment at the time of purchase
            through ShopiClothi’s secure payment system, which may involve
            third-party payment processors. The transaction will be considered
            complete once the buyer has successfully paid for the item.
          </li>
          <li>
            <strong>Shipping & Delivery:</strong> Sellers are responsible for
            shipping the items promptly after receiving payment, following the
            shipping methods provided during the listing process. Sellers must
            ensure that items are packaged securely to prevent damage during
            transit. All shipping costs, including any import duties, taxes, or
            fees, must be disclosed to the buyer prior to the transaction.
            ShopiClothi is not responsible for delays, damages, or losses during
            shipping.
          </li>
          <li>
            <strong>Returns & Refunds:</strong> Buyers have the right to request
            a return and refund within a specified period (usually 14 days) if
            the item does not meet the description or is damaged. Sellers are
            required to honor these return requests, except in cases where the
            buyer has provided inaccurate or incomplete information. If a return
            is agreed upon, the seller is responsible for providing a refund or
            replacement. Disputes regarding returns, refunds, or item quality
            will be resolved through ShopiClothi’s dispute resolution process.
          </li>
          <li>
            <strong>Prohibited Listings:</strong> Users may not list any items
            that are counterfeit, stolen, or illegal. Additionally, items that
            promote hate speech, violence, or illegal activities are strictly
            prohibited. Any user found violating this policy will have their
            account suspended or terminated.
          </li>
        </ul>
        <p>
          By using the ShopiClothi platform for buying or selling, you agree to
          abide by these rules and acknowledge that you are responsible for your
          transactions. ShopiClothi takes no responsibility for the quality,
          authenticity, or condition of items listed by third-party sellers.
        </p>
      </section>

      <section className="terms-section">
        <h2>4. Privacy and Data Protection</h2>
        <p>
          We are committed to protecting your personal information in compliance
          with applicable data protection laws, including the{" "}
          <strong>General Data Protection Regulation</strong> (GDPR) for users
          within the European Union.
        </p>
        <p>
          By using our Platform, you consent to the collection, use, and sharing
          of your personal data as described in this section and our Privacy
          Policy. Please review our Privacy Policy to understand how we collect,
          process, store, and protect your personal data.
        </p>
        <ul>
          <li>
            <strong>Personal Data Collection:</strong> When you register for an
            account, place an order, or interact with the Platform in any way,
            we may collect personal information such as your name, email
            address, phone number, shipping address, payment details, and any
            other information necessary for providing our services. This data is
            used to facilitate transactions, improve user experience, and for
            customer support purposes.
          </li>
          <li>
            <strong>Cookies and Tracking Technologies:</strong> ShopiClothi uses
            cookies and similar technologies to enhance your browsing
            experience, analyze website traffic, and deliver personalized
            content and advertising. Cookies are small text files stored on your
            device, which allow us to remember your preferences and improve
            functionality. You can control cookie settings through your browser
            preferences, but please note that disabling cookies may affect the
            availability and performance of certain features on the Platform.
          </li>
          <li>
            <strong>Third-Party Services:</strong> We may share your data with
            trusted third-party services that assist us in providing the
            Platform and processing transactions (e.g., payment processors,
            shipping services). These third parties are obligated to protect
            your data in accordance with our instructions and applicable privacy
            laws. ShopiClothi does not sell or rent your personal data to third
            parties for marketing purposes without your explicit consent.
          </li>
        </ul>
        <p>
          By using ShopiClothi, you agree to the collection and use of your
          personal data as outlined in this section and in our{" "}
          <Link className="privacy-link" to="/privacy-policy">
            Privacy Policy
          </Link>
          . If you do not agree with our data practices, you should refrain from
          using the Platform.
        </p>
      </section>

      <section className="terms-section">
        <h2>5. Intellectual Property Rights</h2>
        <p>
          We respects the intellectual property rights of others and expects
          users to do the same. This section outlines the ownership of content
          and the terms under which content may be used on the Platform.
        </p>
        <ul>
          <li>
            <strong>Ownership of Content:</strong> All content available on the
            Platform, including but not limited to logos, trademarks, text,
            graphics, images, videos, software, and the general design of the
            Platform (collectively referred to as the "Content"), is owned by
            ShopiClothi or its licensors and is protected by intellectual
            property laws, including copyright and trademark laws. Unauthorized
            use, reproduction, or distribution of any Content is strictly
            prohibited.
          </li>
          <li>
            <strong>License to Use the Platform:</strong> When you access or use
            the Platform, ShopiClothi grants you a limited, non-exclusive,
            non-transferable, and revocable license to use the Platform for
            personal, non-commercial purposes, subject to these Terms. This
            license allows you to view and interact with the Content solely for
            the purpose of using the services provided by ShopiClothi.
          </li>
          <li>
            <strong>User-Generated Content:</strong> By posting, uploading, or
            submitting content (such as product listings, reviews, and comments)
            to the Platform, you retain ownership of the content you create.
            However, by submitting this content, you grant ShopiClothi a
            worldwide, royalty-free, perpetual, irrevocable, and fully
            sublicensable license to use, display, reproduce, modify, adapt, and
            distribute the content for the purpose of promoting the Platform and
            providing our services. This license is granted regardless of
            whether the content is used in its original form or modified.
          </li>
          <li>
            <strong>Trademarks:</strong> The trademarks, logos, and service
            marks used on the Platform, including the name “ShopiClothi,” are
            the property of ShopiClothi or its licensors. You may not use these
            trademarks without prior written consent from ShopiClothi. All other
            trademarks and service marks not owned by ShopiClothi are the
            property of their respective owners.
          </li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>6. User Responsibilities and Conduct</h2>
        <p>
          By accessing or using ShopiClothi, you agree to comply with all
          applicable laws, regulations, and these Terms of Service. You are
          responsible for your conduct while using the Platform, including any
          content you upload or post, and agree to the following:
        </p>
        <ul>
          <li>
            <strong>Accurate Information:</strong> You agree to provide
            accurate, up-to-date, and complete information when creating an
            account, placing an order, or interacting with the Platform in any
            other way. You are responsible for maintaining the accuracy of the
            information associated with your account, including your contact
            details and shipping address.
          </li>
          <li>
            <strong>Respectful Interaction:</strong> You agree to treat other
            users and customers with respect and courtesy. Harassment, bullying,
            hate speech, or any form of abusive or harmful behavior towards
            others will not be tolerated. You also agree not to submit any
            defamatory, libelous, or offensive content to the Platform.
          </li>
          <li>
            <strong>Account Security:</strong> You are responsible for
            maintaining the confidentiality of your account and password and for
            restricting access to your account. You agree to immediately notify
            ShopiClothi of any unauthorized use of your account or any other
            security breach. You agree to take appropriate steps to secure your
            account, including choosing a strong password and logging out after
            each session.
          </li>
          <li>
            <strong>Compliance with Local Laws:</strong> You agree to comply
            with all applicable local, state, national, and international laws
            while using the Platform, including those relating to the sale of
            goods, consumer protection, tax laws, and data privacy. You are
            solely responsible for any legal obligations arising from your use
            of the Platform.
          </li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>7. Orders, Pricing, and Payments</h2>
        <p>
          ShopiClothi strives to provide a seamless shopping experience, and we
          want you to be fully informed about how your orders are processed,
          priced, and paid for. This section outlines the terms for ordering
          products, pricing policies, and payment methods on our Platform.
        </p>
        <ul>
          <li>
            <strong>Placing an Order:</strong> By placing an order on
            ShopiClothi, you are making an offer to purchase the items in your
            cart. Your order is subject to acceptance by ShopiClothi, which we
            will confirm via email or through our platform interface. We reserve
            the right to reject or cancel any order for reasons such as
            unavailability of stock, payment issues, or suspicion of fraud.
          </li>
          <li>
            <strong>Pricing:</strong> Prices for items are displayed on the
            Platform and are subject to change without notice. The price at the
            time of checkout is the final price you will pay for an item.
            ShopiClothi may offer promotional discounts, coupons, or special
            pricing, which will be clearly communicated on the Platform. All
            prices are inclusive of applicable taxes unless otherwise stated.
          </li>
          <li>
            <strong>Order Confirmation and Shipping:</strong> Once your order is
            accepted and processed, we will send you an order confirmation along
            with details of the estimated shipping date. You will also receive
            tracking information once the order is shipped. ShopiClothi makes
            every effort to ship orders promptly, but we are not responsible for
            any delays in delivery caused by third-party carriers or unforeseen
            circumstances.
          </li>
          <li>
            <strong>Refunds and Cancellations:</strong> If you are not satisfied
            with your purchase, you may be eligible for a refund or exchange
            based on our Return and Refund Policy. Please note that certain
            items may be non-refundable due to their nature. Refunds will be
            processed according to the payment method used for the original
            transaction. If you wish to cancel an order before it has been
            processed or shipped, please contact us immediately. Refunds or
            adjustments for canceled orders will be issued within a reasonable
            timeframe.
          </li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>8. Shipping and Delivery</h2>
        <ul>
          <li>
            <strong>Shipping Methods and Providers:</strong> We use trusted
            third-party carriers to deliver products to our customers. Shipping
            options available to you will depend on your location and the items
            in your order. During the checkout process, you will be presented
            with the available shipping methods, estimated delivery times, and
            associated costs.
          </li>
          <li>
            <strong>Delivery Times:</strong> Estimated delivery times are
            provided at checkout based on the shipping method selected. While we
            make every effort to ensure that your order arrives within the
            estimated time frame, delivery times are estimates and are subject
            to change based on external factors such as carrier delays, weather
            conditions, and customs processing. ShopiClothi is not responsible
            for any delays caused by third-party carriers, and we cannot
            guarantee delivery on a specific date.
          </li>
          <li>
            <strong>Order Tracking:</strong> Once your order has been
            dispatched, you will receive tracking information (if available) so
            that you can monitor the status of your delivery. Tracking details
            will be provided via email or within your ShopiClothi account,
            depending on your preferences.
          </li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>9. Returns and Refunds</h2>
        <ul>
          <li>
            <strong>Return Eligibility:</strong> You may return most items
            purchased on ShopiClothi within a specified return period (usually
            14-30 days) after receiving your order. To be eligible for a return,
            items must be unused, in original condition, and in their original
            packaging. We reserve the right to refuse returns if the items do
            not meet these conditions.
          </li>
          <li>
            <strong>Initiating a Return:</strong> To initiate a return, you must
            contact ShopiClothi customer support through the provided contact
            form or email. You will need to provide proof of purchase and
            details of the items you wish to return. Once your return is
            approved, we will provide you with return instructions and a return
            shipping label if applicable.
          </li>
          <li>
            <strong>Refund Processing:</strong> Once we receive your returned
            items and confirm they meet the return eligibility criteria, we will
            process your refund within a reasonable time (usually 5-10 business
            days). Refunds will be issued to the original payment method used
            for the purchase. Please note that it may take additional time for
            the refund to appear on your payment account, depending on your
            payment provider's processing times.
          </li>
          <li>
            <strong>Exchanges:</strong> ShopiClothi does not typically offer
            exchanges; however, you may return your items and place a new order
            for the desired product. If the item is unavailable or discontinued,
            you will be notified during the return process.
          </li>
          <li>
            <strong>Return Shipping Costs:</strong> Unless the item is defective
            or was shipped in error, the customer is responsible for return
            shipping costs. In some cases, ShopiClothi may offer free return
            shipping for specific products or during promotional return periods.
            The return shipping costs will be deducted from your refund if
            applicable.
          </li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>10. Privacy and Data Protection</h2>
        <ul>
          <li>
            <strong>Sharing Your Information:</strong> We will not sell, rent,
            or trade your personal information to third parties. However, we may
            share your data with trusted service providers who assist us in
            operating the Platform, fulfilling orders, or providing customer
            service. These third parties are bound by strict confidentiality
            agreements and are only permitted to use your data for the purposes
            outlined in our Privacy Policy.
          </li>
          <li>
            <strong>Data Retention:</strong> We will retain your personal data
            for as long as necessary to fulfill the purposes outlined in this
            Privacy and Data Protection section, unless a longer retention
            period is required or permitted by law. You may request that we
            delete your account and personal data at any time by contacting our
            customer support team.
          </li>
          <li>
            <strong>Your Rights:</strong> Depending on your location, you may
            have certain rights with respect to your personal data, including
            the right to access, correct, delete, or restrict its use. You may
            also have the right to object to certain types of processing, such
            as marketing communications. To exercise any of these rights, please
            contact ShopiClothi customer support.
          </li>
          <li>
            <strong>Security:</strong> We take the security of your personal
            data seriously and implement appropriate technical and
            organizational measures to protect it from unauthorized access, use,
            or disclosure. However, no method of transmission over the internet
            or electronic storage is 100% secure, and we cannot guarantee
            absolute security.
          </li>
          <li>
            <strong>Third-Party Links:</strong> The Platform may contain links to third-party
            websites or services that are not operated by ShopiClothi. We are
            not responsible for the privacy practices or content of these
            third-party sites. Please review their privacy policies before
            submitting any personal data.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default TermsOfService;
