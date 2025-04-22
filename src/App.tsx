import { Route, Routes, Navigate, useLocation } from "react-router";
import { ToastContainer } from "react-toastify";

import useDynamicTitle from "./hooks/useDynamicTitle";


import LandingPage from "./components/LandingPage/LandingPage";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/layout/Footer/Footer";
import Faq from "./components/layout/Footer/FAQ/FAQ";
import PrivacyPolicy from "./components/layout/Footer/Privacy_Policy/Privacy_Policy";
import Header from "./components/layout/Header/Header";
import TermsOfService from "./components/layout/Footer/Terms_Of_Service/Terms_Of_Service";
import Log_in_Page from "./components/authentication/Log_in_Page/Log_in_Page";
import Sign_up_Page from "./components/authentication/Sign_up_Page/Sign_up_Page";
import ScrollToTopButton from "./components/ui/ScrollToTopButton/ScrollToTopButton";
import ShoppingBag from "./components/ShoppingBag/ShoppingBag";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  useDynamicTitle();
  const location = useLocation();

  // Define the paths where we don't want to show the Newsletter
  const hideNewsletterRoutes = [
    "/profile",
    "/sign_up",
    "/shopping-bag"
  ];

  const shouldHideNewsletter = () => {
    return hideNewsletterRoutes.some((route) =>
      location.pathname.startsWith(route)
    );
  };

  return (
    <>
      <ToastContainer />
      <ScrollToTopButton />
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<Log_in_Page />} />
          <Route path="/sign-up" element={<Sign_up_Page />} />
          <Route path="/shopping-bag" element={<ShoppingBag />} />
          <Route path="/products/:productID" element={<ProductDetails />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>

        {/* Render Newsletter only if the current path is NOT in the hideNewsletterRoutes list */}
        {!shouldHideNewsletter() && <Newsletter />}
      </main>
      <Footer />
    </>
  );
}

export default App;
