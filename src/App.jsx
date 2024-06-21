import {  Router,BrowserRouter, Routes, Route } from 'react-router-dom';
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
      <div>
         <BrowserRouter >
          <Routes >
            <Route path="/" element={<MainPage />} />
            <Route path="/features" element={<Features/>} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/howitworks" element={<HowItWorks />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contactus" element={<ContactUs />} /> 
            <Route path="/gettheapp" element={<GetTheApp />} /> 
          </Routes>
          </BrowserRouter>
        {/* <Router >
          <Routes>
          <Route path="/" element={<Mainpage />} />
            <Route path="/features" element={<Features/>} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/howitworks" element={<HowItWorks />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contactus" element={<ContactUs />} /> 
            <Route path="/gettheapp" element={<GetTheApp />} /> 
          </Routes>
        </Router> */}
        <div>
          
        </div>
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
