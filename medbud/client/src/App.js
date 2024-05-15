import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import necessary components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import Footer from "./components/footer/Footer";
import VirtualConnect from "./components/VirtualConnect";
import Resource from "./components/Resource";
import AdminLoginSignup from "./components/AdminLoginSignup/AdminLoginSignup";
import Signup from "./components/LoginSignup/Signup";

function App() {
  return (
    <BrowserRouter>

      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
            
          <Route path="/about" element={<About />}/>
            
          <Route path="/service" element={<Service />}/>
            
          <Route path="/virtual" element={<VirtualConnect />}/>
            
          <Route path="/resource" element={<Resource />}/>
            
          <Route path="/loginsignup" element={<LoginSignup />}/>
            
          <Route path="/signup" element={<Signup />}/>
            
          <Route path="/adminloginsignup" element={<AdminLoginSignup />}/>
            
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
