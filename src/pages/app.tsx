import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/footer";
import Header from "./component/header";
import About from "./about";
import Blog from "./blog";
import Contact from "./contact";
import Gallery from "./gallery";
import Main from "./main";

import "../css/style.css";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
