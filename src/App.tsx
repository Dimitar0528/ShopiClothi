import LandingPage from "./components/LandingPage/LandingPage";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import { Route, Routes, Navigate } from "react-router";
import Faq from "./components/Footer/FAQ/FAQ";
import ScrollToTop from "./components/ScrollToTop";
import useDynamicTitle from './hooks/useDynamicTitle'
import PrivacyPolicy from "./components/Footer/Privacy_Policy/Privacy_Policy";
function App() {
    useDynamicTitle()
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
