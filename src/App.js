import "./App.css";
import React, { useContext } from "react";
// using BrowserRouter, github reload page got 404
// github only supports single page application; for other hosting providers are ok.
import { HashRouter, Routes, Route } from "react-router-dom";
import { DataContext } from "./components/DataProvider";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import AboutMe from "./pages/AboutMe";
import Auth from "./pages/Auth";

function App() {
  const { theme } = useContext(DataContext);
  return (
    <div className={`App ${theme}`}>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
