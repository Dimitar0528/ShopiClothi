import { Route, Routes, Navigate, useLocation } from "react-router";
import LandingPage from "./components/LandingPage/LandingPage";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import Faq from "./components/Footer/FAQ/FAQ";
import useDynamicTitle from "./hooks/useDynamicTitle";
import PrivacyPolicy from "./components/Footer/Privacy_Policy/Privacy_Policy";
import Header from "./components/Header/Header";
import TermsOfService from "./components/Footer/Terms_Of_Service/Terms_Of_Service";
import Log_in_Page from "./components/Log_in_Page/Log_in_Page";
import Sign_up_Page from "./components/Sign_up_Page/Sign_up_Page";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

function App() {
  useDynamicTitle();
  const location = useLocation();

  // Define the paths where we don't want to show the Newsletter
  const hideNewsletterRoutes = ["/profile", "/sign_up"];

  return (
    <>
    <ScrollToTopButton />
      <Header />
      <div id="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<Log_in_Page />} />
          <Route path="/sign-up" element={<Sign_up_Page />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>

        {/* Render Newsletter only if the current path is NOT in the hideNewsletterRoutes list */}
        {!hideNewsletterRoutes.includes(location.pathname) && <Newsletter />}
      </div>
      <Footer />
    </>
  );
}

export default App;
