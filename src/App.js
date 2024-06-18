import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "./pages/Header";
import About from "./pages/About";
import Blog from "./pages/Blog";
import SingleBlogPage from "./pages/SingleBlogPage";
import ServicesDetails from "./pages/ServicesDetails";
import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import FormPage from "./pages/FormPage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/:id" element={<ServicesDetails />} />
          <Route path="/blog/:slug" element={<SingleBlogPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/getstarted"
            element={
              <div className="formPage">
                <FormPage />
              </div>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
