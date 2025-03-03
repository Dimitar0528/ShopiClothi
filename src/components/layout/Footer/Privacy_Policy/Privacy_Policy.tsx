import styles from "./Privacy_Policy.module.css";

export default function PrivacyPolicy () {
  return (
    <div className={styles.privacyPolicyContainer}>
      <h1 className={styles.heading}>Privacy Policy</h1>
      <p className={styles.updatedDate}>
        Last Updated:{" "}
        <strong>
          <i>17 February 2025</i>
        </strong>
      </p>

      <section className={styles.section}>
        <h2>1. Introduction</h2>
        <p>
          Welcome to <strong>ShopiClothi</strong>, an eCommerce platform
          dedicated to providing a seamless and sustainable shopping experience
          for second-hand clothing enthusiasts. Your privacy is of the utmost
          importance to us, and we are fully committed to protecting and
          respecting your personal data in compliance with the{" "}
          <strong>
            General Data Protection Regulation (EU) 2016/679 (GDPR)
          </strong>{" "}
          and all applicable data protection laws.
        </p>
        <p>
          This <strong>Privacy Policy</strong> outlines how we collect, process,
          use, store, and share your personal data when you use our website,
          mobile application, and related services (collectively, the{" "}
          <strong>"Services"</strong>). It also explains your rights and choices
          regarding your personal data and how you can exercise them.
        </p>

        <p>
          By accessing or using ShopiClothi, you acknowledge that you have read,
          understood, and agreed to the terms of this Privacy Policy. If you do
          not agree with this policy, please refrain from using our Services.
        </p>
        <p>
          We encourage you to carefully review this Privacy Policy to understand
          our data collection and processing practices. If you have any
          questions or concerns regarding this policy or your personal data, you
          may contact us at <strong>shopi.clothi@gmail.com</strong>.
        </p>
      </section>

      <section className={styles.section}>
        <h2>2. Information We Collect</h2>
        <p>
          When you interact with <strong>ShopiClothi</strong>, we collect
          various types of personal and non-personal data to enhance our
          Services, improve user experience, and ensure compliance with legal
          obligations. The data we collect falls into the following categories:
        </p>
        <h3>2.1 Personal Information</h3>
        <p>
          We may collect{" "}
          <strong>personally identifiable information (PII)</strong> that you
          voluntarily provide to us when creating an account, making a purchase,
          or communicating with us. This includes, but is not limited to:
        </p>
        <ul>
          <li>Full Name: (First and Last Name)</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>
            Shipping Address: (Street Address, City, Postal Code, Country)
          </li>
          <li>
            Billing Information: (Billing Address, Payment Method Details)
          </li>
          <li>
            Account Credentials: (Username, Password, and Security Questions)
          </li>
        </ul>
        <h3>2.2 Payment Information</h3>
        <p>
          All payments made on ShopiClothi are processed by{" "}
          <strong>third-party payment gateways (e.g., Stripe, PayPal)</strong>{" "}
          that comply with Payment Card Industry Data Security Standards
          (PCI-DSS). We do not store your credit/debit card details on our
          servers. However, we may receive limited payment-related information,
          such as:
        </p>
        <ul>
          <li>Payment status (successful, failed, or pending)</li>
          <li>Transaction ID and order reference number</li>
        </ul>

        <h3>2.3 Communication Data</h3>
        <p>
          When you contact our customer support team or engage with us through
          email, live chat, or social media, we collect:
        </p>
        <ul>
          <li>The content of your messages and inquiries</li>
          <li>Your contact details</li>
          <li>Support ticket history</li>
        </ul>

        <h3>2.4 Device & Usage Data</h3>
        <p>
          To improve our Services and enhance security, we automatically collect
          certain technical data about how you interact with our platform,
          including:
        </p>
        <ul>
          <li>IP Address</li>
          <li>Browser Type and Version</li>
          <li>Operating System</li>
          <li>Date and Time of Access</li>
          <li>Pages Viewed and Clickstream Data</li>
          <li>Referring URL: (the site that directed you to ShopiClothi)</li>
        </ul>

        <h3>2.5 Cookies & Tracking Technologies</h3>
        <p>
          We use{" "}
          <strong>
            cookies, web beacons, and similar tracking technologies
          </strong>{" "}
          to:
        </p>
        <ul>
          <li>Improve website functionality and user experience</li>
          <li>Personalize content and advertisements</li>
          <li>Analyze traffic and site usage patterns</li>
          <li>Enhance security and prevent fraudulent activities</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>3. How We Use Your Data</h2>
        <p>
          We process your personal data in accordance with{" "}
          <strong>GDPR Article 6 (Lawfulness of Processing)</strong> and other
          applicable laws. We only collect and use your data where we have a{" "}
          <strong>legitimate legal basis</strong> to do so. Below, we outline
          the purposes for which we process your data:
        </p>

        <h3>3.1 Providing and Improving Our Services</h3>
        <p>We process your data to:</p>
        <ul>
          <li>Register and manage user accounts</li>
          <li>Facilitate product purchases and transactions</li>
          <li>Handle shipping, delivery, and returns</li>
          <li>Provide customer support and respond to inquiries</li>
          <li>
            Offer personalized recommendations and curated shopping experiences
          </li>
        </ul>

        <h3>3.2 Processing Orders and Payments</h3>
        <p>To successfully complete transactions, we:</p>
        <ul>
          <li>
            Verify payment details through{" "}
            <strong>secure third-party payment processors</strong>
          </li>
          <li>Generate invoices and purchase receipts</li>
          <li>Handle shipping, delivery, and returns</li>
          <li>Communicate order confirmations and shipping updates</li>
        </ul>

        <h3>3.3 Marketing and Promotional Communications</h3>
        <p>
          With your <strong>explicit consent</strong>, we may:
        </p>
        <ul>
          <li>
            Send promotional emails and newsletters about special offers,
            discounts, and new arrivals
          </li>
          <li>
            Deliver targeted advertisements based on your shopping preferences
          </li>
          <li>Notify you about upcoming sales or events</li>
        </ul>
        <p>
          <strong>You have the right to opt out</strong> of marketing emails at
          any time by clicking the <strong>"Unsubscribe"</strong> link in our
          emails or adjusting your preferences in your account settings.
        </p>

        <h3>3.4 Ensuring Security and Fraud Prevention</h3>
        <p>
          To protect our users and maintain the integrity of our platform, we:
        </p>
        <ul>
          <li>
            Monitor and detect{" "}
            <strong>
              fraudulent activities, unauthorized transactions, and security
              breaches
            </strong>
          </li>
          <li>
            Implement <strong>two-factor authentication (2FA)</strong> and other
            security measures
          </li>
          <li>
            Comply with <strong>legal obligations</strong>, such as identity
            verification and regulatory reporting
          </li>
        </ul>

        <h3>3.5 Legal Compliance and Law Enforcement Requests</h3>
        <p>
          We may process or disclose your data if required by law or in response
          to:
        </p>
        <ul>
          <li>Law enforcement investigations</li>
          <li>Court orders, subpoenas, or legal proceedings</li>
          <li>Compliance with financial regulations and tax authorities</li>
        </ul>

        <h3>3.6 Personalization and Analytics</h3>
        <p>To enhance the user experience, we:</p>
        <ul>
          <li>Analyze customer behavior and shopping trends</li>
          <li>Customize content and product recommendations</li>
          <li>Use aggregated and anonymized data for business insights</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>4. Legal Basis for Processing Personal Data</h2>
        <p>
          In accordance with <strong>Article 6 of the GDPR</strong>, we only
          process your personal data when we have a{" "}
          <strong>valid legal basis</strong>. The legal bases under which we
          process your data include:
        </p>

        <h3>4.1 Contractual Necessity</h3>
        <p>
          We process your personal data when it is necessary to fulfill a
          contract with you, including:
        </p>
        <ul>
          <li>Providing access to ShopiClothi and its services</li>
          <li>Processing orders, transactions, and payments</li>
          <li>Delivering purchased items and handling returns or refunds</li>
          <li>Providing customer support and resolving issues</li>
        </ul>
        <p>
          Without this data, we would not be able to fulfill our contractual
          obligations.
        </p>

        <h3>4.2 Legitimate Interests</h3>
        <p>
          We may process your data when it is in our{" "}
          <strong>legitimate business interests</strong>, provided that such
          processing does not{" "}
          <strong>override your fundamental rights and freedoms</strong>. This
          includes:
        </p>
        <ul>
          <li>
            Improving the functionality and user experience of our platform
          </li>
          <li>
            Preventing fraud, security breaches, and unauthorized activities
          </li>
          <li>
            Conducting analytics and market research to improve our services
          </li>
        </ul>

        <h3>4.3 Legal Obligations</h3>
        <p>
          We may process your personal data to comply with applicable legal and
          regulatory requirements, such as:
        </p>
        <ul>
          <li>Taxation, accounting, and financial reporting laws</li>
          <li>
            Compliance with <strong>anti-money laundering (AML)</strong> and
            fraud prevention regulations
          </li>
          <li>
            Responding to court orders, subpoenas, or lawful government requests
          </li>
        </ul>

        <h3>4.4 Consent</h3>
        <p>
          For certain types of data processing, we will request your explicit
          consent, such as:
        </p>
        <ul>
          <li>
            Sending{" "}
            <strong>
              marketing emails, newsletters, and promotional offers
            </strong>
          </li>
          <li>
            Using <strong>cookies and tracking technologies</strong> for
            personalized advertising
          </li>
          <li>Collecting sensitive personal data, if applicable</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>5. Data Sharing and Third-Party Disclosures</h2>
        <p>
          We do not sell, rent, or trade your personal data with third parties
          for their own marketing purposes. However, we may share your data in
          the following circumstances:
        </p>

        <h3>5.1 Service Providers and Vendors</h3>
        <p>
          We collaborate with <strong>trusted third-party</strong> service
          providers who assist us in operating ShopiClothi. These service
          providers have access to your personal data only to the extent
          necessary to perform their functions and are required to comply with
          strict data protection agreements. Such providers include:
        </p>
        <ul>
          <li>
            Payment Processors(e.g., PayPal, Stripe) – to process transactions
            securely
          </li>
          <li>
            Shipping and Logistics Partners – to fulfill orders and manage
            deliveries
          </li>
          <li>Collecting sensitive personal data, if applicable</li>
        </ul>

        <h3>5.2 Legal and Regulatory Compliance</h3>
        <p>
          We may disclose your personal data if required to do so by law or in
          response to valid legal requests, including:
        </p>
        <ul>
          <li>
            Payment Processors(e.g., PayPal, Stripe) – to process transactions
            securely
          </li>
          <li>
            <strong>Government agencies</strong>, law enforcement, or regulatory
            authorities for fraud prevention, security enforcement, or tax
            compliance
          </li>
          <li>Court orders, subpoenas, or legal proceedings</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>6. Your Rights Under GDPR</h2>
        <p>
          As a user of ShopiClothi, you have several rights under the{" "}
          <strong>General Data Protection Regulation (GDPR)</strong> regarding
          your personal data. We are committed to ensuring that you can exercise
          these rights easily and transparently. Below are your key rights:
        </p>

        <h3>6.1 Right to Access (Article 15 GDPR)</h3>
        <p>
          You have the right to request a copy of the personal data we hold
          about you. This includes:
        </p>
        <ul>
          <li>The categories of personal data we process</li>
          <li>
            The recipients or categories of recipients with whom we share your
            data
          </li>
          <li>The period for which we store your data</li>
          <li>The source of the data, if not collected directly from you</li>
        </ul>

        <h3>
          6.2 Right to Erasure (“Right to be Forgotten”) (Article 17 GDPR)
        </h3>
        <p>
          You can request the deletion of your personal data in certain
          circumstances, including:
        </p>
        <ul>
          <li>
            If the data is no longer necessary for the purposes for which it was
            collected
          </li>
          <li>
            If you withdraw your consent and there is no other legal ground for
            processing
          </li>
          <li>
            If you object to processing and there are no overriding legitimate
            grounds
          </li>
          <li>If your data has been processed unlawfully</li>
        </ul>
        <p>
          We may not always be able to comply with deletion requests due to
          <strong>legal obligations</strong> (e.g., tax regulations, fraud
          prevention). If deletion is not possible, we will inform you of the
          reasons.
        </p>

        <h3>6.3 Right to Restrict Processing (Article 18 GDPR)</h3>
        <p>
          You can request that we temporarily stop processing your data in the
          following situations:
        </p>
        <ul>
          <li>
            If you contest the <strong>accuracy</strong>
            of your data (until we verify its accuracy)
          </li>
          <li>
            If processing is <strong>unlawful</strong>, but you prefer
            restriction instead of deletion
          </li>
          <li>
            If we no longer need your data, but you require it for legal claims
          </li>
        </ul>

        <h3>6.4 Right to Object (Article 21 GDPR)</h3>
        <p>You can object to the processing of your personal data if:</p>
        <ul>
          <li>
            The processing is based on our <strong>legitimate interests</strong>
            , and you believe it <strong>infringes on your rights</strong>
          </li>
          <li>
            our data is being used for{" "}
            <strong>direct marketing purposes</strong> (you can opt out at any
            time)
          </li>
        </ul>
        <h3>6.5 Right to Withdraw Consent (Article 7 GDPR)</h3>
        <p>
          If you have provided consent for{" "}
          <strong>marketing, cookies, or any other processing activity</strong>,
          you can withdraw it at any time without affecting the lawfulness of
          processing before withdrawal.
        </p>
      </section>

      <section className={styles.section}>
        <h2>7. Data Security and Protection Measures</h2>
        <p>
          At ShopiClothi, we{" "}
          <strong>prioritize the security and integrity</strong> of your
          personal data. We implement a variety of technical and organizational
          measures to prevent unauthorized access, data breaches, and cyber
          threats.
        </p>

        <h3>7.1 Encryption and Secure Storage</h3>
        <ul>
          <li>
            All personal data is{" "}
            <strong>encrypted in transit and at rest</strong> using
            industry-standard protocols (e.g., TLS 1.2+ and AES-256 encryption)
          </li>
          <li>
            Payment transactions are processed securely by PCI-DSS compliant
            payment providers
          </li>
          <li>
            Passwords are <strong>hashed and salted</strong> before storage (we
            do not store plain-text passwords)
          </li>
        </ul>

        <h3>7.2 Encryption and Secure Storage</h3>
        <ul>
          <li>
            Access to personal data is <strong>restricted</strong> to authorized
            personnel only
          </li>
          <li>
            We enforce <strong>multi-factor authentication (MFA)</strong> for
            admin accounts
          </li>
          <li>
            Sensitive data is protected using{" "}
            <strong>role-based access controls (RBAC)</strong>
          </li>
        </ul>

        <h3>7.3 Data Minimization and Retention Policies</h3>
        <ul>
          <li>
            We only collect and store personal data necessary for service
            operatio
          </li>
          <li>
            We conduct <strong>regular audits</strong>
            to ensure compliance with GDPR principles
          </li>
          <li>
            User accounts that remain inactive for prolonged periods are
            <strong>anonymized or deleted</strong>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>8. Data Retention and Deletion Policies</h2>
        <p>
          At ShopiClothi, we retain personal data only for as long as necessary
          to fulfill the purposes outlined in this Privacy Policy, unless a
          longer retention period is required or permitted by law (e.g., for
          tax, legal, or regulatory purposes). Below, we outline our specific
          retention policies:
        </p>

        <h3>8.1 Data Minimization and Retention Policies</h3>
        <ul>
          <li>
            <strong>User Account Data: </strong> Stored as long as the account
            remains active. If an account is inactive for more than 24 months,
            we will notify the user and, if no response is received, proceed
            with deletion or anonymization.
          </li>
          <li>
            <strong>Transaction and Payment Data: </strong>: Retained for at
            least 5 years to comply with financial and tax regulations.
          </li>
          <li>
            <strong>Customer Support Communications: </strong>Stored for{" "}
            <strong>12 months</strong> after resolution, unless longer storage
            is required for legal reasons.
          </li>
          <li>
            <strong>Website Analytics Data</strong>: Retained for 12 months,
            after which it is either deleted or anonymized for statistical
            purposes.
          </li>
        </ul>

        <h3>8.2 How We Delete Personal Data</h3>
        <p>
          Once data reaches the end of its retention period, we securely delete
          it using industry-standard methods, such as:
        </p>
        <ul>
          <li>
            <strong>Permanent deletion</strong> from databases
          </li>
          <li>
            <strong>Anonymization</strong>, ensuring data cannot be traced back
            to an individual
          </li>
          <li>
            <strong>Secure overwriting</strong> of digital records
          </li>
          <li>
            <strong>Website Analytics Data</strong>: Retained for 12 months,
            after which it is either deleted or anonymized for statistical
            purposes.
          </li>
        </ul>

        <h3>8.3 Exception Cases for Retaining Data</h3>
        <ul>
          <li>
            If necessary to comply with <strong>legal obligations</strong>{" "}
            (e.g., financial records, fraud prevention).
          </li>
          <li>If data is needed to or enforce our Terms of Service.</li>
          <li>
            If anonymized for <strong>statistical or research</strong> purposes,
            in which case it will no longer be linked to an individual.
          </li>
          <li>
            <strong>Website Analytics Data</strong>: Retained for 12 months,
            after which it is either deleted or anonymized for statistical
            purposes.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>9. Children’s Privacy</h2>
        <p>
          At ShopiClothi, we are committed to protecting the privacy of
          children. Our platform is{" "}
          <strong>
            not intended for use by individuals under the age of 16
          </strong>
          , and we do not knowingly collect, use, or disclose personal data from
          children without parental consent.
        </p>

        <h3>9.1 Age Restrictions and Compliance</h3>
        <ul>
          <li>
            Our platform is designed for users{" "}
            <strong>16 years or older</strong>. By using ShopiClothi, users
            confirm they meet this age requirement.
          </li>
          <li>If data is needed to or enforce our Terms of Service.</li>
          <li>
            If we discover that we have collected personal data from a child
            <strong> under 16</strong> without verified parental consent, we
            will take <strong>immediate action</strong> to delete the data.
          </li>
          <li>
            <strong>Website Analytics Data</strong>: Retained for 12 months,
            after which it is either deleted or anonymized for statistical
            purposes.
          </li>
        </ul>

        <h3>9.2 Parental and Guardian Rights</h3>
        <p>
          Parents or legal guardians who believe that their child has provided
          personal data to ShopiClothi without their consent can:
        </p>
        <ul>
          <li>
            <strong>Request deletion</strong> of their child’s data by
            contacting shopi.clothi@gmail.com.
          </li>
          <li>If data is needed to or enforce our Terms of Service.</li>
          <li>
            <strong>Review any collected information</strong> and request
            modifications if necessary.
          </li>
          <li>
            <strong>Website Analytics Data</strong>: Retained for 12 months,
            after which it is either deleted or anonymized for statistical
            purposes.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>10. Changes to This Privacy Policy</h2>
        <p>
          We reserve the right to modify or update this Privacy Policy at any
          time to reflect changes in legal requirements, business operations, or
          user privacy expectations.
        </p>

        <h3>10.1 How We Notify Users of Changes</h3>
        <p>
          If we make <strong>significant</strong> changes to our Privacy Policy,
          we will:
        </p>
        <ul>
          <li> 
            <strong>Notify</strong> registered users via email at least 30 days
            before the changes take effect.
          </li>
          <li>If data is needed to or enforce our Terms of Service.</li>
          <li>
            <strong>Post an update</strong> on our website with the new Privacy
            Policy and the effective date.
          </li>
          <li>
            <strong>Highlight</strong> key modifications to ensure transparency.
          </li>
        </ul>
        <p>
          If you disagree with any future updates to this Privacy Policy, you
          may choose to stop using our services and request account deletion.
        </p>
        <p>
          For any questions regarding changes to this Privacy Policy, please
          contact <strong>shopi.clothi@gmail.com</strong>.
        </p>
      </section>
    </div>
  );
};


