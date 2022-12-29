import "./App.css";
import React from "react";
// using BrowserRouter, github reload page got 404
import { HashRouter, Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
