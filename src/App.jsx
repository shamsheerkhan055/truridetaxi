import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainPage from './Components/MainPage';
import Features from "./Components/Features";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Testimonials from "./Components/Testimonials";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import GetTheApp from "./Components/GetTheApp";
import HowItWorks from "./Components/HowItWorks";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/gettheapp" element={<GetTheApp />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
export default App;