import React from "react";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Resource from "./components/Resource"
import Business from "./components/Business"
import Instructor from "./components/Instructor"
import Hire from "./components/Hire"
import Review from "./components/Review"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/business" element={<Business />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/review" element={<Review />} />
          <Route path="/loginform" element={<LoginForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
