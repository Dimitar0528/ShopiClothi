import LandingPage from "./components/LandingPage/LandingPage";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import { Route, Routes, Navigate } from "react-router";
import Faq from "./components/Footer/FAQ/FAQ";
import ScrollToTop from "./components/ScrollToTop";
import useDynamicTitle from './hooks/useDynamicTitle'
import PrivacyPolicy from "./components/Footer/Privacy_Policy/Privacy_Policy";
import Header from './components/Header/Header'
import Log_in_Page from "./components/Log_in_Page/Log_in_Page";
import Sign_up_Page from "./components/Sign_up_Page/Sign_up_Page";
function App() {
    useDynamicTitle()
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="*" element={<Navigate to={"/"} />} />
        <Route path="/profile" element={<Log_in_Page/>} />
        <Route path="/sign_up" element={<Sign_up_Page/>} />
      </Routes>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
