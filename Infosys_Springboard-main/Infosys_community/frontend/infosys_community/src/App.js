import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import WhySection from "./components/WhySection";
import Footer from "./components/Footer";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm"; // Import Login Form
import AdminRegister from "./components/adminRegister";
import UserRegister from "./components/userRegister";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Main Home Page */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutSection />
                <WhySection />
                <Footer />
              </>
            }
          />

          {/* Signup Form Page */}
          <Route path="/signup" element={<SignupForm />} />

          {/* Login Form Page */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register/resident" element={<UserRegister />} />
          <Route path="/register/admin" element={<AdminRegister />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;